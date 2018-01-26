package com.demo.service.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.service.dto.demoDTO;

@CrossOrigin
@RestController
@RequestMapping("/demoservice")
public class IndexController {
	
	
	@RequestMapping(value="/testvalue", method = RequestMethod.GET)
	public demoDTO testvalue(){
		demoDTO demodto = new demoDTO();
		demodto.setResponse("Test Successfully Done");
		return demodto;
	}
}
