package com.agoda.web.common;

import org.springframework.stereotype.Service;

@Service
public interface IUpdateService {
	public void excute(Command cmd);
}
