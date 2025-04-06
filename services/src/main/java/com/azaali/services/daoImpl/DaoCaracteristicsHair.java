package com.azaali.services.daoImpl;

import com.azaali.services.dao.IDaoCaracteristicsHair;
import com.azaali.services.data.CaracteristicsHair;
import com.azaali.services.mapper.CaracteristicsHairMapper;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@AllArgsConstructor
@Repository
public class DaoCaracteristicsHair implements IDaoCaracteristicsHair {

    private final NamedParameterJdbcTemplate template;

    @Override
    public int insererCaracteristicsHair(CaracteristicsHair caracteristicsHair) {
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("humidite", caracteristicsHair.getHumidite())
                .addValue("uv", caracteristicsHair.getUv())
                .addValue("iqa", caracteristicsHair.getIqa())
                .addValue("email", caracteristicsHair.getEmail());

        String sql = "INSERT INTO caracteristichair VALUES (:email,:humidite,:uv,:iqa);";
        return template.update(sql, params);
    }

    @Override
    public Optional<CaracteristicsHair> afficherCaracteristicsHair(String email) {
        String sql = "SELECT * FROM caracteristichair WHERE email = :email";
        MapSqlParameterSource params = new MapSqlParameterSource().addValue("email", email);
        return template.query(sql, params, new CaracteristicsHairMapper()).stream().findFirst();
    }

    @Override
    public int deleteCaracteristicsHair(String email) {
        String sql = "DELETE FROM caracteristichair WHERE email = :email";
        MapSqlParameterSource params = new MapSqlParameterSource().addValue("email", email);
        return template.update(sql, params);
    }

    @Override
    public int updateCaracteristicsHair(CaracteristicsHair CaracteristicsHairs) {
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("humidite", CaracteristicsHairs.getHumidite())
                .addValue("uv", CaracteristicsHairs.getUv())
                .addValue("iqa", CaracteristicsHairs.getIqa())
                .addValue("email", CaracteristicsHairs.getEmail());
        String sql = "UPDATE CaracteristicsHairs SET email=:email, uv=:uv, iqa=:iqa, humidite=:humidite WHERE email = :email";
        return template.update(sql, params);
    }
}
