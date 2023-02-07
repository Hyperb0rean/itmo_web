package com.example.labwork2.servlets;

import com.example.labwork2.servlets.beans.Coordinates;
import com.example.labwork2.servlets.beans.HttpError;
import com.example.labwork2.servlets.beans.Row;
import com.example.labwork2.servlets.beans.Storage;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("error", new HttpError(404, "<h1>Page was not found:(</h1>"));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Coordinates coordinates = (Coordinates) request.getAttribute("coordinates");

        boolean result = isHit(coordinates);

        Row row = new Row();

        row.setY(coordinates.getY());
        row.setX(coordinates.getX());
        row.setR(coordinates.getR());
        row.setCurrentTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        row.setExecutionTime((double) (System.nanoTime() - (Long) request.getAttribute("startTime")) / 1000000);
        row.setResult(result);

        HttpSession session = request.getSession();
        ((Storage)session.getAttribute("storage")).add(row);

        response.setHeader("Cache-Control", "no-cache");
        response.setContentType("application/json");

        response.getWriter().println(new Gson().toJson(row));
    }

    private boolean isHit(Coordinates coordinates) {
        return isQCircleHit(coordinates) || isRectangleHit(coordinates) || isTriangleHit(coordinates);
    }

    private boolean isTriangleHit(Coordinates coordinates) {
        boolean isThirdQuarter = coordinates.getX() <= 0 && coordinates.getY() <= 0;
        return isThirdQuarter && (coordinates.getY() + 0.5*coordinates.getX() >= (-1)*coordinates.getR());
    }

    private boolean isRectangleHit(Coordinates coordinates) {
        boolean isFirstQuarter = coordinates.getX() >= 0 && coordinates.getY() >= 0;
        return isFirstQuarter && Math.abs(coordinates.getY()) <= coordinates.getR() && Math.abs(coordinates.getX()) <= coordinates.getR();
    }

    private boolean isQCircleHit(Coordinates coordinates) {
        boolean isSecondQuarter = coordinates.getX() <= 0 && coordinates.getY() >= 0;
        return isSecondQuarter && (coordinates.getX() * coordinates.getX() + coordinates.getY() * coordinates.getY() <= coordinates.getR() * coordinates.getR());
    }
    }

