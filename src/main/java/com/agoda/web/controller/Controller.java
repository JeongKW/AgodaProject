package com.agoda.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.agoda.web.domain.Command;
import com.agoda.web.domain.Member;
import com.agoda.web.mapper.Mapper;
import com.agoda.web.service.ICountService;
import com.agoda.web.service.IGetService;

@RestController
public class Controller {
	private static final Logger logger = LoggerFactory.getLogger(Controller.class);
	@Autowired Command cmd;
	@Autowired Mapper mapper;
	@RequestMapping(value = "/member/{id}/login", 
			method = RequestMethod.POST, consumes="application/json")
	public Map<?,?> getUserId(
			@PathVariable String id,
			@RequestBody Member m){
		logger.info("getUserId is {}", "entered");
		Map<String, Object> map = new HashMap<>();
		logger.info("ID : {}", id);
		logger.info("PW : {}", m.getPw());
		cmd.setTable("Member");
		cmd.setData1(id);
		cmd.setData2(m.getPw());
		map.put("user", (Member) new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.select(cmd);
			}
		}.excute(cmd));
		//test
		map.put("success", new ICountService() {
			@Override
			public int excute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.excute(cmd));
		return map;
	}
}
