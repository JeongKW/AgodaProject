package com.agoda.web.minwoo;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Booking {
	private String bookNum, headCount, id, flightScheduleSeq;
}
