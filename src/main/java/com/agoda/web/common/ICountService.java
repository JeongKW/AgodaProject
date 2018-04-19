package com.agoda.web.common;

import org.springframework.stereotype.Service;

@Service
public interface ICountService {
	public int excute(Command cmd);
}
