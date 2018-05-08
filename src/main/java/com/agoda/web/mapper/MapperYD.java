package com.agoda.web.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.agoda.web.common.Command;
import com.agoda.web.yongdae.Residence;

@Repository
public interface MapperYD {
	public List<Residence> selectResiList(Command cmd);
	public List<Residence> selectResiByKeyword(Command cmd);
	public List<Residence> selectResiListWithWhere(Command cmd);
	public List<Residence> selectResiListByRatingScore(Command cmd);
	public List<Residence> selectResiListByPrice(Command cmd);
	public List<Residence> selectByStarRating(Command cmd);
	public List<Residence> selectResiListWithMultiOption(Command cmd);
	public Residence selectResiInfoOne(Command cmd);
	public void updateResiViewNum(Command cmd);
	public int exist(Command cmd);
	public int WherekeywordCount(Command cmd);
	public int WherekeywordCountAddRatingScore(Command cmd);
	public int WherekeywordCountAddPrice(Command cmd);
	public int WherekeywordMultiOptionCount(Command cmd);
}
