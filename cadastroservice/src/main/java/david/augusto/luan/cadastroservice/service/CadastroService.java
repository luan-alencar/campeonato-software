package david.augusto.luan.cadastroservice.service;

import david.augusto.luan.cadastroservice.domain.Atleta;
import david.augusto.luan.cadastroservice.feignclients.AtletaFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CadastroService {

    private final AtletaFeignClient feignClient;

    public List<Atleta> buscarAtletas() {
        return this.feignClient.buscarAtletas().getBody();
    }
}
