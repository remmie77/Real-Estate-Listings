# Real-Estate-Listings

CREATE TABLE "listings" (
	"id" serial primary key,
	"cost" real,
	"sqft" real,
	"type" varchar(255),
	"city" varchar(255),
	"image_path" varchar(255)	
);


