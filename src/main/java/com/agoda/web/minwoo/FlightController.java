package com.agoda.web.minwoo;

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
import com.agoda.web.common.ICountService;
import com.agoda.web.common.IGetService;
import com.agoda.web.mapper.MapperMW;

@RestController
public class FlightController {
	private static final Logger logger = LoggerFactory.getLogger(FlightController.class);
	@Autowired MapperMW mapperMW;
	@Autowired Booking book;
	@Autowired Flight flight;
	@Autowired FlightSchedule flightschedule;
	@Autowired FlightList flightList;
	@Autowired Seat seat;
	@Autowired Command cmd;
	
	@RequestMapping(value="/flight/search", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> bookflight(@RequestBody Map<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		
		logger.info("컨트롤러 진입{}", "welcome");
		logger.info("파람값{}", param);
		
		cmd.setTable("flight_schedule");
		
		switch (param.get("departure")) {
		case "서울":
			cmd.setData1("seoul");
			break;
		default:
			break;
		}
		
		switch (param.get("arrival")) {
		case "오사카":
			cmd.setData2("osaka");
			break;
		default:
			break;
		}
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		
		
		map.put("dptCount", new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				return mapperMW.departureCount(cmd);
			}
		}.excute(cmd));
		
		map.put("arvCount", new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				return mapperMW.arrivalCount(cmd);
			}
		}.excute(cmd));
		logger.info("cmd 값은 {}", map.get("dptCount"));
		logger.info("cmd 값은 {}", map.get("arvCount"));
		
		int departure = (int) map.get("dptCount");
		int arrival =  (int) map.get("arvCount");
		int totalCount = departure * arrival;
		
		flightList.setTotalCount(totalCount);
		flightList.setBlockSize(5);
		flightList.setStartRow(1);
		flightList.setEndRow(5);
		flightList.setBlockSize(5);
		flightList.setListBlock(flightList.getTotalCount() / flightList.getBlockSize()+1);
		logger.info("totalCount 값은 {}", flightList.getTotalCount());
		
		map.put("list", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("list"));
		
		
		return map;
	}
	@RequestMapping(value="/flight/research", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> reseachFlightList(@RequestBody Map<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		
		logger.info("재 검색 컨트롤러 진입{}", "welcome2");
		logger.info("파람값{}", param);
		
		cmd.setTable("flight_schedule");
		
		switch (param.get("departure")) {
		case "서울":
			cmd.setData1("seoul");
			break;
		default:
			break;
		}
		
		switch (param.get("arrival")) {
		case "오사카":
			cmd.setData2("osaka");
			break;
		default:
			break;
		}
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		
		
		map.put("dptCount", new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				return mapperMW.departureCount(cmd);
			}
		}.excute(cmd));
		
		map.put("arvCount", new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				return mapperMW.arrivalCount(cmd);
			}
		}.excute(cmd));
		logger.info("cmd 값은 {}", map.get("dptCount"));
		logger.info("cmd 값은 {}", map.get("arvCount"));
		
		int departure = (int) map.get("dptCount");
		int arrival =  (int) map.get("arvCount");
		int totalCount = departure * arrival;
		
		logger.info("totalCount 값은 {}", flightList.getTotalCount());
		
		map.put("list", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("list"));
		
		
		return map;
	}
	
	@RequestMapping(value="/flight/sort", method=RequestMethod.POST)
	public Map<?, ?> flightSort(@RequestBody HashMap<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		logger.info("정렬에 오신것을 환영하오 낮선이여", "");
		logger.info("리스트 파람값 {}", param);
		
		cmd.setTable("flight_schedule");
		switch (param.get("sort")) {
		case "아고다 추천":
			logger.info("아고다 추천으로 정렬");
			cmd.setData5("");
			break;
		case "최저가순":
			logger.info("최저가순으로 정렬");
			cmd.setData5("price");
			break;
		case "최고가순":
			logger.info("최고가순으로 정렬");
			cmd.setData5("price");
			break;
		case "최단시간순":
			logger.info("최단시간순으로 정렬");
			
			break;
		case "최장시간순":
			logger.info("최장시간순으로 정렬");
			break;

		default:
			break;
		}
		
		switch (param.get("departure")) {
		case "서울":
			cmd.setData1("seoul");
			break;
		default:
			break;
		}
		
		switch (param.get("arrival")) {
		case "오사카":
			cmd.setData2("osaka");
			break;
		default:
			break;
		}
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		
		map.put("list", (List<?>) new IGetService(){
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectSortFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("list"));
		
		return map;
	}
}
