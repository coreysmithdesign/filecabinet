drop table if exists documents;
drop table if exists employees;
drop table if exists businesses;
drop table if exists users;

create table users (
	id serial primary key,
	username varchar(50) not null unique,
	password text not null,
	email varchar(50) not null,
	full_name varchar(50),
	business_name varchar(50),
 	is_business boolean,
	avatar text,
	settings text
);

create table employees (
  id serial primary key,
	user_id integer references users(id),
  employee_name varchar(50),
	position varchar(50),
	department varchar(50),
	employment_status varchar(50),
	date_of_hire date,
	date_of_separation date,
	current_wage integer,
	pto_level varchar(25),
	birth_date date,
	citizenship varchar(50),
	drivers_license_number varchar(50),
	drivers_license_state varchar(50),
	drivers_license_expire_date date,
	phone varchar(25),
	email varchar(50),
	address varchar(80),
	irs_marital_status varchar(25),
	irs_allowances integer,
	irs_withheld integer
);

create table documents (
	id serial primary key,
	user_id integer references users(id),
	employee_id integer references employees(id),
	document_name varchar(100),
	date_recieved date,
	date_added date,
	date_modified date,
	note text
);

create table businesses (
 	id serial primary key,
	user_id integer references users(id),
 	business_name varchar(50),
 	phone varchar(20),
 	address varchar(100)
);
