package com.agoda.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.agoda.web.common.Command;
import com.agoda.web.minwoo.FlightSchedule;

@Repository
public interface MapperMW {
	public List<FlightSchedule> selectFlightList(Command cmd);
	public List<FlightSchedule> selectBackFlightList(Command cmd);
	public int departureCount(Command cmd);
	public int arrivalCount(Command cmd);
}