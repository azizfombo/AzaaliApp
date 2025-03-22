package com.azaali.services.endPoint;


import com.azaali.services.dao.IDaoCaracteristicsHair;
import com.azaali.services.data.CaracteristicsHair;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/caracteristicsHair")
@CrossOrigin(origins = "http://192.168.0.102:8081")
@AllArgsConstructor
public class CaracteristicsHairEndPoint {
    private final IDaoCaracteristicsHair daoCaracteristicsHair;

    @GetMapping("/afficher")
    public Optional<CaracteristicsHair> afficherCaracteristicsHair(@RequestParam String email) {
        return daoCaracteristicsHair.afficherCaracteristicsHair(email);
    }
    @PostMapping("/inserer")
    public int insererCaracteristicsHair(@RequestBody CaracteristicsHair caracteristicsHair) {
        return daoCaracteristicsHair.insererCaracteristicsHair(caracteristicsHair);
    }
    @GetMapping("/delete")
    public int deleteCaracteristicsHair(@RequestParam String email) {
        return daoCaracteristicsHair.deleteCaracteristicsHair(email);
    }
    @PostMapping("/update")
    public int  updateCaracteristicsHair(@RequestBody CaracteristicsHair caracteristicsHair) {
        return daoCaracteristicsHair.updateCaracteristicsHair(caracteristicsHair);
    }
}
