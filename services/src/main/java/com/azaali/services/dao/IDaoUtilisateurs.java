package com.azaali.services.dao;

import com.azaali.services.data.Utilisateurs;

import java.util.Optional;

public interface IDaoUtilisateurs {
    int insererUtilisateur(Utilisateurs utilisateurs);

    Optional<Utilisateurs> connecterUtilisateur(String email, String password);

    int deleteUtilisateur(String email);

    int updateUtilisateur(Utilisateurs utilisateurs);
}
