package com.tinnova.atividade_5.repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tinnova.atividade_5.domain.vehicle.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, String> {

    @Query("SELECT v FROM vehicle v WHERE " +
            "(:brand IS NULL OR v.brand = :brand) AND " +
            "(:year IS NULL OR v.year = :year) AND " +
            "(:color IS NULL OR v.color = :color) AND " +
            "(cast(cast(:startDateLastWeek as text) as date) IS NULL OR v.created >= cast(cast(:startDateLastWeek as text) as date)) AND "
            +
            "(cast(cast(:endDateLastWeek as text) as date) IS NULL OR v.created <= cast(cast(:endDateLastWeek as text) as date))")
    List<Vehicle> findByFilter(@Param("brand") String brand,
            @Param("year") Integer year,
            @Param("color") String color,
            @Param("startDateLastWeek") LocalDateTime startDateLastWeek,
            @Param("endDateLastWeek") LocalDateTime endDateLastWeek);

    @Query("SELECT cast(FLOOR(year / 10) * 10 as text) AS name, COUNT(v.id) AS value FROM vehicle v GROUP BY FLOOR(year / 10) ORDER BY FLOOR(year / 10)")
    List<Map<String, Object>> findTotalVehicleGroupedDecade();

    @Query("SELECT v.brand AS name, COUNT(v.id) AS value FROM vehicle v GROUP BY v.brand ORDER BY COUNT(v.id) DESC")
    List<Map<String, Object>> findTotalVehicleGroupedBrand();

    long countBySoldFalse();

    Optional<Vehicle> findById(String id);

    List<Vehicle> findAll();

    void deleteById(String id);

}
