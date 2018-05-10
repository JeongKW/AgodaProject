package com.agoda.web.minwoo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.agoda.web.common.Command;
import com.agoda.web.common.IGetService;
import com.agoda.web.common.IPostService;
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
		cmd.setData1("%"+param.get("departure")+"%");
		cmd.setData2("%"+param.get("arrival")+"%");
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		
		logger.info("데이터 값{}", cmd.getData1());
		logger.info("데이터 값{}", cmd.getData2());
		logger.info("데이터 값{}", cmd.getData3());
		logger.info("데이터 값{}", cmd.getData4());
		
		map.put("dptList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectDepartureFlightList(cmd);
			}
		}.excute(cmd));
		
		map.put("backList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				return mapperMW.selectBackFlightList(cmd);
			}
		}.excute(cmd));
		
		logger.info("detail data is {}", map.get("backList"));
		
		
		return map;
	}
	@RequestMapping(value="/flight/research", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> reseachFlightList(@RequestBody Map<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		
		logger.info("재 검색 컨트롤러 진입{}", "welcome2");
		logger.info("파람값{}", param);
		
		cmd.setTable("flight_schedule");
		
		cmd.setData1("%"+param.get("departure")+"%");
		cmd.setData2("%"+param.get("arrival")+"%");
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		
		logger.info("totalCount 값은 {}", flightList.getTotalCount());
		
		map.put("dptList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectDepartureFlightList(cmd);
			}
		}.excute(cmd));
		
		map.put("backList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectBackFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("dptList"));
		
		
		return map;
	};
	
	@RequestMapping(value="/flight/departure", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> sortFlightListByDeparture(@RequestBody Map<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		
		logger.info("가는여정 검색 컨트롤러{}", "welcome2");
		logger.info("파람값{}", param);
		
		cmd.setTable("flight_schedule");
		cmd.setData1("%"+param.get("departure")+"%");
		cmd.setData2("%"+param.get("arrival")+"%");
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		cmd.setData5(param.get("departureCode"));
		
		logger.info("totalCount 값은 {}", flightList.getTotalCount());
		
		map.put("dptList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectDepartureFlightCode(cmd);
			}
		}.excute(cmd));
		
		map.put("backList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectBackFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("dptList"));
		logger.info("detail data is {}", map.get("backList"));
		
		
		return map;
	}
	@RequestMapping(value="/flight/back", method=RequestMethod.POST, consumes="application/json")
	public Map<?, ?> sortFlightListByBack(@RequestBody Map<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		
		logger.info("가는여정 검색 컨트롤러{}", "welcome2");
		logger.info("파람값{}", param);
		
		cmd.setTable("flight_schedule");
		cmd.setData1("%"+param.get("departure")+"%");
		cmd.setData2("%"+param.get("arrival")+"%");
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		cmd.setData5(param.get("departureCode"));
		
		logger.info("totalCount 값은 {}", flightList.getTotalCount());
		
		map.put("dptList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectDepartureFlightCode(cmd);
			}
		}.excute(cmd));
		
		map.put("backList", (List<?>) new IGetService() {
			
			@Override
			public Object excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapperMW.selectBackFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("dptList"));
		logger.info("detail data is {}", map.get("backList"));
		
		
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
		cmd.setData1("%"+param.get("departure")+"%");
		cmd.setData2("%"+param.get("arrival")+"%");
		cmd.setData3("%"+param.get("departureTime") +"%");
		cmd.setData4("%"+param.get("arrivalTime") + "%");
		
		map.put("list", (List<?>) new IGetService(){
			
			@Override
			public Object excute(Command cmd) {
				return mapperMW.selectSortFlightList(cmd);
			}
		}.excute(cmd));
		logger.info("detail data is {}", map.get("list"));
		
		return map;
	}
	@RequestMapping(value="/flight/payment", method=RequestMethod.POST)
	public Map<?, ?> flightPayment(
			@RequestBody HashMap<String,String> param) {
		Map<String, Object> map = new HashMap<>();
		logger.info("드디어 여기까지 오셨군", "");
		logger.info("리스트 파람값 {}", param);
		
		cmd.setTable("booking");
		book.setId(param.get("id"));
		book.setFirstName(param.get("firstName"));
		book.setBookerName(param.get("bookerName"));
		book.setFlightScheduleSeq(param.get("dptScheduleSeq"));
		book.setHeadCount(param.get("bookCount"));
		book.setLastName(param.get("lastName"));
		cmd.setBooking(book);
		new IPostService() {
			
			@Override
			public void excute(Command cmd) {
				mapperMW.insertFlightBook(cmd);
			}
		}.excute(cmd);
		book.setFlightScheduleSeq(param.get("arvScheduleSeq"));
		cmd.setBooking(book);
		new IPostService() {
			
			@Override
			public void excute(Command cmd) {
				mapperMW.insertArvFlightBook(cmd);
			}
		}.excute(cmd);;
		
		logger.info("detail data is {}", map.get("list"));
		
		return map;
	}
}
