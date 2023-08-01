package demo.projectexample.controller;

import demo.projectexample.entity.PeopleEntity;
import demo.projectexample.service.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public PeopleEntity savePerson(@RequestBody PeopleEntity peopleEntity){
        return peopleService.savePerson(peopleEntity);
    }

    @PutMapping("/update")
    public PeopleEntity updatePerson(@RequestBody PeopleEntity peopleEntity){
        return peopleService.updatePeople(peopleEntity);
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id){
        peopleService.deletePerson(id);
    }
}
