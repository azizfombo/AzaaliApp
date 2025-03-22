package com.azaali.services.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CaracteristicsHair {
    private String email;
    private int humidite;
    private int uv;
    private int iqa;
}
