package demo.projectexample.service;

import demo.projectexample.entity.PeopleEntity;
import demo.projectexample.repository.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PeopleService {

    @Autowired
    private PeopleRepository peopleRepository;

    public List<PeopleEntity> getPeople(){
        return peopleRepository.findAll();
    }

    public Optional<PeopleEntity> getPersonById(Long id){
        return peopleRepository.findById(id);
    }

    public PeopleEntity savePerson(PeopleEntity peopleEntity){
        return peopleRepository.save(peopleEntity);
    }

    public PeopleEntity updatePeople(PeopleEntity peopleEntityNew){
        Optional<PeopleEntity> peopleEntity = getPersonById(peopleEntityNew.getId());
        if(peopleEntity.isEmpty()) throw new RuntimeException();
        return peopleRepository.save(peopleEntityNew);
    }

    public void deletePerson(Long id){
        peopleRepository.deleteById(id);
    }
}
