package com.bolsadeideas.spring.apirest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.web.SpringServletContainerInitializer;

@SpringBootApplication
public class SpringApirestMingesoApplication extends SpringServletContainerInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SpringApirestMingesoApplication.class, args);
	}
	 protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(SpringApirestMingesoApplication.class);
	    }
}
