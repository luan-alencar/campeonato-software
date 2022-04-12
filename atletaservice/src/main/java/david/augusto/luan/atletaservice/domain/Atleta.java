package david.augusto.luan.atletaservice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "tb_atleta")
public class Atleta implements Serializable {
    private final long serialVersionUID = 159601858995586538L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;
    private String cpf;
    private String rg;
    private Integer idade;
    private LocalDate dataAniversario;
    private Double altura;
    private Double peso;
    private Boolean adm;

    @ManyToOne
    private Categoria categoria;
}
