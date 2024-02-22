package com.tinnova.atividade_5.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tinnova.atividade_5.domain.vehicle.Vehicle;
import com.tinnova.atividade_5.dto.AnalyticsResponse;
import com.tinnova.atividade_5.dto.GetVehicleParams;
import com.tinnova.atividade_5.dto.VehicleSoldDTO;
import com.tinnova.atividade_5.dto.VehicleDTO;
import com.tinnova.atividade_5.repository.VehicleRepository;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public Optional<Vehicle> getVehicleById(String vehicleId) {
        return this.vehicleRepository.findById(vehicleId);
    }

    public List<Vehicle> getVehicles() {
        return this.vehicleRepository.findAll();
    }

    public List<Vehicle> getVehicles(GetVehicleParams params) {

        LocalDateTime startDateLastWeek = null;
        LocalDateTime endDateLastWeek = null;

        if (params.onlyLastWeek() != null && params.onlyLastWeek().booleanValue()) {
            startDateLastWeek = LocalDateTime.now().minusWeeks(1);
            endDateLastWeek = LocalDateTime.now();
        }

        return this.vehicleRepository.findByFilter(params.brand(), params.year(),
                params.color(), startDateLastWeek, endDateLastWeek);
    }

    @Transactional
    public Vehicle createVehicle(VehicleDTO dto) {
        Vehicle vehicle = Vehicle.builder()
                .vehicle(dto.vehicle())
                .brand(dto.brand())
                .year(dto.year())
                .description(dto.description())
                .sold(dto.sold())
                .color(dto.color())
                .build();

        return this.vehicleRepository.save(vehicle);
    }

    @Transactional
    public Vehicle updateVehicle(String vehicleId, VehicleDTO dto) {
        Vehicle vehicle = Vehicle.builder()
                .id(vehicleId)
                .vehicle(dto.vehicle())
                .brand(dto.brand())
                .year(dto.year())
                .description(dto.description())
                .sold(dto.sold())
                .color(dto.color())
                .build();

        return this.vehicleRepository.save(vehicle);
    }

    @Transactional
    public Vehicle updateVehicleSold(String vehicleId, VehicleSoldDTO dto) throws NotFoundException {

        Vehicle existingVehicle = this.vehicleRepository.findById(vehicleId).orElseThrow(() -> new NotFoundException());

        existingVehicle.setSold(dto.sold());

        return this.vehicleRepository.save(existingVehicle);
    }

    @Transactional
    public void deleteVehicleById(String vehicleId) {
        this.vehicleRepository.deleteById(vehicleId);
    }

    public List<Map<String, Object>> getTotalVehicleGroupedDecade() {
        return this.vehicleRepository.findTotalVehicleGroupedDecade();
    }

    public List<Map<String, Object>> getTotalVehicleGroupedBrand() {
        return this.vehicleRepository.findTotalVehicleGroupedBrand();
    }

    public long getTotalVehicleNotSold() {
        return this.vehicleRepository.countBySoldFalse();
    }

    public AnalyticsResponse getAnalytics() {
        var groupedDecade = getTotalVehicleGroupedDecade();
        var groupedBrand = getTotalVehicleGroupedBrand();
        var notSold = getTotalVehicleNotSold();

        return new AnalyticsResponse(groupedDecade,
                groupedBrand,
                notSold);
    }

}
