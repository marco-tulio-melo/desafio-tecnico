package com.tinnova.atividade_5.domain.vehicle;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "vehicle")
@Entity(name = "vehicle")
@EqualsAndHashCode(of = "id")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Vehicle implements Serializable {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @NotBlank
    @Column
    private String vehicle;

    @NotBlank
    @Column
    private String brand;

    @Column
    private Integer year;

    @Column(length = 1000)
    private String description;

    @Column
    private String color;

    @Column
    private Boolean sold;

    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @Column
    private LocalDateTime created;

    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    @Column
    private LocalDateTime updated;

    public Vehicle(String vehicle, String brand, Integer year, String description, String color, Boolean sold) {
        this.vehicle = vehicle;
        this.brand = brand;
        this.description = description;
        this.color = color;
        this.sold = sold;
    }

}
