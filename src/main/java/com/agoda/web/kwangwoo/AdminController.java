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
import com.agoda.web.common.IDeleteService;
import com.agoda.web.common.IGetService;
import com.agoda.web.common.IPostService;
import com.agoda.web.common.IUpdateService;
import com.agoda.web.mapper.MapperJK;
import com.agoda.web.youjin.Member;

@RestController
@RequestMapping("/adminjk")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired MapperJK mapper;
	@Autowired Command cmd;

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

	@RequestMapping(value = "/member/{pageNum}", method = RequestMethod.POST)
	public Map<?, ?> manageMember(
			@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageMember() is {}", "entered");
		logger.info("manageMember() pageNum {}", pageNum);
		cmd.setTable("member");
		cmd.setData1(pageNum);
		map.put("users", (List<?>) new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.selectAllAdminMember(cmd);
			}
		}.excute(cmd));
		
		map.put("pageNum", Integer.parseInt(pageNum)+12);
		return map;
	}

	@RequestMapping(value = "/member/add", 
			method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> addMember(
			@RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("addMember() is {}", "entered");
		cmd.setTable("Member");
		cmd.setData1(m.getId());
		cmd.setMember(m);
		new IPostService() {
			@Override
			public void excute(Command cmd) {
				mapper.insertAdminMember(cmd);
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

	@RequestMapping(value = "/member/update", 
			method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> updateMember(
			@RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("updateMember() is {}", "entered");
		cmd.setTable("Member");
		cmd.setMember(m);
		new IUpdateService() {
			@Override
			public void excute(Command cmd) {
				mapper.updateAdminMember(cmd);
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
	@RequestMapping(value = "/member/delete/{id}", 
			method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> deleteMember(
			@PathVariable String id) {
		Map<String, Object> map = new HashMap<>();
		logger.info("deleteMember() is {}", "entered");
		cmd.setTable("Member");
		cmd.setData1(id);
		new IDeleteService() {
			@Override
			public void excute(Command cmd) {
				mapper.deleteAdminMember(cmd);
			}
		}.excute(cmd);
		map.put("success", new IGetService() {

			@Override
			public Object excute(Command cmd) {
				return (mapper.exist(cmd) == 0) ? "1" : "0";
			}
		}.excute(cmd));
		return map;
	}
	
	@RequestMapping(value = "/member/search/{filter}/{data}", 
			method = {RequestMethod.GET, RequestMethod.POST}, consumes = "application/json")
	public Map<?, ?> searchMember(
			@PathVariable String filter,
			@PathVariable String data) {
		Map<String, Object> map = new HashMap<>();
		logger.info("searchMember() is {}", "entered");
		cmd.setTable("Member");
		cmd.setData1(filter);
		cmd.setData2(data);
		map.put("search", (List<?>) new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.searchAdminMember(cmd);
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
	
	@RequestMapping(value = "/statistics/board", 
			method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> boardStatistics() {
		Map<String, Object> map = new HashMap<>();
		logger.info("boardStatistics() is {}", "entered");
		map.put("data", (List<?>) new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.boardTest(cmd);
			}
		}.excute(cmd));
		return map;
	}

	@RequestMapping(value = "/board/{pageNum}",
			method = RequestMethod.GET, consumes = "application/json")
	public Map<?, ?> manageBoard(
			@PathVariable String pageNum) {
		Map<String, Object> map = new HashMap<>();
		logger.info("manageBoard() is {}", "entered");
		cmd.setData1(pageNum);
		map.put("board", new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.boardList(cmd);
			}
		}.excute(cmd));
		map.put("pageNum", Integer.parseInt(pageNum)+15);
		return map;
	}
}
