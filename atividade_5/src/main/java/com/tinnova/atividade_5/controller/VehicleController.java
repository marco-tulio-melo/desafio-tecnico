package com.tinnova.atividade_5.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tinnova.atividade_5.domain.vehicle.Vehicle;
import com.tinnova.atividade_5.dto.AnalyticsResponse;
import com.tinnova.atividade_5.dto.GetVehicleParams;
import com.tinnova.atividade_5.dto.VehicleSoldDTO;
import com.tinnova.atividade_5.dto.VehicleDTO;
import com.tinnova.atividade_5.service.VehicleService;
import com.tinnova.atividade_5.utils.Constants;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("vehicles")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping
    @Operation(description = "Find vehicles")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Return vehicles") })
    public ResponseEntity<List<Vehicle>> getVehicles(@Valid GetVehicleParams params) {
        List<Vehicle> vehicles = this.vehicleService.getVehicles(params);
        return ResponseEntity.ok(vehicles);
    }

    @PostMapping
    @Operation(description = "Create vehicle")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Vehicle successfully created") })
    public ResponseEntity<Vehicle> createVehicle(@RequestBody @Valid VehicleDTO dto) {
        Vehicle vehicle = this.vehicleService.createVehicle(dto);
        return ResponseEntity.ok(vehicle);

    }

    @GetMapping("/{vehicleId}")
    @Operation(description = "Find vehicle by id")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Return vehicle by id") })
    public ResponseEntity<Optional<Vehicle>> getVehicleById(@PathVariable("vehicleId") @Valid String vehicleId) {
        Optional<Vehicle> vehicle = this.vehicleService.getVehicleById(vehicleId);
        return ResponseEntity.ok(vehicle);
    }

    @PutMapping("/{vehicleId}")
    @Operation(description = "Update vehicle")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Return vehicle updated") })
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable("vehicleId") @Valid String vehicleId,
            @RequestBody @Valid VehicleDTO dto) {
        Vehicle updatedVehicle = this.vehicleService.updateVehicle(vehicleId, dto);
        return ResponseEntity.ok(updatedVehicle);
    }

    @PatchMapping("/{vehicleId}")
    @Operation(description = "Update color vehicle")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Return vehicle updated") })
    public ResponseEntity<Vehicle> updateVehicleSold(@PathVariable("vehicleId") @Valid String vehicleId,
            @RequestBody @Valid VehicleSoldDTO dto) throws NotFoundException {
        Vehicle updatedVehicle = this.vehicleService.updateVehicleSold(vehicleId, dto);
        return ResponseEntity.ok(updatedVehicle);
    }

    @DeleteMapping("/{vehicleId}")
    @Operation(description = "Delete vehicle")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Return message success") })
    public ResponseEntity<String> deleteVehicleById(@PathVariable("vehicleId") @Valid String vehicleId) {
        this.vehicleService.deleteVehicleById(vehicleId);

        return ResponseEntity.ok(Constants.VEHICLE_DELETED_SUCCESSFULLY);
    }

    @GetMapping("/analytics")
    @Operation(description = "Find analytics")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Return analytics") })
    public ResponseEntity<AnalyticsResponse> getAnalytics() {
        AnalyticsResponse analytics = this.vehicleService.getAnalytics();
        return ResponseEntity.ok(analytics);
    }

}
