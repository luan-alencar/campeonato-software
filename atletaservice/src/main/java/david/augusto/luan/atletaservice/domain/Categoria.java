package david.augusto.luan.atletaservice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "tb_categoria")
public class Categoria implements Serializable {
    private static final long serialVersionUID = -8353801332477530617L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String descricao;
    private Double pesoInicio;
    private Double pesoLimite;
    private Integer quantidadeVagas;
    private Integer quantidadeAtletas;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "categoria")
    private List<Atleta> atletas = new ArrayList<>();
}
