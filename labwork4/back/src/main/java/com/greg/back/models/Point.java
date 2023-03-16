package com.greg.back.models;

import javax.persistence.*;

@Entity
@Table(name = "Points")
public class Point {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "x")
    private double x;

    @Column(name = "y")
    private double y;

    @Column(name = "r")
    private double r;

    @Column(name = "hit")
    private boolean hit;

    @Column(name = "owner_Id")
    private Long ownerId;

    public Point() {
    }

    public Point(double x, double y, double r, boolean hit, Long ownerId) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.ownerId = ownerId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }




    @Override
    public String toString() {
        return "Point{" +
                "id=" + id +
                ", x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", hit=" + hit +
                '}';
    }
}