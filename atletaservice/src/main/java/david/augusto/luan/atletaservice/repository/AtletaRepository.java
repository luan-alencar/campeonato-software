package david.augusto.luan.atletaservice.repository;

import david.augusto.luan.atletaservice.domain.Atleta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtletaRepository extends JpaRepository<Atleta, Long> {
}
