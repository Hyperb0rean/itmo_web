package com.example.labwork2.servlets.filters;



import com.example.labwork2.servlets.beans.Coordinates;
import com.example.labwork2.servlets.beans.HttpError;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "ValidationFilter", urlPatterns = "*")
public class ValidationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        request.setAttribute("startTime", System.nanoTime());
        HttpServletRequest httpRequest = (HttpServletRequest) request;

        if (httpRequest.getMethod().equals("POST")) {
            request.setAttribute("startTime", System.nanoTime());
            try {
                double x = Double.parseDouble(request.getParameter("x"));
                double y = Double.parseDouble(request.getParameter("y"));
                double r = Double.parseDouble(request.getParameter("r"));

                if(!(r==1 || r==2 || r==3 || r==4 ||r==5) ){
                    throw new NumberFormatException("R is invalid");
                }
                Coordinates coordinates = new Coordinates(x, y, r);

                request.setAttribute("coordinates", coordinates);
            } catch (NullPointerException | NumberFormatException e) {
                request.setAttribute("error", new HttpError(400, e.getMessage()));
            }
        }

        chain.doFilter(request, response);
    }
}