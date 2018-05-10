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
	@RequestMapping(value="/flight/list/{count}", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> flightList(@PathVariable("id") String id, @RequestBody HashMap<String,Object> param) {
		Map<String, Object> map = new HashMap<>();
		
		logger.info("리스트 파람값", param);
		
		cmd.setTable("flight_schedule");
		
		return map;
	}
}
