package com.azaali.services.mapper;

import com.azaali.services.data.Roles;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RolesMapper implements RowMapper<Roles> {
    @Override
    public Roles mapRow(ResultSet rs, int rowNum) throws SQLException {
        return Roles
                .builder()
                .idRoles(rs.getInt("idRoles"))
                .libelle(rs.getString("libelle"))
                .build();
    }
}
