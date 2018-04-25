package com.agoda.web.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.agoda.web.common.Command;
import com.agoda.web.yongdae.Residence;

@Repository
public interface MapperYD {
	public List<Residence> selectResiList(Command cmd);
	public int exist(Command cmd);
}
