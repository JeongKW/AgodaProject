package com.agoda.web.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.agoda.web.youjin.Member;

import lombok.Data;

@Component @Data
@Lazy
public class Command {
	private String table, data1, data2;
	private Member member;
}
