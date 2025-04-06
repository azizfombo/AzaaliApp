package com.azaali.services.daoImpl;

import com.azaali.services.dao.IDaoRoles;
import com.azaali.services.data.Roles;
import com.azaali.services.mapper.RolesMapper;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class DaoRoles implements IDaoRoles {

    private final NamedParameterJdbcTemplate template;

    @Override
    public int insererRoles(Roles roles) {
        String sql = "insert into roles (libelle) values (:libelle)";
        MapSqlParameterSource params = new MapSqlParameterSource().addValue("libelle", roles.getLibelle());
        return template.update(sql, params);
    }

    @Override
    public List<Roles> afficherRoles() {
        String sql = "select * from roles";
        MapSqlParameterSource params = new MapSqlParameterSource();
        return template.query(sql, params, new RolesMapper());
    }

    @Override
    public int deleteRoles(String libelle) {
        String sql = "delete from roles where libelle = :libelle";
        MapSqlParameterSource params = new MapSqlParameterSource().addValue("libelle", libelle);
        return template.update(sql, params);
    }

    @Override
    public int updateRoles(Roles roles) {
        String sql = "update roles set libelle = :libelle where libelle = :libelle";
        MapSqlParameterSource params = new MapSqlParameterSource().addValue("libelle", roles.getLibelle());
        return template.update(sql, params);
    }
}
