package david.augusto.luan.cadastroservice.resource;

import david.augusto.luan.cadastroservice.domain.Atleta;
import david.augusto.luan.cadastroservice.service.CadastroService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/cadastros")
public class CadastroResource {

    private final CadastroService service;
    private static Logger logger = LoggerFactory.getLogger(CadastroResource.class);
    private static final String MENSAGEM_REQUISICAO = "Requisicao REST para listar Atletas da API atletaservice: {}";

    @GetMapping("/listar")
    public ResponseEntity<List<Atleta>> buscarAtletas() {
        logger.debug(MENSAGEM_REQUISICAO);
        return ResponseEntity.ok(this.service.buscarAtletas());
    }
}
