package com.example.labwork2.servlets.beans;

import com.google.gson.Gson;
import lombok.*;

import javax.annotation.ManagedBean;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ManagedBean
@SessionScoped
public class Storage implements Serializable {
    private List<Row> list = Collections.synchronizedList(new LinkedList<>());

    public void add(Row row) {
        list.add(row);
    }

    public  String getRows() {
        List<Row> rowList = this.getList();
        ListIterator<Row> rowListIterator = rowList.listIterator(rowList.size());
        StringBuilder rows = new StringBuilder();
        while (rowListIterator.hasPrevious()) {
            Row row = rowListIterator.previous();
            rows.append("<tr>")
                    .append("<th>").append(String.format("%.3f", row.getX())).append("</th>")
                    .append("<th>").append(String.format("%.3f", row.getY())).append("</th>")
                    .append("<th>").append(String.format("%.3f", row.getR())).append("</th>")
                    .append("<th>").append(row.getCurrentTime()).append("</th>")
                    .append("<th>").append(row.getExecutionTime()).append("</th>")
                    .append("<th>")
                    .append(((row.isResult()) ? "<span >+15 social credits" : "<span> -30 social credits"))
                    .append("</span>").append("</th>")
                    .append("</tr>");
        }
        return rows.toString();
    }

    public String getJson() {
        Set<String> jsonHitList = new HashSet<>();
        this.getList().forEach(row -> {
            String jsonRow = row.json();
            jsonHitList.add(jsonRow);
        });
        return new Gson().toJson(jsonHitList);
    }

    public void clear() {
        list.clear();
    }
}
