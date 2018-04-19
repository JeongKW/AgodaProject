package com.agoda.web.mapper;

import org.springframework.stereotype.Repository;

import com.agoda.web.common.Command;

@Repository
public interface Mapper {
	public int exist(Command cmd);
	public Object select(Command cmd);
	public void insert(Command cmd);
	public void delete(Command cmd);
	public void update(Command cmd);
}
