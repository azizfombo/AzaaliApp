package com.azaali.services.dao;

import com.azaali.services.data.CaracteristicsHair;

import java.util.Optional;

public interface IDaoCaracteristicsHair {
    int insererCaracteristicsHair(CaracteristicsHair CaracteristicsHairs);

    Optional<CaracteristicsHair> afficherCaracteristicsHair(String email);

    int deleteCaracteristicsHair(String email);

    int updateCaracteristicsHair(CaracteristicsHair CaracteristicsHairs);
}
