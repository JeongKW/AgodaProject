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

