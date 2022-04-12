package david.augusto.luan.atletaservice.resource;

import david.augusto.luan.atletaservice.domain.Categoria;
import david.augusto.luan.atletaservice.service.CategoriaService;
import david.augusto.luan.atletaservice.service.CategoriaService;
import david.augusto.luan.atletaservice.service.dto.CategoriaDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.noContent;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/categorias")
public class CategoriaResource {

    private static Logger logger = LoggerFactory.getLogger(CategoriaResource.class);

    @Value("${test.config")
    private String testConfig;

    private final Environment environment;
    private final CategoriaService service;

    @GetMapping(value = "/configs")
    public ResponseEntity<Void> getConfigs() {
        logger.info("CONFIG = " + testConfig);
        return noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> listar() {
        return ResponseEntity.ok(this.service.listar());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoriaDTO> buscarPorID(@PathVariable Long id) {
        logger.info("PORT = " + environment.getProperty("local.server.port"));
        return ResponseEntity.ok(this.service.buscarPorID(id));
    }

    @PostMapping(value = "/salvar")
    public ResponseEntity<CategoriaDTO> salvar(@RequestBody Categoria Categoria) {
        return ResponseEntity.ok(this.service.salvar(Categoria));
    }

    @PutMapping(value = "/editar")
    public ResponseEntity<CategoriaDTO> editar(@RequestBody Categoria Categoria) {
        return ResponseEntity.ok(this.service.salvar(Categoria));
    }

    @DeleteMapping(value = "/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        this.service.remover(id);
        return ResponseEntity.ok().build();
    }
}
