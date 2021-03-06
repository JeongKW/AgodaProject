package com.agoda.web.kwangwoo;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Board {
	private String bbsSeq, title, content, regdate, id, viewCount;
}
