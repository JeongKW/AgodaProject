package com.agoda.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.agoda.web.common.Command;
import com.agoda.web.minwoo.Airport;
import com.agoda.web.minwoo.FlightSchedule;

@Repository
public interface MapperMW {
	public List<FlightSchedule> selectDepartureFlightList(Command cmd);
	public List<FlightSchedule> selectBackFlightList(Command cmd);
	public List<FlightSchedule> selectSortFlightList(Command cmd);
	public List<FlightSchedule> selectDepartureFlightCode(Command cmd);
	public List<Airport> selectAirport(Command cmd);
	public void insertFlightBook(Command cmd);
	public void insertArvFlightBook(Command cmd);
}