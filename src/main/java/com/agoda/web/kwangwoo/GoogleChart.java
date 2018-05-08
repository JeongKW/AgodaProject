package com.agoda.web.kwangwoo;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
@Lazy
public class GoogleChart {
	private String id, count;
}
