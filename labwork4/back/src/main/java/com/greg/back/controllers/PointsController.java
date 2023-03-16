package com.greg.back.controllers;


import com.greg.back.dto.PointRequest;
import com.greg.back.dto.PointResponse;
import com.greg.back.services.UserService;
import com.greg.back.models.Point;
import com.greg.back.models.User;
import com.greg.back.security.jwt.AuthTokenFilter;
import com.greg.back.services.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/points")
public class PointsController {

    private final PointService pointService;
    private final UserService userService;
    private final AuthTokenFilter authTokenFilter;

    @Autowired
    public PointsController(PointService pointService, UserService userService, AuthTokenFilter authTokenFilter) {
        this.pointService = pointService;
        this.userService = userService;
        this.authTokenFilter = authTokenFilter;
    }

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PointResponse>> getPoints(HttpServletRequest request) {
        String jwt = authTokenFilter.parseJwt(request);
        String username = authTokenFilter.jwtUtils.getUserNameFromJwtToken(jwt);
        User user = userService.findByUsername(username);
        List<PointResponse> points = pointService.findAllByOwnerId(user.getId()).stream()
                .map(PointsController::convertToPointResponse)
                .collect(Collectors.toList());
        return new ResponseEntity<>(points, HttpStatus.OK);
    }

    @PostMapping()
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PointResponse> addPoint(@RequestBody PointRequest pointRequest, HttpServletRequest request) {
        String jwt = authTokenFilter.parseJwt(request);
        String username = authTokenFilter.jwtUtils.getUserNameFromJwtToken(jwt);
        User user = userService.findByUsername(username);
        return new ResponseEntity<>(convertToPointResponse(pointService.save(convertToPoint(pointRequest), user.getId())), HttpStatus.CREATED);
    }

    private Point convertToPoint(PointRequest pointRequest) {
        Point point = new Point();
        point.setX(pointRequest.getX());
        point.setY(pointRequest.getY());
        point.setR(pointRequest.getR());
        return point;
    }

    private static PointResponse convertToPointResponse(Point point) {
        PointResponse pointResponse = new PointResponse();
        pointResponse.setX(point.getX());
        pointResponse.setY(point.getY());
        pointResponse.setR(point.getR());
        pointResponse.setHit(point.isHit());
        return pointResponse;
    }

    @DeleteMapping()
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public void deleteAll(HttpServletRequest request) {
        String jwt = authTokenFilter.parseJwt(request);
        String username = authTokenFilter.jwtUtils.getUserNameFromJwtToken(jwt);
        User user = userService.findByUsername(username);
        pointService.deleteAll(user.getId());
    }
}