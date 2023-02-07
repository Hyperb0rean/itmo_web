package com.example.labwork2.servlets;

import com.example.labwork2.servlets.beans.HttpError;
import com.example.labwork2.servlets.beans.Storage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;


@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("error", new HttpError(404, "<h1>Page was not found:(</h1>"));
        getServletContext().getRequestDispatcher("/ErrorHandlerServlet").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpError errorMessage = (HttpError) request.getAttribute("error");
        String sessionClear = request.getParameter("session");

        if (sessionClear != null && sessionClear.equals("clear")) {
            ((Storage) request.getSession().getAttribute("storage")).clear();
        }
        if(request.getSession().getAttribute("storage") == null && request.getSession().isNew()){
            request.getSession().setAttribute("storage",new Storage());
        }

        if (errorMessage != null) {
            getServletContext().getRequestDispatcher("/ErrorHandlerServlet").forward(request, response);
        }

        getServletContext().getRequestDispatcher("/AreaCheckServlet").forward(request, response);



    }
}
