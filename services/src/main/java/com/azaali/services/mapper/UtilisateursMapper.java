package com.azaali.services.mapper;

import com.azaali.services.data.Utilisateurs;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UtilisateursMapper implements RowMapper<Utilisateurs> {

    @Override
    public Utilisateurs mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Utilisateurs(
                rs.getString("nom"),
                rs.getString("prenom"),
                rs.getDate("datenaiss"),
                rs.getString("email"),
                rs.getString("motDePasse")
        );
    }
}
