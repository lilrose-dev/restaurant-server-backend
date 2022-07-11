---category
INSERT INTO categories(category_name)VALUES('Fast food');
INSERT INTO categories(category_name)VALUES('Milliy taomlar');

---restaurants
INSERT INTO restaurants(restaurant_name, category_id)VALUES('Rayhon', 2);
INSERT INTO restaurants(restaurant_name, category_id)VALUES('Yalpiz', 2);
INSERT INTO restaurants(restaurant_name, category_id)VALUES('Tarxun', 2);

INSERT INTO restaurants(restaurant_name, category_id)VALUES('EVOS', 1);
INSERT INTO restaurants(restaurant_name, category_id)VALUES('KFC', 1);
INSERT INTO restaurants(restaurant_name, category_id)VALUES('Belissimo', 1);



--branches
INSERT INTO branches (branch_name, restaurant_id)VALUES('Rayhon Chilonzor', 1);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Rayhon Hadra', 1);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Rayhon Chorsu', 1);

INSERT INTO branches (branch_name, restaurant_id)VALUES('Yalpiz Yunusobod', 2);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Yalpiz Qatortol', 2);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Yalpiz Sergeli', 2);

INSERT INTO branches (branch_name, restaurant_id)VALUES('Tarxun Drujba', 3);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Tarxun O`zgarish', 3);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Tarxun Chorsu', 3);


INSERT INTO branches (branch_name, restaurant_id)VALUES('Evos Qoraqamish', 4);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Evos SobirRahimov', 4);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Evos Samarqand Darvoza', 4);

INSERT INTO branches (branch_name, restaurant_id)VALUES('KFC G`afur G`ulom', 5);
INSERT INTO branches (branch_name, restaurant_id)VALUES('KFC Chilonzor', 5);
INSERT INTO branches (branch_name, restaurant_id)VALUES('KFC Olmazor', 5);

INSERT INTO branches (branch_name, restaurant_id)VALUES('Belissimo Drujba', 6);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Belissimo O`zgarish', 6);
INSERT INTO branches (branch_name, restaurant_id)VALUES('Belissimo Chorsu', 6);

--foods
--milliy taomlar
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Sho`rva', 1, 20000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Qozon kabob', 1, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lag`mon', 1, 25000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Osh', 2, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Qozon kabob', 2, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lag`mon', 2, 25000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Shashlik', 3, 19000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Qozon kabob', 3, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lag`mon', 3, 25000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Norin', 4, 30000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Shashlik', 4, 19000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Ko`za sho`rva', 4, 23000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Osh', 5, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Norin', 5, 30000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Ko`za sho`rva', 5, 23000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Tandir somsa', 6, 11000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Qozon kabob', 6, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lag`mon', 6, 25000);


INSERT INTO foods(food_name, branch_id, food_price)VALUES('Beshteks', 7, 26000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Bistrogin', 7, 17000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Palov',7, 18000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Osh', 8, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Shashlik', 8, 19000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Mastava', 8, 15000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Shashlik', 9, 19000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Go`ja', 9, 10000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Dimlama', 9, 22000);

--fastfoodlar

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lavash', 10, 24000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Gamburger', 10, 15000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Toster', 10, 25000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Hot dog', 11, 17000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Cola', 11, 15000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lyubov set',11, 40000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lavash', 12, 24000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Burger', 12, 18000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lunch box', 12, 35000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Pepsi', 13, 16000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Gamburger', 13, 15000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Longter', 13, 10000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lunch box', 14, 35000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Lavash', 14, 24000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Free', 14, 10000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Sanders basket', 15, 34000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Hotdog', 15, 17000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Free', 15, 10000);


INSERT INTO foods(food_name, branch_id, food_price)VALUES('Sendvich', 16, 40000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Pitsa', 16, 50000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Hotdog', 16, 17000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Sendvich', 17, 40000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Cola', 17, 15000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Hotdog', 17, 17000);

INSERT INTO foods(food_name, branch_id, food_price)VALUES('Pepsi', 18, 16000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Pitsa', 18, 50000);
INSERT INTO foods(food_name, branch_id, food_price)VALUES('Hotdog', 18, 18000);




--order
INSERT INTO orders(order_user, order_location,order_phone, order_food, order_price, order_food_count)VALUES('Omina', 'Sergeli', 933264587, 'Shorva', 12000, 2);


