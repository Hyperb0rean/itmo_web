package com.example.labwork2.servlets.beans;

import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class HttpError implements Serializable {
    private int statusCode;
    private String errorMessage;
}
