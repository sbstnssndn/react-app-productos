package com.bolsadeideas.spring.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.spring.apirest.models.entity.Producto;

public interface IProductoDao extends CrudRepository<Producto, Long>{

}
