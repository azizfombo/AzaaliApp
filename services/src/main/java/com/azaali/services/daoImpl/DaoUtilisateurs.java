package com.azaali.services.daoImpl;

import com.azaali.services.dao.IDaoUtilisateurs;
import com.azaali.services.data.Utilisateurs;
import com.azaali.services.mapper.UtilisateursMapper;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@AllArgsConstructor
@Repository
public class DaoUtilisateurs implements IDaoUtilisateurs {
    private final NamedParameterJdbcTemplate template;

    @Override
    public int insererUtilisateur(Utilisateurs utilisateurs) {
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("nom", utilisateurs.getNom())
                .addValue("prenom", utilisateurs.getPrenom())
                .addValue("dateNaiss", utilisateurs.getDateNaissance())
                .addValue("email", utilisateurs.getEmail())
                .addValue("password", utilisateurs.getMotDePasse());

        String sql = "INSERT INTO utilisateurs (nom, prenom, datenaiss, email, motDePasse, idRoles) " +
                "VALUES (:nom, :prenom, :dateNaiss, :email, :password,2)";
        return template.update(sql, params);
    }

    @Override
    public Optional<Utilisateurs> connecterUtilisateur(String email, String password) {
        String sql = "SELECT * FROM utilisateurs WHERE email = :email and motDePasse = :password";
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("email", email)
                .addValue("password", password);
        return template.query(sql, params, new UtilisateursMapper()).stream().findFirst();
    }

    @Override
    public int deleteUtilisateur(String email) {
        MapSqlParameterSource params = new MapSqlParameterSource().addValue("email", email);
        String sql = "DELETE FROM utilisateurs WHERE email = :email";
        return template.update(sql, params);
    }

    @Override
    public int updateUtilisateur(Utilisateurs utilisateurs) {
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("nom", utilisateurs.getNom())
                .addValue("prenom", utilisateurs.getPrenom())
                .addValue("dateNaiss", utilisateurs.getDateNaissance())
                .addValue("email", utilisateurs.getEmail())
                .addValue("password", utilisateurs.getMotDePasse());
        String sql = "UPDATE utilisateurs SET nom=:nom, prenom=:prenom, datenaiss=:dateNaiss, email=:email, motdepasse=:password WHERE email = :email";
        return template.update(sql, params);
    }
}
