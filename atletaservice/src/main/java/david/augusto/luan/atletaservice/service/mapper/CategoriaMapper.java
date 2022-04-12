package david.augusto.luan.atletaservice.service.mapper;

import david.augusto.luan.atletaservice.domain.Categoria;
import david.augusto.luan.atletaservice.service.dto.CategoriaDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface CategoriaMapper extends EntityModel<Categoria, CategoriaDTO> {

    @Override
    Categoria toEntity(CategoriaDTO dto);

    @Override
    CategoriaDTO toDTO(Categoria entity);

    @Override
    List<Categoria> toEntityList(List<CategoriaDTO> listDTO);

    @Override
    List<CategoriaDTO> toListDTO(List<Categoria> listEntity);
}
