package com.agoda.web.yongdae;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResidenceController {
	private static final Logger logger = LoggerFactory.getLogger(ResidenceController.class);
	
	@RequestMapping(value="/resi/search/filter", method = RequestMethod.POST, consumes="application/json")
	public Map<?, ?> resiFilter(@RequestBody Map<String, String> params){
		logger.info("resiFilter is {}", "entered");
		logger.info("resiFilter is {}", params);
		String id = params.get("id");
		String count = params.get("headCount");
		String checkIn = params.get("checkIn");
		String checkOut = params.get("checkOut");
		logger.info("resiFilter is {}", id);
		logger.info("resiFilter is {}", count);
		logger.info("resiFilter is {}", checkIn);
		logger.info("resiFilter is {}", checkOut);		
		return null;		
	}

}
