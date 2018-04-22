package com.bolsadeideas.spring.apirest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.util.Date;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.bolsadeideas.spring.apirest.models.entity.Producto;
import com.bolsadeideas.spring.apirest.models.services.IProductoService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringApirestMingesoApplicationTests {

	@Autowired
	IProductoService daoService;
	
	@Test
	public void contextLoads() {
		Producto producto = new Producto();
		producto.setNombre("productoPrueba");
		producto.setCategoria("categoriaPrueba");
		producto.setPrecio(1000);
		producto.setFechaVencimiento(new Date());
		if(daoService.save(producto) == null) fail("no se pudo agregar");
		
		
	}
	
	


}
