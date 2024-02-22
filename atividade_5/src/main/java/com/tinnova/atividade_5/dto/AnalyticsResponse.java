package com.tinnova.atividade_5.dto;

import java.util.List;
import java.util.Map;

public record AnalyticsResponse(
        List<Map<String, Object>> groupedDecade,
        List<Map<String, Object>> groupedBrand,
        long notSold) {

}
