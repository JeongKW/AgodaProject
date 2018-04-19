package com.agoda.web.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class City {
	private String zipcode, state, city;
}
