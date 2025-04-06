package com.azaali.services.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
@AllArgsConstructor
public class Utilisateurs {
    private String nom;
    private String prenom;
    private Date dateNaissance;
    private String email;
    private String motDePasse;
}
