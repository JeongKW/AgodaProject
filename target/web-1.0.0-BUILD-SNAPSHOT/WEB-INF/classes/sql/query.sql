create table member(
	id varchar(20) primary key,
	pw varchar(20),
	name varchar(20),
	email varchar(40),
	phone varchar(20)
);
create table facility(
	fac_code varchar(20) primary key,
	breakfast varchar(20),
	room_rating int,
	size varchar(20)
);
create table flight(
	code varchar(20) primary key,
	name varchar(20)
);
create table city(
	zipcode int primary key,
	state varchar(20),
	city varchar(20)
);
create table seat(
	seatnum int primary key,
	grade int,
	code varchar(20),
	foreign key(code) references flight(code) on delete cascade
);
create table airport(
	iatacode varchar(20) primary key,
	name varchar(20),
	zipcode int,
	foreign key(zipcode) references city(zipcode) on delete cascade
);
create table flight_schedule(
	flight_schedule_seq int primary key AUTO_INCREMENT,
	from_location varchar(20),
	to_location varchar(20),
	departure_time datetime,
	arrival_time datetime,
	price int,
	code varchar(20),
	iatacode varchar(20),
	foreign key(code) references flight(code),
	foreign key(iatacode) references airport(iatacode)
);
create table booking(
	booknum int primary key AUTO_INCREMENT,
	headcount int,
	id varchar(20),
	bookername varchar(20),
	firstname varchar(20),
	lastname varchar(20),
	flight_schedule_seq int,
	foreign key (id) references member(id),
	foreign key (flight_schedule_seq) references flight_schedule(flight_schedule_seq)
);
create table residence(
	res_code varchar(20) primary key,
	star_rating int,
	name varchar(20),
	zipcode int,
	fac_code varchar(20),
	price int,
	view_num int,
	foreign key(zipcode) references city(zipcode) on delete cascade,
	foreign key(fac_code) references facility(fac_code) on delete cascade
);
create table reservation_schedule(
	res_schedule_seq int AUTO_INCREMENT primary key,
	check_in date,
	check_out date,
	price int,
	res_code varchar(20),
	foreign key(res_code) references residence(res_code) on delete cascade
);
create table reservation(
	reserv_seq int AUTO_INCREMENT primary key,
	headcount int,
	id varchar(20),
	res_schedule_seq int,
	foreign key(id) references member(id) on delete cascade,
	foreign key(res_schedule_seq) references reservation_schedule(res_schedule_seq) on delete cascade
);
create table board(
	bbs_seq int(1) AUTO_INCREMENT PRIMARY KEY,
	title varchar(100),
	content varchar(200),
	id varchar(20),
	regdate timestamp not null default now(),
	view_count int default 0,
	FOREIGN KEY (id) REFERENCES member(id) ON DELETE CASCADE
);

CREATE VIEW resi_rating_score
	AS
  	 SELECT res_code,
         	 ROUND(
               view_num
             / (SELECT sum(view_num) FROM residence)
             * 100
             / ((SELECT max(A.rating_score)
                   FROM (SELECT res_code,
                                  view_num
                                / (SELECT sum(view_num) FROM residence)
                                * 100
                                   AS rating_score
                           FROM residence) A))
             * 10,
             1)
             AS rating_score
	FROM residence;

CREATE VIEW board_bbsseq_desc
	AS
     SELECT bbs_seq AS bbsSeq,
            title,
            content,
            id,
            DATE_FORMAT(NOW(), "%Y-%m-%d") AS regdate,
            view_count AS viewCount
       FROM board
   		ORDER BY bbsSeq DESC;
   		
