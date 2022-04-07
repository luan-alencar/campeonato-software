package david.augusto.luan.cadastroservice.feignclients;

import david.augusto.luan.cadastroservice.domain.Atleta;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Component
@FeignClient(name = "atletaservice", path = "/api/atletas")
public interface AtletaFeignClient {

    @GetMapping
    ResponseEntity<List<Atleta>> buscarAtletas();
}
