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
	flight_schedule_seq int PRIMARY KEY AUTO_INCREMENT,
	from_location varchar(20),
	to_location varchar(20),
	departure_time datetime,
	arrival_time datetime,
	price int,
	code varchar(20),
	iatacode varchar(20),
	FOREIGN KEY (code) REFERENCES flight(code),
	FOREIGN KEY (iatacode) REFERENCES airport(iatacode)
);
create table booking(
	booknum int primary key AUTO_INCREMENT,
	headcount int,
	id varchar(20),
	bookername varchar(20),
	firstname varchar(20),
	lastname varchar(20),
	flight_schedule_seq int,
	FOREIGN KEY (id) REFERENCES member(id),
	FOREIGN KEY (flight_schedule_seq) REFERENCES flight_schedule(flight_schedule_seq)
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
create table board(
	bbs_seq int(1) AUTO_INCREMENT PRIMARY KEY,
	title varchar(100),
	content varchar(200),
	id varchar(20),
	regdate timestamp not null default now(),
	view_count int default 0,
	FOREIGN KEY (id) REFERENCES member(id) ON DELETE CASCADE
);


