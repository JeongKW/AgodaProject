package com.agoda.web.yongdae;

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
import com.agoda.web.common.IUpdateService;
import com.agoda.web.mapper.MapperYD;

@RestController
public class ResidenceController {
	private static final Logger logger = LoggerFactory.getLogger(ResidenceController.class);
	@Autowired MapperYD mapperYD;
	@Autowired Command cmd;
	@Autowired ResiList resiList;
	
	@RequestMapping(value="/resi/reser/{resCode}", method= RequestMethod.POST, consumes="application/json")
	public Map<?, ?> resiInfo(@RequestBody Map<String, String> params){
		Map<String, Object> map = new HashMap<>();
		logger.info("resiInfo is {}", "entered");
		cmd.setData1(params.get("resCode"));
		map.put("checkIn", params.get("checkIn"));
		map.put("checkOut", params.get("checkOut"));
		map.put("headCount", params.get("headCount"));
		map.put("success", new IGetService() {			
			@Override
			public Object excute(Command cmd) {
				return mapperYD.selectResiInfoOne(cmd);
			}
		}.excute(cmd));
		logger.info("resiInfo success is {}", map.get("success"));
		return map;
	}
	
	@RequestMapping(value="/resi/viewNum/{resCode}", method= RequestMethod.POST)
	public void updateViewNum(@PathVariable String resCode){
		logger.info("updateViewNum is {}", "entered");
		logger.info("updateViewNum resCode is {}", resCode);
		cmd.setData1(resCode);
		new IUpdateService() {
			public void excute(Command cmd) {
				mapperYD.updateResiViewNum(cmd);				
			}
		}.excute(cmd);		
	}
	
