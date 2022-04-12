package david.augusto.luan.atletaservice.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class AtletaDTO  implements Serializable {

    private String nome;
    private Integer idade;
    private Double altura;
    private Double peso;
    private Boolean adm;
    private CategoriaDTO categoria;
}
