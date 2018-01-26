package com.demo.service.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.service.dto.demoDTO;
import com.demo.service.dto.menuDTO;
import com.demo.service.repository.menuRepository;

@CrossOrigin
@RestController
@RequestMapping("/demoservice")
public class MenuController {
	
	@Autowired
    private menuRepository menurepository;
	
	@RequestMapping(value="/getMenus", method = {RequestMethod.GET})
	public List<menuDTO> getMenus(){
		List<menuDTO> menudto = new ArrayList<menuDTO>();
		menudto = menurepository.findAll();
		//menuDTO.setResponse("Test Successfully Done");
		
		return menudto;
	}
}
