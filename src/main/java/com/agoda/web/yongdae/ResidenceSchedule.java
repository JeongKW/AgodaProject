package com.agoda.web.yongdae;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class ResidenceSchedule {
	private String resScheduleSeq, checkIn, checkOut, price, resCode;
}
