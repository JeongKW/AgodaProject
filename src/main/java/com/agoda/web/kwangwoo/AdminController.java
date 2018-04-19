package com.agoda.web.kwangwoo;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@RequestMapping("/adminjk")
	public Map<?,?> manageList(){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
	
	@RequestMapping("/adminjk/residence")
	public Map<?,?> manageResidence(){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
	
	@RequestMapping("/adminjk/flight")
	public Map<?,?> manageFlight(){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
	@RequestMapping("/adminjk/member")
	public Map<?,?> manageMember(){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
	@RequestMapping("/adminjk/statistics")
	public Map<?,?> manageStatistics(){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
	@RequestMapping("/adminjk/board")
	public Map<?,?> manageBoard(){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
}
