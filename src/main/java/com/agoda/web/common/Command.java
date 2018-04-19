package com.agoda.web.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
@Lazy
public class Command {
	private String table, data1, data2;
}
