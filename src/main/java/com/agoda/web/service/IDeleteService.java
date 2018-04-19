package com.agoda.web.service;

import org.springframework.stereotype.Service;

import com.agoda.web.domain.Command;

@Service
public interface IDeleteService {
	public void excute(Command cmd);
}
