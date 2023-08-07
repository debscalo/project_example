package demo.projectexample.controller;

import demo.projectexample.entity.PeopleEntity;
import demo.projectexample.service.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "**")
public class PeopleController {

    @Autowired
    private PeopleService peopleService;

    @GetMapping("/people")
    public List<PeopleEntity> getPeople(){
        return peopleService.getPeople();
    }

    @GetMapping("/{id}")
    public Optional<PeopleEntity> getPersonById(@PathVariable Long id){
        return peopleService.getPersonById(id);
    }

    @PostMapping("/save")
    public ResponseEntity<String> savePerson(
            @RequestParam("img") MultipartFile img,
            @RequestParam("nome") String nome,
            @RequestParam("cognome") String cognome,
            @RequestParam("matricola") int matricola,
            @RequestParam("citta") String citta

    ) {
        try {
            byte[] image = img.getBytes();
            PeopleEntity person = new PeopleEntity(null, image, nome, cognome, matricola, citta);
            peopleService.savePerson(person);
            return ResponseEntity.ok("Persona salvata con successo.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Errore durante la richiesta.");
        }
    }

    @PutMapping("/update")
    public PeopleEntity updatePerson(@RequestBody PeopleEntity peopleEntity){
        return peopleService.updatePeople(peopleEntity);
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id){
        peopleService.deletePerson(id);
    }

    @GetMapping("/mat/{matricola}")
    public int getMatricolaUnique(@PathVariable int matricola){
        return peopleService.getMatricolaUnique(matricola);
    }
}
