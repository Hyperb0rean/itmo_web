package com.example.labwork2.servlets;

import com.example.labwork2.servlets.beans.HttpError;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ErrorHandlerServlet", value = "/ErrorHandlerServlet")
public class ErrorHandlerServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpError httpError = (HttpError) request.getAttribute("error");
        response.setStatus(httpError.getStatusCode());
        response.getWriter().println(httpError.getErrorMessage());
    }
}
