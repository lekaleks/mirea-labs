package com.example.demo.model;

public class Student {
    private int id;
    private String surname;
    private String name;
    private String second_name;
    private int study_group_id;

    public Student(int id, String surname, String name, String second_name, int study_group_id){
        this.name = name;
        this.id = id;
        this.surname = surname;
        this.second_name = second_name;
        this.study_group_id = study_group_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStudy_group_id(int study_group_id) {
        this.study_group_id = study_group_id;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getId() {
        return id;
    }

    public int getStudy_group_id() {
        return study_group_id;
    }

    public String getName() {
        return name;
    }

    public String getSecond_name() {
        return second_name;
    }

    public String getSurname() {
        return surname;
    }
}
