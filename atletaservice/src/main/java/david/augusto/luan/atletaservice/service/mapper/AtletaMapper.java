package david.augusto.luan.atletaservice.service.mapper;

import david.augusto.luan.atletaservice.domain.Atleta;
import david.augusto.luan.atletaservice.service.dto.AtletaDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface AtletaMapper extends EntityModel<Atleta, AtletaDTO> {

    @Override
    Atleta toEntity(AtletaDTO dto);

    @Override
    AtletaDTO toDTO(Atleta entity);

    @Override
    List<Atleta> toEntityList(List<AtletaDTO> listDTO);

    @Override
    List<AtletaDTO> toListDTO(List<Atleta> listEntity);
}
