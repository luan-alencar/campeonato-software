package david.augusto.luan.atletaservice.service;

import david.augusto.luan.atletaservice.domain.Atleta;
import david.augusto.luan.atletaservice.repository.AtletaRepository;
import david.augusto.luan.atletaservice.service.dto.AtletaDTO;
import david.augusto.luan.atletaservice.service.mapper.AtletaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AtletaService {

    private final AtletaRepository repository;
    private final AtletaMapper mapper;

    public List<AtletaDTO> listar() {
        return this.mapper.toListDTO(this.repository.findAll());
    }

    public AtletaDTO buscarPorID(Long id) {

        try {
            Thread.sleep(3000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return this.mapper.toDTO(this.repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Atleta nao encontrado")));
    }

    public AtletaDTO salvar(Atleta atleta) {
        atleta.setAdm(false);
        return this.mapper.toDTO(this.repository.save(atleta));
    }

    public void remover(Long id) {
        this.repository.deleteById(id);
    }
}