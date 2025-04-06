package com.azaali.services.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Roles {
    private int idRoles;
    private String libelle;
}