INSERT INTO member VALUES('admin', '1234', 'admin', 'jku0150@nate.com', '01097401123');
INSERT INTO member VALUES('azxs147', '1111', '정고은', 'azxs@gmail.com', '01071092664');
INSERT INTO member VALUES('dlagpwls', '1111', '임혜진', 'dlagpwls@gmail.com', '01078781027');
INSERT INTO member VALUES('dldbwls', '1234', '이유진', 'dldbwls@naver.com', '01071711297');
INSERT INTO member VALUES('dlgusquf', '1111', '이한병', 'dlgusquf@gmail.com', '01003698547');
INSERT INTO member VALUES('dlwodud', '1111', '이재영', 'dlwodud@gmail.com', '01041004127');
INSERT INTO member VALUES('edfghytr', '1111', '이지희', 'edfghytr@gmail.com', '01000902082');
INSERT INTO member VALUES('enejwl', 'enejwl12', '두더지', 'enejwl12@naver.com', '01052521231');
INSERT INTO member VALUES('jku0150', '1111', '정광우', 'whiskyhwa1@gmail.com', '01011121251');
INSERT INTO member VALUES('kurekure', '12345aa', '구민우', 'kurekure@gmail.com', '01067212321');
INSERT INTO member VALUES('lionisking', '1234', '사자', 'tiger@zoo.net', '01012346821');
INSERT INTO member VALUES('qkrtpsk', '1111', '박세나', 'qkrtpsk@gmail.com', '01033411111');
INSERT INTO member VALUES('qkrwlsdn', '1111', '박진우', 'qkrwlsdn@gmail.com', '01033574127');
INSERT INTO member VALUES('qkrwogus', '1111', '박재현', 'qkrwogus@gmail.com', '01085741187');
INSERT INTO member VALUES('qwert', '1111', '김주영', 'qwert@gmail.com', '01001701423');
INSERT INTO member VALUES('rfvbgty', '1111', '강현영', 'rfvbgty@gmail.com', '01017293784');
INSERT INTO member VALUES('rkdtmfrl', '1111', '강슨기', 'rkdtmfrl@gmail.com', '01089780124');
INSERT INTO member VALUES('rladudal', '1111', '김영미', 'rladudal@gmail.com', '01011111111');
INSERT INTO member VALUES('rlatmdgus', '1111', '김승현', 'rlatmdgus@gmail.com', '01075321251');
INSERT INTO member VALUES('test1', 'test1', '김기우', 'tester1@naver.com', '01057523725');
INSERT INTO member VALUES('test2', 'test2', '하바나', 'tester2@hanmail.com', '01072315892');
INSERT INTO member VALUES('test3', 'test3', '차지연', 'jku0150@nate.com', '01035728297');
INSERT INTO member VALUES('test4', 'test4', 'test4', 'test4@naver.com', '01097129761');
INSERT INTO member VALUES('test6', 'test6', 'test6', 'test6@nate.com', '01111112222');
INSERT INTO member VALUES('thsdbgus', '1111', '손유현', 'thsdbgus@gmail.com', '01011119999');
INSERT INTO member VALUES('tmdgns', '1111', '김승훈', 'tmdgns@gmail.com', '01001257532');
INSERT INTO member VALUES('tnqls', '1111', '김수빈', 'tnqls@gmail.com', '01088889999');
INSERT INTO member VALUES('whtjds', '1111', '조성모', 'whtjds@gmail.com', '01089544587');
INSERT INTO member VALUES('wjdcodms', '1111', '정채은', 'wjdcodms@gmail.com', '01075427541');
INSERT INTO member VALUES('ydkim', '1', '김용대', 'ydkim2110@gmail.com', '01069171756');
INSERT INTO member VALUES('yjslswl', '1111', '서민지', 'yjslswl@gmail.com', '01075981452');
INSERT INTO member VALUES('youjin813', '1', '이유진', 'youjin813@naver.com', '01033513271');
INSERT INTO city VALUES (530005, 'kansai', 'osaka');
INSERT INTO city VALUES (123456, 'seoul', 'mapo');
INSERT INTO city VALUES (350120, 'bayern', 'munich');
INSERT INTO city VALUES (350250, 'hessen', 'frankfurt');
INSERT INTO city VALUES (530600, 'tokyodo', 'tokyo');
INSERT INTO city VALUES (300700, 'taipak', 'taipei');
INSERT INTO city VALUES (400100, 'beijingsudo', 'beijing');
INSERT INTO city VALUES (200650, 'splitcity', 'split');
INSERT INTO facility VALUES('1','true', 3, 'single');
INSERT INTO facility VALUES('10','false', 1, 'single');
INSERT INTO facility VALUES('2','true', 2, 'double');
INSERT INTO facility VALUES('3','true', 1, 'king');
INSERT INTO facility VALUES('4','true', 2, 'king');
INSERT INTO facility VALUES('5','false', 1, 'double');
INSERT INTO facility VALUES('6','true', 3, 'double');
INSERT INTO facility VALUES('7','false', 2, 'single');
INSERT INTO facility VALUES('8','false', 2, 'double');
INSERT INTO facility VALUES('9','true', 1, 'single');
INSERT INTO residence VALUES ('1', 5, 'abiz', 530005, 1, 110000, 0);
INSERT INTO residence VALUES ('2', 5, 'hilton', 123456, 1, 120000, 0);
INSERT INTO residence VALUES ('3', 3, 'dream', 350120, 2, 90000, 0);
INSERT INTO residence VALUES ('4', 4, 'Ibiztoday', 350250, 3, 200000, 0);
INSERT INTO residence VALUES ('5', 2, 'mitsui garden', 530600, 4, 150000, 0);
INSERT INTO residence VALUES ('6', 4, 'pengnon', 300700, 5, 320000, 0);
INSERT INTO residence VALUES ('7', 1, 'five star hotel', 400100, 6, 250000, 0);
INSERT INTO residence VALUES ('8', 3, 'bluegarden hotel', 200650, 7, 300000, 0);
insert into airport (iatacode, name, zipcode ) values( 'ICN', '서울 (인천)', '123456');
insert into airport (iatacode, name, zipcode ) values( 'KIX', '오사카 (간사이)', '530005');
insert into flight values('airseoul-235', '에어 서울');
insert into flight values('airseoul-721', '에어 서울');
insert into flight values('jeju-2231', '제주 항공');
insert into flight values('estar-022', '이스타');
insert into flight values('korea-022', '대한한공');
insert into flight_schedule(from_location, to_location, departure_time, arrival_time, price, code, iatacode) 
values ('seoul', 'osaka', '2018-05-09 08:10', '2018-05-09 09:40', '88000', 'jeju-2231', 'ICN');
insert into flight_schedule(from_location, to_location, departure_time, arrival_time, price, code, iatacode) 
values ('seoul', 'osaka', '2018-05-09 08:10', '2018-05-09 09:40', '88000', 'airseoul-235', 'ICN');
insert into flight_schedule(from_location, to_location, departure_time, arrival_time, price, code, iatacode) 
values ('osaka', 'seoul', '2018-05-15 6:30', '2018-05-15 8:00', '76000', 'airseoul-235', 'KIX');
insert into flight_schedule(from_location, to_location, departure_time, arrival_time, price, code, iatacode) 
values ('osaka', 'seoul', '2018-05-15 20:30', '2018-05-15 21:55', '106000', 'airseoul-721', 'KIX');
insert into board(title,content,id) values ('요금 환불에 대해 문의 드립니다.',' 선예약 후지불로 예약했습니다.왜 지불 날짜 이전에 금액이 청구되었습니까?','youjin813');
insert into board(title,content,id) values ('로그인 문의 드립니다.',' 계정에 로그인 할 수 없거나 아이디와 비밀번호를 잊어버린 경우에는 어떻게 해야 하나요?','azxs147');
insert into board(title,content,id) values ('카드 문의 드립니다.','신용카드에 표시된 금액과 영수증에 표시된 금액이 살짝 다를 때에는 어떻게 하나요?','qwert');
insert into board(title,content,id) values ('양도 가능한가요?','제가 못가게 됐는데, 친구가 예약을 대신 사용할 수 있나요?','rfvbgty');
insert into board(title,content,id) values ('요청 드려요.','원하는 베드 종류 선택 및 흡연/금연 객실 요청 또는 상호 연결 객실을 요청할 수 있나요?','edfghytr');
insert into board(title,content,id) values ('친구 추천 질문 있습니다.','아고다 친구 추천하기 프로그램에 어떻게 가입하나요?','rlatmdgus');
insert into board(title,content,id) values ('왜 금액이 다른가요?','아고다 기프트 카드 금액이 예약별로 다른 이유는 무엇인가요?','rladudtn');
insert into board(title,content,id) values ('후기 질문 있습니다.','왜 제가 작성한 호텔 후기가 웹사이트에 게시되지 않습니까?','yjslswl');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','dbstj');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','dnwlsl');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','tmdgns');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','whtjds');
insert into board(title,content,id) values ('예약 취소 문의 드립니다.','아고다에서 제공하는 포인트로 예약을 했는데, 예약을 취소 또는 숙박 기간을 줄이고 싶습니다. 포인트도 환불이 되나요?','dlwodud');
insert into board(title,content,id) values ('비밀번호 오류 질문 드립니다.','전송된 비밀번호를 입력했는데 비밀번호가 잘못되었다고 나옵니다.어떻게 해야 하나요?','tnqls');
insert into board(title,content,id) values ('침대 추가 문의 드립니다.','간이침대 또는 유아용 침대를 추가할 수 있나요? 간이침대 사용료는 어디에서 볼 수 있나요?','rladudal');
insert into board(title,content,id) values ('룸 문의 드립니다.','싱글룸(Single Room), 더블룸 (Double Room), 트윈룸(Twin Room)의 다른 점은 무엇인가요?','youjin813');
insert into board(title,content,id) values ('주차장 문의 드립니다.','호텔에 주차장 시설이 되어 있는지 어떻게 하면 알 수 있나요?','jku0150');
insert into board(title,content,id) values ('짐 문의 드려요.','체크인 전이나 체크아웃 후에 짐가방을 호텔에 맡겨둘 수 있나요?','dlagpwls');
insert into board(title,content,id) values ('계정 로그인 문제가 있습니다.','계정에 로그인 할 수 없거나 아이디와 비밀번호를 잊어버린 경우에는 어떻게 해야 하나요?','dlgusquf');
insert into board(title,content,id) values ('요금 프로모션 질문 있습니다.','1박 할인이 포함된 요금(Rates includes discount worth 1 night) 프로모션으로 예약한 객실의 1박 무료 숙박 혜택을 받으려면 어떻게 해야 하나요?','qkrwogus');
insert into board(title,content,id) values ('객실 예약 가능 질문 있습니다.','웹사이트에서 객실 수 현황을 확인할 때에 이용 가능한 객실이 없다고 뜨는데, 호텔 방이 다 찼다는 건가요?','rlarjsdn');
insert into board(title,content,id) values ('숙소 질문 있습니다.','숙소 성급은 어떻게 매겨진 것인가요?','qkrwlsdn');
insert into board(title,content,id) values ('선예약 후지불 이용 시 제가 원하는 때 지불이 가능합니까?','선예약 후지불에 1 USD 는 왜 청구되나요? 선예약 후지불에 Paypal 및 Alipay 사용이 불가능 합니까?','qkrtpsk');
insert into board(title,content,id) values ('금액 청구 문의 드려요.','선예약 후지불로 예약했습니다. 왜 지불 날짜 이전에 금액이 청구되었습니까?','thsdbgus');
insert into board(title,content,id) values ('예약시 직불 카드 또는 은행 송금으로 결제하면 안되나요?','세금 및 서비스에 대한 요금들은 무엇입니까? 예약을 위해서 숙소에 현금으로 지불해도 되나요? 언제 예약 결제를 해야 하나요?','rkdtmfrl');
insert into board(title,content,id) values ('예약에 있는 이름을 변경할 수 있나요?','어디서 내 예약 세부 사항과 현황을 확인할 수 있나요? 예약의 확정 여부는 어디서 확인하나요? 왜 호텔에 기록이 없는 건가요?','wjdcodms');
insert into board(title,content,id) values ('문서를 보내도 안전한가요?','호텔 예약 확정서(호텔 바우처)를 다시 보내주실 수 있나요?어떻게 하면 문서가 아고다에 잘 보내졌는지 알 수 있죠?문서를 보내고 싶지 않습니다. 대신 호텔에 직접 요금을 내도 되나요?','dlagpwls');
insert into board(title,content,id) values ('친구 추천 아고다 기프트 카드를 어떻게 적립하나요?','친구 추천하기를 통해 적립된 기프트 카드 금액을 어떻게 확인하나요? 친구 추천하기를 통해 적립된 기프트 카드는 언제 사용할 수 있나요? 아고다  친구 추천하기 프로그램에 어떻게 가입하나요?','qkrwogus');