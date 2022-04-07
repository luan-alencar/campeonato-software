package david.augusto.luan.atletaservice.resource;

import david.augusto.luan.atletaservice.domain.Atleta;
import david.augusto.luan.atletaservice.service.AtletaService;
import david.augusto.luan.atletaservice.service.dto.AtletaDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/atletas")
public class AtletaResource {

    private static Logger logger = LoggerFactory.getLogger(AtletaResource.class);

    @Value("${test.config")
    private String testConfig;

    private final Environment environment;
    private final AtletaService service;

    @GetMapping(value = "/configs")
    public ResponseEntity<Void> getConfigs() {
        logger.info("CONFIG = " + testConfig);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<AtletaDTO>> listar() {
        return ResponseEntity.ok(this.service.listar());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<AtletaDTO> buscarPorID(@PathVariable Long id) {
        logger.info("PORT = " + environment.getProperty("local.server.port"));
        return ResponseEntity.ok(this.service.buscarPorID(id));
    }

    @PostMapping(value = "/salvar")
    public ResponseEntity<AtletaDTO> salvar(@RequestBody Atleta atleta) {
        return ResponseEntity.ok(this.service.salvar(atleta));
    }

    @PutMapping(value = "/editar")
    public ResponseEntity<AtletaDTO> editar(@RequestBody Atleta atleta) {
        return ResponseEntity.ok(this.service.salvar(atleta));
    }

    @DeleteMapping(value = "/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        this.service.remover(id);
        return ResponseEntity.ok().build();
    }
}
