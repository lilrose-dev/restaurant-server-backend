CREATE DATABASE restaurants;

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY NOT NULL,
    category_name TEXT NOT NULL
);

CREATE TABLE restaurants(
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name TEXT NOT NULL,
    category_id INT REFERENCES categories(category_id) NOT NULL
);

CREATE TABLE branches(
    branch_id SERIAL PRIMARY KEY NOT NULL,
    branch_name TEXT NOT NULL,
    restaurant_id INT REFERENCES restaurants(restaurant_id) NOT NULL
);


CREATE TABLE foods(
    food_id SERIAL PRIMARY KEY NOT NULL,
    food_name TEXT NOT NULL,
    branch_id INT REFERENCES branches(branch_id) NOT NULL,
    food_price INT NOT NULL
);  

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    order_user TEXT NOT NULL,
    order_location TEXT NOT NULL,
    order_phone INT NOT NULL,
    order_food TEXT NOT NULL,
    order_price INT NOT NULL,
    order_food_count INT NOT NULL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP;   
);

