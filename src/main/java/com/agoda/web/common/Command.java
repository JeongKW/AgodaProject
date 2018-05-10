package com.agoda.web.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.agoda.web.youjin.Member;

import lombok.Data;

@Component @Data
@Lazy
public class Command {
	private String table, table2, data1, data2, data3, data4, data5;
	private Member member;
}
