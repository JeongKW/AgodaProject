package com.agoda.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;
import com.agoda.web.common.Command;
import com.agoda.web.kwangwoo.Board;
import com.agoda.web.minwoo.FlightSchedule;
import com.agoda.web.yongdae.ResidenceSchedule;

@Repository
public interface MapperYJ {
	public void memberUpdatePass(Command cmd);
	public int idOverlapCheck(Command cmd);
	public void joinMember(Command cmd);
	public int exist(Command cmd);
	public void deleteMember(Command cmd);
	//게시판
	public int boardExist(Command cmd);
	public Object select(Command cmd);
	public void insert(Command cmd);
	public void delete(Command cmd);
	public void updateViewCount(Command cmd);
	public void insertArticle(Command cmd);
	public void deleteArticle(Command cmd);
	public void updateArticle(Command cmd);
	public List<Board> selectAll(Command cmd);
	public List<Board> searchBoard(Command cmd);
	public List<ResidenceSchedule> selectResidenceReservation(Command cmd);
	public List<FlightSchedule> selectFlightReservation(Command cmd);
	public int residenceReservationCheck(Command cmd);
	public int flightReservationCheck(Command cmd);
}
