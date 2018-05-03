package com.agoda.web.yongdae;

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
import com.agoda.web.mapper.MapperYD;

@RestController
public class ResidenceController {
	private static final Logger logger = LoggerFactory.getLogger(ResidenceController.class);
	@Autowired MapperYD ydMapper;
	@Autowired Command cmd;
	@Autowired ResiList resiList;
	@RequestMapping(value="/resi/loadMore", method = RequestMethod.POST, consumes="application/json")
	public Map<?, ?> loadMoreList(@RequestBody Map<String, String> params){
		Map<String, Object> map = new HashMap<>();
		resiList.setStartRow(resiList.getStartRow()+3);
		resiList.setEndRow(resiList.getEndRow()+3);
		if(resiList.getEndRow() > resiList.getTotalCount()) {
			resiList.setEndRow(resiList.getTotalCount());
		}		
		cmd.setData1(resiList.getStartRow()+"");
		cmd.setData2(resiList.getEndRow()+"");
		map.put("endRow", cmd.getData2());
		map.put("totalCount", resiList.getTotalCount());
		logger.info("endRow is {}", map.get("endRow"));
		logger.info("listBlock is {}", map.get("listBlock"));
		map.put("success", (List<?>) new IGetService() {			
			@Override
			public Object excute(Command cmd) {
				return ydMapper.selectResiList(cmd);
			}
		}.excute(cmd));
		
		logger.info("resiFilter is {}", map.get("success"));
	
		return map;
	}
	
	@RequestMapping(value="/resi/search/filter", method = RequestMethod.POST, consumes="application/json")	
	public Map<?, ?> resiFilter(@RequestBody Map<String, String> params){
		Map<String, Object> map = new HashMap<>();
		logger.info("resiFilter is {}", "entered");
		cmd.setTable("residence");
		map.put("count", new IGetService() {			
			@Override
			public Object excute(Command cmd) {
				return ydMapper.exist(cmd);
			}
		}.excute(cmd));
		
		logger.info("count is {}", map.get("count"));
		logger.info("searchWord, count, checkIn, checkOut is {}, {}, {}, {}", params.get("searchWord"), params.get("headCount"), params.get("checkIn"), params.get("checkOut"));
		resiList.setTotalCount((int) map.get("count"));
		resiList.setBlockSize(3);
		resiList.setStartRow(1);
		resiList.setEndRow(3);
		resiList.setListBlock(resiList.getTotalCount() / resiList.getBlockSize() + 1);
		logger.info("TotalCount is {}", resiList.getTotalCount());
		
		cmd.setData1(resiList.getStartRow()+"");
		cmd.setData2(resiList.getEndRow()+"");
		map.put("success", (List<?>) new IGetService() {			
			@Override
			public Object excute(Command cmd) {
				return ydMapper.selectResiList(cmd);
			}
		}.excute(cmd));
		
		logger.info("resiFilter is {}", map.get("success"));
		
		return map;	
	}
}
