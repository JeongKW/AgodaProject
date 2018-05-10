package com.agoda.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.agoda.web.common.Command;
import com.agoda.web.kwangwoo.Board;
import com.agoda.web.kwangwoo.GoogleChart;
import com.agoda.web.youjin.Member;

@Repository
public interface MapperJK {
	public int exist(Command cmd);
	public Object selectById(Command cmd);
	public void insertAdminMember(Command cmd);
	public void deleteAdminMember(Command cmd);
	public void updateAdminMember(Command cmd);
	public List<Member> searchAdminMember(Command cmd);
	public List<Member> selectAllAdminMember(Command cmd);
	public List<GoogleChart> boardTest(Command cmd);
	public List<Board> boardList(Command cmd);
	public void updateAdminBoard(Command cmd);
	public void deleteAdminBoard(Command cmd);
	public Object boardDetail(Command cmd);
	public int totalCount(Command cmd);
}