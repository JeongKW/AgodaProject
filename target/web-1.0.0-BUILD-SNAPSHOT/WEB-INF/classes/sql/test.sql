create table member(
	id varchar(20) primary key,
	pw varchar(20),
	name varchar(20),
	email varchar(40),
	phone varchar(20)
);

drop table member;

insert into member values('test1234', '1234', '테스터', 'youjin813@naver.com', '010-1111-1234');



select count(*) from member;

SELECT * FROM Member WHERE id like 'test1234' AND pw like '1234';