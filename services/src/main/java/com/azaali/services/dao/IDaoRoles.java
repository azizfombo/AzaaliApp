package com.azaali.services.dao;

import com.azaali.services.data.Roles;

import java.util.List;

public interface IDaoRoles {
    int insererRoles(Roles Roles);

    List<Roles> afficherRoles();

    public int deleteRoles(String libelle);

    int updateRoles(Roles Roles);
}
