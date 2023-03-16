package com.greg.back.services;

import com.greg.back.models.Point;
import com.greg.back.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional(readOnly = true)
public class PointService {

    private final PointRepository pointRepository;

    @Autowired
    public PointService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    public List<Point> findAllByOwnerId(Long id) {
        return pointRepository.findAllByOwnerId(id);
    }

    @Transactional
    public Point save(Point point, Long id) {
        checkHit(point);
        point.setOwnerId(id);
        return pointRepository.save(point);
    }

    @Transactional
    public void deleteAll(Long id) {
        pointRepository.deleteAllByOwnerId(id);
    }

    public void checkHit(Point point) {
        double x = point.getX();
        double y = point.getY();
        double r = point.getR();
        boolean hit = false;

        if (x<=r && x >= 0 && y >= 0 && y<=r) {
            hit = true; //circle check
        } else if (y <=  x + r && y >= 0 && x <= 0) {
            hit = true; //triangle check
        } else if (y <= 0 && x >= 0 && (x * x + y * y <= r*r)) {
            hit = true; //rectangle check
        }
        point.setHit(hit);
    }
}