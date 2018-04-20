package com.agoda.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.agoda.web.common.Command;
import com.agoda.web.youjin.Member;

@Repository
public interface Mapper {
	public int exist(Command cmd);
	public Object select(Command cmd);
	public void insert(Command cmd);
	public void delete(Command cmd);
	public void update(Command cmd);
	public List<Member> selectAll(Command cmd);
}
