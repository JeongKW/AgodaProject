package com.agoda.web.common;

import org.springframework.stereotype.Service;

@Service
public interface IDeleteService {
	public void excute(Command cmd);
}
