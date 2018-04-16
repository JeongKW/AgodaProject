package com.agoda.web.mapper;

import org.springframework.stereotype.Repository;

import com.agoda.web.domain.Command;

@Repository
public interface Mapper {
	public int exist(Command cmd);
	public Object selectById(Command cmd);
}
