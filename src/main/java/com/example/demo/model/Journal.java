package com.example.demo.model;

public class Journal {
    private int id;
    private int student_id;
    private int study_plan_id;
    private int in_time;
    private int count;
    private int mark_id;

    public Journal (int id, int student_id, int study_plan_id, int in_time, int count, int mark_id){
        this.id = id;
        this.student_id = student_id;
        this.study_plan_id = study_plan_id;
        this.in_time = in_time;
        this.count = count;
        this.mark_id = mark_id;
    }

    public int getCount() {
        return count;
    }

    public int getId() {
        return id;
    }

    public int getIn_time() {
        return in_time;
    }

    public int getMark_id() {
        return mark_id;
    }

    public int getStudent_id() {
        return student_id;
    }

    public int getStudy_plan_id() {
        return study_plan_id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setMark_id(int mark_id) {
        this.mark_id = mark_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public void setIn_time(int in_time) {
        this.in_time = in_time;
    }

    public void setStudy_plan_id(int study_plan_id) {
        this.study_plan_id = study_plan_id;
    }
}
