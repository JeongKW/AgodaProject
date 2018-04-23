package com.agoda.web.minwoo;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlightController {
	private static final Logger logger = LoggerFactory.getLogger(FlightController.class);
	
	@RequestMapping(value="/flight/{id}/search", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> bookflight(@PathVariable("id") String id, @RequestBody HashMap<String,String> param) {
		Map<String, String> map = new HashMap<>();
		logger.info("컨트롤러 진입{}", "welcome");
		logger.info("파람값{}", param);
		
		return null;
	}
}
