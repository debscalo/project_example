package demo.projectexample.repository;

import demo.projectexample.entity.PeopleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PeopleRepository extends JpaRepository<PeopleEntity, Long> {

    @Query(value = "SELECT COUNT(p.matricola) "+
            "FROM people p " +
            "WHERE p.matricola = :matricola", nativeQuery = true)
    int getMatricolaUnique(@Param("matricola") int matricola);

}
