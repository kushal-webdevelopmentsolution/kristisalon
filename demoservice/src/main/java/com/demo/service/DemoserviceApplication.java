package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

@Configuration
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages = {"com.demo"})
public class DemoserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoserviceApplication.class, args);
	}
	
	@Autowired
    public void configureGlobalSecurity(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("kristi").password("kushal2209").roles("ADMIN");
    }
     
}
