package david.augusto.luan.atletaservice.service.mapper;

import java.util.List;

public interface EntityModel <E, D> {

    E toEntity(D dto);

    D toDTO(E entity);

    List<E> toEntityList(List<D> listDTO);

    List<D> toListDTO(List<E> listEntity);
}
