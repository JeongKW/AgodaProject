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
	room_rating integer,
	size varchar(20)
);
create table flight(
	code varchar(20) primary key,
	name varchar(20)
);
create table city(
	zipcode integer primary key,
	state varchar(20),
	city varchar(20)
);
create table seat(
	seatnum integer primary key,
	grade integer,
	code varchar(20),
	foreign key(`code`) references `flight`(`code`) on delete cascade
);
create table airport(
	iatacode integer AUTO_INCREMENT primary key,
	name varchar(20),
	zipcode integer,
	foreign key(`zipcode`) references `city`(`zipcode`) on delete cascade
);
create table flight_schedule(
	flight_schedule_seq integer AUTO_INCREMENT primary key,
	from_location varchar(20),
	to_location varchar(20),
	departure_time date,
	arrival_time date,
	price integer,
	code varchar(20),
	iatacode integer,
	foreign key(`code`) references `flight`(`code`) on delete cascade,
	foreign key(`iatacode`) references `airport`(`iatacode`) on delete cascade
);
create table booking(
	booknum integer AUTO_INCREMENT primary key,
	headcount integer,
	id varchar(20),
	flight_schedule_seq integer,
	foreign key(`id`) references member(`id`) on delete cascade,
	foreign key(`flight_schedule_seq`) references flight_schedule(`flight_schedule_seq`) on delete cascade
);
create table residence(
	res_code varchar(20) primary key,
	star_rating integer,
	name varchar(20),
	zipcode integer,
	fac_code varchar(20),
	foreign key(`zipcode`) references city(`zipcode`) on delete cascade,
	foreign key(`fac_code`) references facility(`fac_code`) on delete cascade
);
create table reservation_schedule(
	res_schedule_seq integer AUTO_INCREMENT primary key,
	check_in date,
	check_out date,
	price integer,
	res_code varchar(20),
	foreign key(`res_code`) references residence(`res_code`) on delete cascade
);
create table reservation(
	reserv_seq integer AUTO_INCREMENT primary key,
	headcount integer,
	id varchar(20),
	res_schedule_seq integer,
	foreign key(`id`) references member(`id`) on delete cascade,
	foreign key(`res_schedule_seq`) references reservation_schedule(`res_schedule_seq`) on delete cascade
);

show tables;

drop table member;
drop table facility;
drop table seat;
drop table city;
drop table flight;

insert into member values('test1234', '1234', '테스터', 'youjin813@naver.com', '010-1111-1234');

select count(*) from member;
select count(*) from residence;

select * from member limit 12, 1;

SELECT * FROM Member WHERE id like 'test1234' AND pw like '1234';


INSERT INTO Member VALUES ('jku0150', '1111', '정광우', 'whiskyhwa1@gmail.com', '010-1112-1251');
INSERT INTO Member VALUES ('ydkim', 'ydkim1010!', '김용대', 'ydkim2110@gmail.com', '010-1234-1234');
INSERT INTO Member VALUES ('kurekure', 'rnalsdn1234', '구민우', 'kurekure@gmail.com', '010-1112-1251');
INSERT INTO Member VALUES ('enejwl', 'enejwl12', '두더지', 'enejwl12@naver.com', '010-5252-1231');
INSERT INTO Member VALUES ('lionisking', 'ehdanfdmldhkd', '사자', 'kyaowang@nate.com', '010-1285-9801');
INSERT INTO Member VALUES ('test1', 'test1', '김아무개', 'tester1@naver.com', '010-5752-3725');
INSERT INTO Member VALUES ('test2', 'test2', '하아무개', 'tester2@hanmail.com', '010-7231-5892');
INSERT INTO Member VALUES ('test3', 'test3', '차아무개', 'jku0150@nate.com', '010-3572-8297');
INSERT INTO Member VALUES ('admin', '1234', 'admin', 'jku0150@nate.com', '010-9740-1123');



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
insert into board(title,content,id) values ('객실요금에는 세금과 봉사료가 포함되어 있나요?','아고다 가격 표시의 기본 설정은 세금 및 봉사료 불포함입니다. 세금 및 봉사료가 포함된 객실 요금 확인을 위해서 스크린 상단 통화 탭의 요금 보기 ','qkrwogus');
insert into board(title,content,id) values ('세금 및 서비스에 대한 요금들은 무엇입니까?','고객님의 호텔 거래 이용과 관련되어, 고객님의 신용카드로 청구되는 요금에는 세금과 수수료가 포함되어 있습니다. 이 요금에는 고객님의 예약과 관련하여 저희가 호텔에 내고 있는 호텔의 판매세와 사용세, 투숙세, 객실세, 소비세, 부가가치세와 또는 그와 비슷한 세금 등의 예상 금액을 제한 없이 포함하고 있습니다.','qkrwogus');
insert into board(title,content,id) values ('왜 동일한 유형의 객실 요금이 하나 이상 있는 건가요?','호텔들은 프로모션을 통하여 다양한 요금을 책정하여 제공하고 있습니다. 이런 변화는 호텔의 결정으로 이루어집니다.','qkrwogus');

