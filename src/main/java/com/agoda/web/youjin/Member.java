package com.agoda.web.youjin;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component @Lazy
public class Member {
	private String id, pw, name, email, phone;
	
	@Override
	public String toString() {
		return "회원정보 [ID: " + id + ", 비밀번호: " + pw + ", 이름: " + name + ", 전화번호: "
				+ phone + ", 이메일: " + email + "]";
	}
}
