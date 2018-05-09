/* YONGDAE */
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

/* YOUJIN */

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

/* MINWOO */

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