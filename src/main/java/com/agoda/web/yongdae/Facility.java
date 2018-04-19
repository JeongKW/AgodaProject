package com.agoda.web.yongdae;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Facility {
	private String facCode, breakfast, roomRating, size;
}
