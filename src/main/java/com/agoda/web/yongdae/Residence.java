package com.agoda.web.yongdae;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Residence {
	private String Row, resCode, starRating, name, zipcode, facCode;
}
