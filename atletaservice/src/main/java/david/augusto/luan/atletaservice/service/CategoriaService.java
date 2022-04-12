package david.augusto.luan.atletaservice.service;

import david.augusto.luan.atletaservice.domain.Categoria;
import david.augusto.luan.atletaservice.repository.CategoriaRepository;
import david.augusto.luan.atletaservice.service.dto.CategoriaDTO;
import david.augusto.luan.atletaservice.service.mapper.CategoriaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoriaService {

    private final CategoriaRepository repository;
    private final CategoriaMapper mapper;

    public List<CategoriaDTO> listar() {
        return this.mapper.toListDTO(this.repository.findAll());
    }

    public CategoriaDTO buscarPorID(Long id) {

        try {
            Thread.sleep(3000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return this.mapper.toDTO(this.repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categoria nao encontrado")));
    }

    public CategoriaDTO salvar(Categoria Categoria) {
        return this.mapper.toDTO(this.repository.save(Categoria));
    }

    public void remover(Long id) {
        this.repository.deleteById(id);
    }
}