package com.tinnova.atividade_5.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tinnova.atividade_5.domain.vehicle.Vehicle;
import com.tinnova.atividade_5.repository.VehicleRepository;

import jakarta.annotation.PostConstruct;

@Service
public class VehicleSeeder {

    @Autowired
    private VehicleRepository vehicleRepository;

    private static final String[] BRANDS = { "Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen", "BMW",
            "Mercedes-Benz", "Audi", "Nissan", "Hyundai", "Kia", "Subaru", "Tesla", "Mazda", "Lexus", "Jeep", "Volvo",
            "Porsche", "Fiat", "Jaguar" };

    private static final String[] NAMES_VEHICLES = { "Corolla", "Civic", "Focus", "Cruze", "Golf", "Série 3",
            "Classe C", "A4", "Sentra", "HB20", "Sportage", "Forester", "Model S", "MX-5", "IS", "Renegade", "XC90",
            "911", "Palio", "XE" };

    private static final String[] COLORS = { "Branco", "Preto", "Vermelho", "Verde", "Azul", "Amarelo", "Rosa",
            "Laranja", "Roxo", "Cinza" };

    @Transactional
    @PostConstruct
    public void seed() {

        List<Vehicle> existsVehicles = this.vehicleRepository.findAll();

        if (existsVehicles.size() == 0) {
            List<Vehicle> vehicles = new ArrayList<>();

            LocalDateTime startDateTime = LocalDateTime.now().minusWeeks(1);
            LocalDateTime endDateTime = LocalDateTime.now();

            Random random = new Random();

            for (int i = 0; i < 20; i++) {
                LocalDateTime randomDateTime = getRandomDateTime(startDateTime, endDateTime);

                int randomYear = random.nextInt(2025 - 1990) + 1990;

                boolean randomSold = random.nextBoolean();

                String brand = BRANDS[random.nextInt(BRANDS.length)];
                String nameVehicle = NAMES_VEHICLES[random.nextInt(NAMES_VEHICLES.length)];
                String color = COLORS[random.nextInt(COLORS.length)];

                Vehicle vehicle = Vehicle.builder()
                        .vehicle(nameVehicle)
                        .brand(brand)
                        .color(color)
                        .year(randomYear)
                        .sold(randomSold)
                        .created(randomDateTime)
                        .updated(randomDateTime)
                        .build();

                vehicles.add(vehicle);
            }

            vehicleRepository.saveAll(vehicles);
        }

    }

    private static LocalDateTime getRandomDateTime(LocalDateTime start, LocalDateTime end) {
        long startEpochSecond = start.toEpochSecond(java.time.ZoneOffset.UTC);
        long endEpochSecond = end.toEpochSecond(java.time.ZoneOffset.UTC);

        long randomEpochSecond = startEpochSecond + (long) (Math.random() * (endEpochSecond - startEpochSecond));
        return LocalDateTime.ofEpochSecond(randomEpochSecond, 0, java.time.ZoneOffset.UTC);
    }
}
