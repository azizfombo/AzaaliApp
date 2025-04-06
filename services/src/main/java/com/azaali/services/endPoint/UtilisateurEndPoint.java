package com.azaali.services;

import com.azaali.services.dao.IDaoUtilisateurs;
import com.azaali.services.data.LoginUtilisateur;
import com.azaali.services.data.Utilisateurs;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/utilisateur")
@AllArgsConstructor
public class UtilisateurEndPoint {
    private final IDaoUtilisateurs daoUtilisateurs;

    @PostMapping("/connecterUtilisateur")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public Optional<Utilisateurs> connecterUtilisateur(@RequestBody LoginUtilisateur loginUtilisateur) {
        System.out.println(loginUtilisateur.getEmail());
        return daoUtilisateurs.connecterUtilisateur(loginUtilisateur.getEmail(), loginUtilisateur.getPassword());
    }

    @GetMapping("/connecterUtilisateurget")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public Optional<Utilisateurs> connecterUtilisateurget(@RequestParam String email, String password) {
        System.out.println(email);
        return daoUtilisateurs.connecterUtilisateur(email, password);
    }

    @PostMapping("/insere")
    public int insererUtilisateur(@RequestBody Utilisateurs utilisateur) {
        return daoUtilisateurs.insererUtilisateur(utilisateur);
    }

    @GetMapping("/delete")
    public int deleteUtilisateurs(@RequestParam String email) {
        return daoUtilisateurs.deleteUtilisateur(email);
    }

    @PostMapping("/update")
    public int updateUtilisateur(@RequestBody Utilisateurs utilisateur) {
        return daoUtilisateurs.updateUtilisateur(utilisateur);
    }
}