	@RequestMapping(value="/resi/searchKeyword")
	public Map<?, ?> searchKeyword(String keyword){
		Map<String, Object> map = new HashMap<>();
		logger.info("searchKeyword is {}", "entered");
		cmd.setData1(keyword);
		cmd.setTable("residence");
		map.put("success", (List<?>) new IGetService() {			
			@Override
			public Object excute(Command cmd) {
				return mapperYD.selectResiByKeyword(cmd);
			}
		}.excute(cmd));
		logger.info("searchKeyword is {}", map.get("success"));
		return map;
	}
	
	
	@RequestMapping(value="/resi/loadMore", method = RequestMethod.POST, consumes="application/json")
	public Map<?, ?> loadMoreList(@RequestBody Map<String, String> params){
		Map<String, Object> map = new HashMap<>();
		logger.info("Wherekeyword is {}", params.get("Wherekeyword"));
		resiList.setStartRow(resiList.getStartRow()+Integer.parseInt(params.get("listCount")));
		resiList.setEndRow(resiList.getEndRow()+Integer.parseInt(params.get("listCount")));
		if(resiList.getEndRow() > resiList.getTotalCount()) {
			resiList.setEndRow(resiList.getTotalCount());
		}		
		logger.info("startRow is {}", resiList.getStartRow());
		logger.info("endRow is {}", resiList.getEndRow());
		cmd.setData1(resiList.getStartRow()+"");
		cmd.setData1(1+"");
		cmd.setData2(resiList.getEndRow()+"");
		map.put("startRow", cmd.getData1());
		map.put("endRow", cmd.getData2());
		map.put("totalCount", resiList.getTotalCount());
		logger.info("endRow is {}", map.get("endRow"));
		logger.info("totalCount is {}", map.get("totalCount"));
		
		switch (params.get("Wherekeyword")) {
		case "null":
			map.put("success", (List<?>) new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiList(cmd);
				}
			}.excute(cmd));			
		break;
		case "multiOption":
			logger.info("loadMore multiOption is {}", "entered");
			logger.info("loadMore multiData is {}", params.get("multiData"));
			String[] arr = params.get("multiData").split("/");
			int loopCount = 0;
			if(params.get("multiData").contains("breakfast")) {
				loopCount = arr.length-2;
			} else {
				loopCount = arr.length-1;
			}
			String result="", breakfastBool="", starRatingCount = "";
			for(int i=0; i<arr.length; i++) {				
				if(arr[i].equals("breakfast")) {
					breakfastBool = "AND breakfast LIKE 'true' ";
				} else if(arr[i].equals("starRating5") || arr[i].equals("starRating4") || arr[i].equals("starRating3")
					|| arr[i].equals("starRating2") || arr[i].equals("starRating1")) {
					if(i < loopCount) {
						starRatingCount += "'"+arr[i].substring(10, 11)+"', ";											
					} else {
						starRatingCount += "'"+arr[i].substring(10, 11)+"'";										
					}
				} 
			}
			if(!starRatingCount.equals("") && !breakfastBool.equals("")) {
				result = breakfastBool+"AND star_rating IN("+starRatingCount+")";				
			} else if(!starRatingCount.equals("")) {
				result = "AND star_rating IN("+starRatingCount+")";	
			} else if(!breakfastBool.equals("")) {
				result = breakfastBool;
			}
			logger.info("result is {}", result);
			cmd.setData4(result);
			map.put("totalCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordMultiOptionCount(cmd);
				}
			}.excute(cmd));
			if(resiList.getEndRow() > (int) map.get("totalCount")) {
				resiList.setEndRow((int) map.get("totalCount"));
			}
			map.put("endRow", resiList.getEndRow());
			map.put("success", (List<?>) new IGetService() {				
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListWithMultiOption(cmd);
				}
			}.excute(cmd));
		break;
		case "breakfast":
			logger.info("loadMore breakfast is {}", "entry");
			cmd.setData4("breakfast");
			cmd.setData5("true");
			map.put("totalCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCount(cmd);
				}
			}.excute(cmd));
			map.put("success", (List<?>) new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListWithWhere(cmd);
				}
			}.excute(cmd));			
		break;
		case "price":
			logger.info("loadMore price is {}", "entry");
			cmd.setData4(params.get("data4"));
			cmd.setData5(params.get("data5"));
			map.put("totalCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCountAddPrice(cmd);
				}
			}.excute(cmd));
			logger.info("totalCount price is {}", map.get("totalCount"));
			if(resiList.getEndRow() > (int) map.get("totalCount")) {
				resiList.setEndRow((int) map.get("totalCount"));
			}
			map.put("endRow", resiList.getEndRow());
			map.put("success", (List<?>) new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListByPrice(cmd);
				}
			}.excute(cmd));			
			break;
		case "starRating":
			logger.info("loadMore starRating is {}", "entry");
			cmd.setData4(params.get("data4"));
			cmd.setData5(params.get("data5"));
			map.put("totalCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCount(cmd);
				}
			}.excute(cmd));
			map.put("success", (List<?>) new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListWithWhere(cmd);
				}
			}.excute(cmd));			
			break;
		}				
		logger.info("resiFilter is {}", map.get("success"));
		map.put("headCount", params.get("headCount"));
		return map;
	}
	
	@RequestMapping(value="/resi/search/filter", method = RequestMethod.POST, consumes="application/json")	
	public Map<?, ?> resiFilter(@RequestBody Map<String, String> params){
		Map<String, Object> map = new HashMap<>();
		logger.info("/resi/search/filter is {}", "entered");
		logger.info("Orderby is {}", params.get("Orderby"));
		cmd.setTable(params.get("Table1"));
		cmd.setTable2(params.get("Table2"));
		map.put("count", new IGetService() {			
			@Override
			public Object excute(Command cmd) {
				return mapperYD.exist(cmd);
			}
		}.excute(cmd));
		resiList.setTotalCount((int) map.get("count"));
		resiList.setStartRow(1);
		resiList.setEndRow(Integer.parseInt(params.get("listCount")));
		cmd.setData1(resiList.getStartRow()+"");
		cmd.setData2(resiList.getEndRow()+"");
		resiList.setListBlock(resiList.getTotalCount() / resiList.getEndRow() + 1);
		logger.info("TotalCount is {}", resiList.getTotalCount());
		logger.info("ListBlock is {}", resiList.getListBlock());		
		cmd.setTable(params.get("Table1"));
		cmd.setTable2(params.get("Table2"));
		switch(params.get("WhereKeyword")) {
		case "multiOption": 
			logger.info("multiOption is {}", "entered");
			logger.info("multiData is {}", params.get("multiData"));
			String[] arr = params.get("multiData").split("/");
			int loopCount = -1;
			for(int i=0; i<arr.length; i++) {
				if(arr[i].contains("starRating")) {
					loopCount++;
				}
			}
			String result="", breakfastBool="", ratingScoreCount = "", starRatingCount = "";
			for(int i=0; i<arr.length; i++) {				
				if(arr[i].equals("breakfast")) {
					breakfastBool = "AND breakfast LIKE 'true' ";
				} else if(arr[i].equals("9") || arr[i].equals("8") || arr[i].equals("7")) {
					System.out.println("들어옴");
					ratingScoreCount = "AND rating_score >= "+arr[i]+" ";
				} else if(arr[i].equals("starRating5") || arr[i].equals("starRating4") || arr[i].equals("starRating3")
					|| arr[i].equals("starRating2") || arr[i].equals("starRating1")) {
					if(i < loopCount) {
						starRatingCount += "'"+arr[i].substring(10, 11)+"', ";											
					} else {
						starRatingCount += "'"+arr[i].substring(10, 11)+"'";										
					}
				} 
			}
			if(!starRatingCount.equals("") && !breakfastBool.equals("") && !ratingScoreCount.equals("")) {
				result = breakfastBool+ratingScoreCount+"AND star_rating IN("+starRatingCount+")";				
			} else if(!starRatingCount.equals("") && !breakfastBool.equals("")) {
				result = breakfastBool+"AND star_rating IN("+starRatingCount+")";				
			} else if(!ratingScoreCount.equals("") && !breakfastBool.equals("")) {
				result = breakfastBool+ratingScoreCount;				
			} else if(!starRatingCount.equals("") && !ratingScoreCount.equals("")) {
				result = ratingScoreCount+"AND star_rating IN("+starRatingCount+")";				
			} else if(!starRatingCount.equals("")) {
				result = "AND star_rating IN("+starRatingCount+")";	
			} else if(!breakfastBool.equals("")) {
				result = breakfastBool;
			} else if(!ratingScoreCount.equals("")) {
				result = ratingScoreCount;
			}
			logger.info("result is {}", result);					
			cmd.setData3(params.get("Orderby"));
			cmd.setData4(result);
			map.put("sortCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordMultiOptionCount(cmd);
				}
			}.excute(cmd));
			map.put("success", (List<?>) new IGetService() {				
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListWithMultiOption(cmd);
				}
			}.excute(cmd));
			logger.info("sortCount is {}", map.get("sortCount"));
			logger.info("multiOption is {}", map.get("success"));
		break;
		case "breakfast":
			logger.info("breakfast is {}", "entered");
			cmd.setData3(params.get("Orderby"));
			cmd.setData4(params.get("data4"));
			cmd.setData5(params.get("data5"));
			map.put("sortCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCount(cmd);
				}
			}.excute(cmd));
			map.put("success", (List<?>) new IGetService() {				
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListWithWhere(cmd);
				}
			}.excute(cmd));
			logger.info("breakfast is {}", map.get("success"));
		break;
		case "price":
			logger.info("price is {}", "entered");
			logger.info("price is {}", params.get("price1"));
			logger.info("price is {}", params.get("price2"));
			cmd.setData3(params.get("Orderby"));
			cmd.setData4(params.get("price1"));
			cmd.setData5(params.get("price2"));
			map.put("sortCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCountAddPrice(cmd);
				}
			}.excute(cmd));
			map.put("success", (List<?>) new IGetService() {				
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListByPrice(cmd);
				}
			}.excute(cmd));
			logger.info("ratingScore sortCount count is {}", map.get("sortCount"));
			logger.info("ratingScore success is {}", map.get("success"));
		break;
		case "ratingScore":
			logger.info("ratingScore is {}", "entered");
			cmd.setData3("ratingScore DESC");
			cmd.setData4(params.get("data4"));
			logger.info("getData1 is {}", cmd.getData1());
			logger.info("getData2 is {}", cmd.getData2());
			logger.info("getData3 is {}", cmd.getData3());
			logger.info("getData4 is {}", cmd.getData4());
			map.put("sortCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCountAddRatingScore(cmd);
				}
			}.excute(cmd));
			
			map.put("success", (List<?>) new IGetService() {				
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListByRatingScore(cmd);
				}
			}.excute(cmd));
			
			logger.info("ratingScore sortCount count is {}", map.get("sortCount"));
			logger.info("ratingScore success is {}", map.get("success"));
		break;
		case "starRating": 
			logger.info("starRating is {}", "entered");
			logger.info("StringBuffer is {}", new StringBuffer(params.get("data4")).insert(4, '_'));
			cmd.setData3(params.get("Orderby"));
			cmd.setData4(new StringBuffer(params.get("data4")).insert(4, '_')+"");
			cmd.setData5(params.get("data5"));
			map.put("sortCount",  new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.WherekeywordCount(cmd);
				}
			}.excute(cmd));
			map.put("success", (List<?>) new IGetService() {				
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiListWithWhere(cmd);
				}
			}.excute(cmd));
			logger.info("starRating is {}", map.get("success"));
		break;
		case "null":
			cmd.setData3(params.get("Orderby"));
			map.put("sortCount", map.get("count"));
			map.put("success", (List<?>) new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectResiList(cmd);
				}
			}.excute(cmd));
			/*숙소 성급 개수*/
			map.put("starRatingList", (List<?>) new IGetService() {			
				@Override
				public Object excute(Command cmd) {
					return mapperYD.selectByStarRating(cmd);
				}
			}.excute(cmd));
			logger.info("success is {}", map.get("success"));
			logger.info("sortCount is {}", map.get("sortCount"));
			logger.info("starRatingList is {}", map.get("starRatingList"));
		break;
		}		
		map.put("headCount", params.get("headCount"));			
		map.put("searchWord", params.get("searchWord"));			
		return map;	
	}
}