insert into board(title,content,id) values ('금액 청구 문의 드려요.','선예약 후지불로 예약했습니다. 왜 지불 날짜 이전에 금액이 청구되었습니까?','dlagpwls');
insert into board(title,content,id) values ('예약시 직불 카드 또는 은행 송금으로 결제하면 안되나요?','세금 및 서비스에 대한 요금들은 무엇입니까? 예약을 위해서 숙소에 현금으로 지불해도 되나요? 언제 예약 결제를 해야 하나요?','dlagpwls');
insert into board(title,content,id) values ('예약에 있는 이름을 변경할 수 있나요?','어디서 내 예약 세부 사항과 현황을 확인할 수 있나요? 예약의 확정 여부는 어디서 확인하나요? 왜 호텔에 기록이 없는 건가요?','dlagpwls');


insert into board(title,content,id) values ('금액 청구 문의 드려요.','선예약 후지불로 예약했습니다. 왜 지불 날짜 이전에 금액이 청구되었습니까?','jku0150');
insert into board(title,content,id) values ('예약시 직불 카드 또는 은행 송금으로 결제하면 안되나요?','세금 및 서비스에 대한 요금들은 무엇입니까? 예약을 위해서 숙소에 현금으로 지불해도 되나요? 언제 예약 결제를 해야 하나요?','jku0150');
insert into board(title,content,id) values ('예약에 있는 이름을 변경할 수 있나요?','어디서 내 예약 세부 사항과 현황을 확인할 수 있나요? 예약의 확정 여부는 어디서 확인하나요? 왜 호텔에 기록이 없는 건가요?','jku0150');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','jku0150');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','jku0150');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','jku0150');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','jku0150');
insert into board(title,content,id) values ('예약 취소 문의 드립니다.','아고다에서 제공하는 포인트로 예약을 했는데, 예약을 취소 또는 숙박 기간을 줄이고 싶습니다. 포인트도 환불이 되나요?','jku0150');

insert into board(title,content,id) values ('요금 환불에 대해 문의 드립니다.',' 선예약 후지불로 예약했습니다.왜 지불 날짜 이전에 금액이 청구되었습니까?','whtjds');
insert into board(title,content,id) values ('로그인 문의 드립니다.',' 계정에 로그인 할 수 없거나 아이디와 비밀번호를 잊어버린 경우에는 어떻게 해야 하나요?','whtjds');
insert into board(title,content,id) values ('카드 문의 드립니다.','신용카드에 표시된 금액과 영수증에 표시된 금액이 살짝 다를 때에는 어떻게 하나요?','whtjds');
insert into board(title,content,id) values ('양도 가능한가요?','제가 못가게 됐는데, 친구가 예약을 대신 사용할 수 있나요?','whtjds');
insert into board(title,content,id) values ('요청 드려요.','원하는 베드 종류 선택 및 흡연/금연 객실 요청 또는 상호 연결 객실을 요청할 수 있나요?','whtjds');
insert into board(title,content,id) values ('친구 추천 질문 있습니다.','아고다 친구 추천하기 프로그램에 어떻게 가입하나요?','whtjds');
insert into board(title,content,id) values ('왜 금액이 다른가요?','아고다 기프트 카드 금액이 예약별로 다른 이유는 무엇인가요?','whtjds');
insert into board(title,content,id) values ('후기 질문 있습니다.','왜 제가 작성한 호텔 후기가 웹사이트에 게시되지 않습니까?','whtjds');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','whtjds');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','whtjds');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','whtjds');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','whtjds');

