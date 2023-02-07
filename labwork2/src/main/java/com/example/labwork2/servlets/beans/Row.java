package com.example.labwork2.servlets.beans;

import com.google.gson.Gson;
import lombok.*;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Row implements Serializable {
    private double x;
    private double y;
    private double r;
    private String currentTime;
    private double executionTime;
    private boolean result;

    private Map<String, String> getMap() {
        Map<String, String> fields = new HashMap<>();
        fields.put("x", String.valueOf(x));
        fields.put("y", String.valueOf(y));
        fields.put("r", String.valueOf(r));
        fields.put("currentTime", String.valueOf(currentTime));
        fields.put("executionTime", String.valueOf(executionTime));
        fields.put("result", String.valueOf(result));
        return fields;
    }
    public String json() {
        return new Gson().toJson(this.getMap());
    }
}
