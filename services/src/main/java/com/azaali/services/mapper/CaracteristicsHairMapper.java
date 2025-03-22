package com.azaali.services.mapper;

import com.azaali.services.data.CaracteristicsHair;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CaracteristicsHairMapper implements RowMapper<CaracteristicsHair> {
    @Override
    public CaracteristicsHair mapRow(ResultSet rs, int rowNum) throws SQLException {
        return CaracteristicsHair
                .builder()
                .iqa(rs.getInt("iqa"))
                .uv(rs.getInt("uv"))
                .email(rs.getString("email"))
                .humidite(rs.getInt("humidite"))
                .build();
    }
}