insert into board(title,content,id) values ('요금 환불에 대해 문의 드립니다.',' 선예약 후지불로 예약했습니다.왜 지불 날짜 이전에 금액이 청구되었습니까?','jku0150');
insert into board(title,content,id) values ('로그인 문의 드립니다.',' 계정에 로그인 할 수 없거나 아이디와 비밀번호를 잊어버린 경우에는 어떻게 해야 하나요?','jku0150');
insert into board(title,content,id) values ('카드 문의 드립니다.','신용카드에 표시된 금액과 영수증에 표시된 금액이 살짝 다를 때에는 어떻게 하나요?','jku0150');
insert into board(title,content,id) values ('양도 가능한가요?','제가 못가게 됐는데, 친구가 예약을 대신 사용할 수 있나요?','jku0150');
insert into board(title,content,id) values ('요청 드려요.','원하는 베드 종류 선택 및 흡연/금연 객실 요청 또는 상호 연결 객실을 요청할 수 있나요?','jku0150');
insert into board(title,content,id) values ('친구 추천 질문 있습니다.','아고다 친구 추천하기 프로그램에 어떻게 가입하나요?','jku0150');
insert into board(title,content,id) values ('왜 금액이 다른가요?','아고다 기프트 카드 금액이 예약별로 다른 이유는 무엇인가요?','jku0150');
insert into board(title,content,id) values ('후기 질문 있습니다.','왜 제가 작성한 호텔 후기가 웹사이트에 게시되지 않습니까?','jku0150');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','jku0150');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','jku0150');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','jku0150');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','jku0150');

insert into board(title,content,id) values ('요금 환불에 대해 문의 드립니다.',' 선예약 후지불로 예약했습니다.왜 지불 날짜 이전에 금액이 청구되었습니까?','dlagpwls');
insert into board(title,content,id) values ('로그인 문의 드립니다.',' 계정에 로그인 할 수 없거나 아이디와 비밀번호를 잊어버린 경우에는 어떻게 해야 하나요?','dlagpwls');
insert into board(title,content,id) values ('카드 문의 드립니다.','신용카드에 표시된 금액과 영수증에 표시된 금액이 살짝 다를 때에는 어떻게 하나요?','dlagpwls');
insert into board(title,content,id) values ('양도 가능한가요?','제가 못가게 됐는데, 친구가 예약을 대신 사용할 수 있나요?','dlagpwls');
insert into board(title,content,id) values ('요청 드려요.','원하는 베드 종류 선택 및 흡연/금연 객실 요청 또는 상호 연결 객실을 요청할 수 있나요?','dlagpwls');
insert into board(title,content,id) values ('친구 추천 질문 있습니다.','아고다 친구 추천하기 프로그램에 어떻게 가입하나요?','dlagpwls');
insert into board(title,content,id) values ('왜 금액이 다른가요?','아고다 기프트 카드 금액이 예약별로 다른 이유는 무엇인가요?','dlagpwls');
insert into board(title,content,id) values ('후기 질문 있습니다.','왜 제가 작성한 호텔 후기가 웹사이트에 게시되지 않습니까?','dlagpwls');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','dlagpwls');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','dlagpwls');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','dlagpwls');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','dlagpwls');

