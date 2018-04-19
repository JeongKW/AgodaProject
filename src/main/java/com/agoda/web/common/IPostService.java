package com.agoda.web.common;

import org.springframework.stereotype.Service;

@Service
public interface IPostService {
	public void excute(Command cmd);
}
