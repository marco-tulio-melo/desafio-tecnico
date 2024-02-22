package com.tinnova.atividade_5.dto;

public record GetVehicleParams(
        String brand,
        Integer year,
        String color,
        Boolean onlyLastWeek) {
}