insert into board(title,content,id) values ('금액 청구 문의 드려요.','선예약 후지불로 예약했습니다. 왜 지불 날짜 이전에 금액이 청구되었습니까?','qkrwogus');
insert into board(title,content,id) values ('예약시 직불 카드 또는 은행 송금으로 결제하면 안되나요?','세금 및 서비스에 대한 요금들은 무엇입니까? 예약을 위해서 숙소에 현금으로 지불해도 되나요? 언제 예약 결제를 해야 하나요?','qkrwogus');
insert into board(title,content,id) values ('예약에 있는 이름을 변경할 수 있나요?','어디서 내 예약 세부 사항과 현황을 확인할 수 있나요? 예약의 확정 여부는 어디서 확인하나요? 왜 호텔에 기록이 없는 건가요?','qkrwogus');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','qkrwogus');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','qkrwogus');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','qkrwogus');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','qkrwogus');
insert into board(title,content,id) values ('예약 취소 문의 드립니다.','아고다에서 제공하는 포인트로 예약을 했는데, 예약을 취소 또는 숙박 기간을 줄이고 싶습니다. 포인트도 환불이 되나요?','qkrwogus');

insert into board(title,content,id) values ('금액 청구 문의 드려요.','선예약 후지불로 예약했습니다. 왜 지불 날짜 이전에 금액이 청구되었습니까?','dlgusquf');
insert into board(title,content,id) values ('예약시 직불 카드 또는 은행 송금으로 결제하면 안되나요?','세금 및 서비스에 대한 요금들은 무엇입니까? 예약을 위해서 숙소에 현금으로 지불해도 되나요? 언제 예약 결제를 해야 하나요?','dlgusquf');
insert into board(title,content,id) values ('예약에 있는 이름을 변경할 수 있나요?','어디서 내 예약 세부 사항과 현황을 확인할 수 있나요? 예약의 확정 여부는 어디서 확인하나요? 왜 호텔에 기록이 없는 건가요?','dlgusquf');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','dlgusquf');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','dlgusquf');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','dlgusquf');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','dlgusquf');
insert into board(title,content,id) values ('예약 취소 문의 드립니다.','아고다에서 제공하는 포인트로 예약을 했는데, 예약을 취소 또는 숙박 기간을 줄이고 싶습니다. 포인트도 환불이 되나요?','dlgusquf');

insert into board(title,content,id) values ('금액 청구 문의 드려요.','선예약 후지불로 예약했습니다. 왜 지불 날짜 이전에 금액이 청구되었습니까?','tnqls');
insert into board(title,content,id) values ('예약시 직불 카드 또는 은행 송금으로 결제하면 안되나요?','세금 및 서비스에 대한 요금들은 무엇입니까? 예약을 위해서 숙소에 현금으로 지불해도 되나요? 언제 예약 결제를 해야 하나요?','tnqls');
insert into board(title,content,id) values ('예약에 있는 이름을 변경할 수 있나요?','어디서 내 예약 세부 사항과 현황을 확인할 수 있나요? 예약의 확정 여부는 어디서 확인하나요? 왜 호텔에 기록이 없는 건가요?','tnqls');
insert into board(title,content,id) values ('영수증 관련 질문 있습니다.','현지 세금 영수증을 어떻게 받을 수 있나요? 출력된 영수증을 우편으로 받을 수 있나요?','tnqls');
insert into board(title,content,id) values ('카드 예약 문의 있습니다.','당사자 카드 말고 친구의 신용카드를 이용하여 예약할 수 있나요?','tnqls');
insert into board(title,content,id) values ('개인정보 문의 드려요.','왜 내 신용카드 정보를 아고다로 보내야 하는거죠? 호텔 예약 확정서(바우처)를 받지 못했어요.','tnqls');
insert into board(title,content,id) values ('예약 확정 문제 질문 드려요','예약 확정을 위해 사용한 신용카드가 무효되었거나 취소 되었다면 어떻게 해야 하나요??','tnqls');
insert into board(title,content,id) values ('예약 취소 문의 드립니다.','아고다에서 제공하는 포인트로 예약을 했는데, 예약을 취소 또는 숙박 기간을 줄이고 싶습니다. 포인트도 환불이 되나요?','tnqls');