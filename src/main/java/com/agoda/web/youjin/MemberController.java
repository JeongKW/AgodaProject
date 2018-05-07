package com.agoda.web.youjin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.agoda.web.common.Command;
import com.agoda.web.common.ICountService;
import com.agoda.web.common.IDeleteService;
import com.agoda.web.common.IGetService;
import com.agoda.web.common.IPostService;
import com.agoda.web.common.IUpdateService;
import com.agoda.web.kwangwoo.Board;
import com.agoda.web.mapper.MapperJK;
import com.agoda.web.mapper.MapperYJ;


@RestController
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired Command cmd;
	@Autowired Board board;
	@Autowired MapperJK mapperJK;
	@Autowired MapperYJ mapper;
	@RequestMapping(value = "/member/{id}/login", 
			method = RequestMethod.POST, consumes="application/json")
	public Map<?,?> getUserId(
			@PathVariable String id,
			@RequestBody Member m){
		logger.info("getUserId is {}", "entered");
		Map<String, Object> map = new HashMap<>();
		logger.info("ID : {}", id);
		logger.info("PW : {}", m.getPw());
		cmd.setTable("Member");
		cmd.setData1(id);
		cmd.setData2(m.getPw());
		map.put("user", (Member) new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapperJK.selectById(cmd);
			}
		}.excute(cmd));
		map.put("success", new ICountService() {
			@Override
			public int excute(Command cmd) {
				return mapperJK.exist(cmd);
			}
		}.excute(cmd));
		return map;
	}
	 @RequestMapping(value="/member/idCheck/{id}", 
	    		method=RequestMethod.GET, consumes="application/json")
	    public Map<?,?> idCheck(@PathVariable String id){
		 logger.info("idCheck  {}", "entered");
		 Map<String, Object> map = new HashMap<>();
		 cmd.setTable("Member");
		 cmd.setData1(id);
		 System.out.println("중복 체크 아이디"+cmd.getData1());
		 map.put("checkId", new ICountService() {
				@Override
				public int excute(Command cmd) {
					return mapper.idOverlapCheck(cmd);
				}
			}.excute(cmd));
		 System.out.println("무슨 숫자 나ㅗㅇ나"+map);
		 return map;
	 }
	 @RequestMapping(value="/member/mypage", 
	    		method=RequestMethod.POST, consumes="application/json")
	 public Map<?, ?> changePw(@RequestBody Member m){
		Map<String, Object> map = new HashMap<>();
		logger.info("changePw  {}", "entered");
		cmd.setTable("Member");
		cmd.setData2(m.getId());
		cmd.setData1(m.getPw());
		System.out.println("들어온 비번 확인"+cmd.getData1());
		System.out.println("들어온 아이디 확인"+cmd.getData2());
		new IUpdateService() {
			@Override
			public void excute(Command cmd) {
				mapper.memberUpdatePass(cmd);
			}
		}.excute(cmd);
		return map;
	 }
	 @RequestMapping(value="/member/join", 
	    		method=RequestMethod.POST, consumes="application/json")
	 public Map<?, ?> joinMember(@RequestBody Member m){
		Map<String, Object> map = new HashMap<>();
		logger.info("joinMember  {}", "entered");
		cmd.setTable("Member");
		cmd.setData1(m.getId());
		cmd.setMember(m);
		new IPostService() {
			@Override
			public void excute(Command cmd) {
				mapper.joinMember(cmd);
			}
		}.excute(cmd);
		map.put("success", new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.excute(cmd));
		return map;
	}
	 @RequestMapping(value="/member/withdrawal/{id}", 
	    		method=RequestMethod.GET, consumes="application/json")
	    public Map<?,?> withdrawal(@PathVariable String id){
		 logger.info("withdrawal  {}", "entered");
		 Map<String, Object> map = new HashMap<>();
		 System.out.println("탈퇴할 아이디"+id);
		 cmd.setTable("Member");
		 cmd.setData1(id);
		 new IDeleteService() {
			@Override
			public void excute(Command cmd) {
				mapper.deleteMember(cmd);
			}
		 }.excute(cmd);
		 map.put("success", new IGetService() {
			@Override
			public Object excute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.excute(cmd));
		 return map;
	 }
	 //게시판
	 @RequestMapping(value="/board/{pageNum}")
		public Map<?, ?> board(@PathVariable String pageNum){
			logger.info("board {}.", "entered");
			logger.info("board pageNum pageNum {}.", pageNum);
			Map<String, Object> map = new HashMap<>();
			cmd.setTable("board");
			System.out.println("1번째 pageNum :" + pageNum);
			int pageNum1 =Integer.parseInt(pageNum);
			int pageSize = 10;
			int blockSize = 5;
			int totalCount = new ICountService() {
				@Override
				public int excute(Command cmd) {
					return mapper.boardExist(cmd);
				}
			}.excute(cmd);
			System.out.println("2번째 전체 게시글 수 : "+totalCount);
			int totalPage = (totalCount % pageSize ==0) ? totalCount/pageSize : (totalCount/pageSize)+1;
			System.out.println("3번째 totalPage :"+totalPage );
		    int startRow = (pageNum1-1)*pageSize+1;
			System.out.println("4번째 startRow :"+startRow);
			int endRow= pageSize * pageNum1;
			System.out.println("5번째 endRow :"+endRow);
			int pageStart = (blockSize*((pageNum1-1)/blockSize))+1;
		    System.out.println("6번째 pageStart :"+pageStart);
			int pageEnd = (totalPage == pageNum1) ? totalPage:(pageStart+blockSize)-1;
			System.out.println("7번째 pageEnd :"+pageEnd);
			boolean prevBlock = (pageNum1 > 5) ? true : false;
			System.out.println("8번째 prevBlock :"+prevBlock);
			boolean nextBlock = (totalPage != pageEnd);
			System.out.println("9번째 nextBlock :"+nextBlock);
			cmd.setData1(String.valueOf(startRow));
			cmd.setData2(String.valueOf(endRow));
			List<String>seqList = new ArrayList<>();
			@SuppressWarnings("unchecked") 
			List<Board>list = (List<Board>) new IGetService() {
				@Override
				public Object excute(Command cmd) {
					return mapper.selectAll(cmd);
				}
			}.excute(cmd);
			for(Board s : list) {
				seqList.add(s.getBbsSeq());
			}
			map.put("seqList", seqList);
			map.put("list", list);
			map.put("pageNum1", pageNum1);
			map.put("pageSize", pageSize);
			map.put("blockSize", blockSize);
			map.put("totalCount", totalCount);
			map.put("totalPage", totalPage);
			map.put("startRow", startRow);
			map.put("endRow", endRow);
			map.put("pageStart", pageStart);
			map.put("pageEnd", pageEnd);
			map.put("prevBlock", prevBlock);
			map.put("nextBlock", nextBlock);
			logger.info("board 시작 로우{}.", cmd.getData1());
			logger.info("board {}.", map);
			logger.info("board {}.", mapper.selectAll(cmd));
			return map;
		}
		@RequestMapping(value="/board/post/{seq}",method = RequestMethod.POST, consumes="application/json")
		public Map<?,?> detail(@PathVariable String seq) {
			logger.info("board detail {}.", "entered");
			logger.info("넘어온 seq 값 "+ seq);
			Map<String, Object> map = new HashMap<>();
			cmd.setTable("board");
			cmd.setData1(seq);
			Board board =  (Board) new IGetService() {
				@Override
				public Object excute(Command cmd) {
					return mapper.select(cmd);
				}
			}.excute(cmd);
			System.out.println("테이블 안에 있는 조회수 보기ㅣㅣㅣㅣ"+board.getViewCount());
			System.out.println("조회수 보기ㅣㅣㅣㅣ"+cmd.getData2());
			int a = Integer.parseInt(board.getViewCount());
			cmd.setData2(String.valueOf(a+1));
			new IUpdateService() {
				@Override
				public void excute(Command cmd) {
					mapper.updateViewCount(cmd);
				}
			}.excute(cmd);
			map.put("board", board);
			logger.info("디테일에 나올  {}.",board);
			
			return map;
		}
		@RequestMapping(value="/board/update/article/{bbsSeq}", method=RequestMethod.POST, consumes="application/json")
		public Map<?,?> updateArticle(@RequestBody Board b,@PathVariable String bbsSeq){
			Map<String, Object> map = new HashMap<>();
			logger.info("board updateArticle {}.", "entered");
			cmd.setTable("board");
			cmd.setData1(b.getTitle());
			cmd.setData2(b.getContent());
			/*cmd.setData3(bbsSeq);*/
			logger.info("업데이트 내용 들어왔나{}.",b.getContent());
			new IUpdateService() {
				@Override
				public void excute(Command cmd) {
					mapper.updateArticle(cmd);
				}
			}.excute(cmd);
			return map;
		}
		@RequestMapping(value="/board/post/article", method=RequestMethod.POST, consumes="application/json")
		public Map<?,?> postArticle(@RequestBody Board b){
			Map<String, Object> map = new HashMap<>();
			logger.info("board postArticle {}.", "entered");
			cmd.setTable("board");
			cmd.setData1(b.getTitle());
			cmd.setData2(b.getContent());
			logger.info("board postArticle 잘 등어왔나{}.",b.getContent());
			new IPostService() {
				@Override
				public void excute(Command cmd) {
					mapper.insertArticle(cmd);
				}
			}.excute(cmd);
			return map;
		}	
		@RequestMapping(value="/board/delete/article/{bbsSeq}",method=RequestMethod.GET, consumes="application/json")
		public Map<?, ?> deleteArticle(@PathVariable String bbsSeq){
			Map<String, Object> map = new HashMap<>();
			logger.info("board deleteArticle {}.", "entered");
			logger.info("board 들어온 아이디 {}.", bbsSeq);
			cmd.setTable("board");
			cmd.setData1(bbsSeq);
			new IDeleteService() {
				@Override
				public void excute(Command cmd) {
					mapper.deleteArticle(cmd);
				}
			}.excute(cmd);
			logger.info("아이디 {}.", bbsSeq);
			return map;
		}
}
