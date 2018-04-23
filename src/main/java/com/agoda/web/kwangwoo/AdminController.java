package com.agoda.web.kwangwoo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.agoda.web.common.Command;
import com.agoda.web.common.IGetService;
import com.agoda.web.common.IPostService;
import com.agoda.web.mapper.Mapper;
import com.agoda.web.youjin.Member;

@RestController
@RequestMapping("/adminjk")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired
	Mapper mapper;
	@Autowired
	Command cmd;

	@RequestMapping("/residence/{pageNum}")
	public Map<?, ?> manageResidence(@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageResidence() is {}", "entered");
		logger.info("pageNum is {}", pageNum);
		return map;
	}

	@RequestMapping("/flight/{pageNum}")
	public Map<?, ?> manageFlight(@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageFlight() is {}", "entered");
		return map;
	}

	@RequestMapping("/member/{pageNum}")
	public Map<?, ?> manageMember(@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageMember() is {}", "entered");
		cmd.setTable("member");
		map.put("users", (List<?>) new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.selectAll(cmd);
			}
		}.excute(cmd));
		return map;
	}

	@RequestMapping(value = "/member/add", method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> addMember(@RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("addMember() is {}", "entered");
		cmd.setTable("Member");
		cmd.setData1(m.getId());
		cmd.setMember(m);
		new IPostService() {
			@Override
			public void excute(Command cmd) {
				mapper.insert(cmd);
			}
		}.excute(cmd);
		map.put("success", new IGetService() {

			@Override
			public Object excute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.excute(cmd));
		return map;
	}

	@RequestMapping(value = "/member/update/{id}", method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> updateMember(
			@PathVariable String id,
			@RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("updateMember() is {}", "entered");
		logger.info("updateMember() attributes are {}, {}, {}, {}, {}", m.getId(), m.getPw(), m.getName(), m.getEmail(),
				m.getPhone());
		cmd.setTable("Member");
		cmd.setData1(id);
		cmd.setMember(m);
		new IPostService() {
			@Override
			public void excute(Command cmd) {
				mapper.insert(cmd);
			}
		}.excute(cmd);
		map.put("success", new IGetService() {

			@Override
			public Object excute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.excute(cmd));
		return map;
	}

	@RequestMapping("/statistics/{pageNum}")
	public Map<?, ?> manageStatistics(@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageStatistics() is {}", "entered");
		return map;
	}

	@RequestMapping("/board/{pageNum}")
	public Map<?, ?> manageBoard(@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageBoard() is {}", "entered");
		map.put("success", "1");
		return map;
	}
}
