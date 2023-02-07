<%@ page import="com.example.labwork2.servlets.beans.Storage" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:useBean id="storage" scope="session" class="com.example.labwork2.servlets.beans.Storage"/>

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <title>Social Credit Game | Lab 1</title>
        <script type="text/javascript" src="js/svg.js"></script>
        <script type="text/javascript" src="js/jquery-3.6.1.js"></script>
        <script type="text/javascript" src="js/graphHandler.js"></script>
        <script type="text/javascript" src="js/requestHandler.js"></script>
        <script type="text/javascript" src="js/dataHandler.js"></script>
        <script type="text/javascript" src="js/tableHandler.js"></script>
        <script type="text/javascript" src="js/onLoadScript.js"></script>
        <script type="text/javascript" src="js/alertHandler.js"></script>
        <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<table >
    <tr>
        <div id="header">
            <p id="name-text" class="text">Sosnovtsev Gregoriy Alexeevich | 索斯诺夫采夫·格雷戈里·阿列克谢耶维奇</p>
            <p id="group-text" class="text">P32102 var 1020 | P32102 变量 1020</p>
        </div>
    </tr>
    <tr>
        <td class="content-div" width="35%" >
            <img id="gif" src="res/icegif-1009.gif" alt="禁止污垢回鹘"> <br><br>
            <img id="credits" src="res/pluscredits.jpg">
        </td>
        <td width="35%"  >
            <div id="plot" >
            </div>
            <form class="form" id="form" onsubmit="return sendOriginRequest()" method="post" >

                <div class="X_value">
                    <label for="X_value" class="input-label">Value of X: | X 值：</label><br><br>
                    <select id="X_value" size="1" name="X_value">
                        <option selected value="-2">-2</option>
                        <option value="-1.5">-1.5</option>
                        <option value="-1">-1</option>
                        <option value="-0.5">-0.5</option>
                        <option value="0">0</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                    </select>
                </div>

                <div class="Y_value">
                    <label for="Y_value" class="input-label">Value of Y: (up to 10 signs)|  的值：</label><br><br>
                    <input type="text" id="Y_value" name="Y_value" placeholder="Enter Y (-3,5) | 输入 Y (-3,5)" >
                </div>

                <div class="R_value">
                    <label  class="input-label">Value of R: | R值：</label><br><br>
                    <select id="R_value" size="1" name="R_value">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div class="text">
                    <span id="X_error"></span>
                    <span id="Y_error"></span>
                    <span id="R_error"></span>
                </div>

                <div class="text" id="Alert_text">
                </div>

                <input type="submit" value="Submit | 提交">

            </form>

        </td>
        <td class="content-div" width="30%" >
            <table id="table">
                <tr>
                    <th class="text">X</th>
                    <th class="text">Y</th>
                    <th class="text">R</th>
                    <th class="text">Current Time | 当前时间 </th>
                    <th class="text">Execution Time | 执行时间处理时间</th>
                    <th class="text">Result | 结果</th>
                </tr>
                <%=storage.getRows()%>
            </table>
        </td>
    </tr>
</table>
</body>
<script>
    {resetDots(<%=storage.getJson()%>)}
</script>
</html>




