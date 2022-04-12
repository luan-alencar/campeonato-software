package david.augusto.luan.atletaservice.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CategoriaDTO implements Serializable {

    private String nome;
    private String descricao;
    private Double pesoInicio;
    private Double pesoLimite;
    private Integer quantidadeVagas;
    private Integer quantidadeAtletas;
    private List<AtletaDTO> atletas = new ArrayList<>();
}
