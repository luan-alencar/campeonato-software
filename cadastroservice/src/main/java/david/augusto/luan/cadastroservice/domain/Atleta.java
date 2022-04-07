package david.augusto.luan.cadastroservice.domain;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class Atleta implements Serializable {

    private Long id;
    private String nome;
    private String cpf;
    private String rg;
    private Integer idade;
    private Double altura;
    private Double peso;
    private Boolean adm;
}
