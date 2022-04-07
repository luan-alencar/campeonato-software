package david.augusto.luan.cadastroservice.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Categoria implements Serializable {
    private static final long serialVersionUID = -5939490469439136318L;

    private Long id;
    private String nome;
    private String descricao;
    private Double pesoInicio;
    private Double pesoLimite;
    private Integer quantidadeVagas;
    private Integer quantidadeAtletas;
}
