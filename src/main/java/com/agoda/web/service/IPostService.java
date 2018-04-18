package com.agoda.web.service;

import org.springframework.stereotype.Service;

import com.agoda.web.domain.Command;

@Service
public interface IPostService {
	public void excute(Command cmd);
}
