-- Calculate the average order value for all orders
SELECT 
    AVG(amount) AS average_order_value
FROM 
    orders;

-- Calculate the average order value for the last three months
-- Assuming the current date is 2024-03-31
SELECT 
    AVG(amount) AS average_order_value_last_three_months
FROM 
    orders
WHERE 
    order_date >= '2024-01-01' AND order_date <= '2024-03-31';

-- Dynamic version using date functions (for SQLite)
/*
SELECT 
    AVG(amount) AS average_order_value_last_three_months
FROM 
    orders
WHERE 
    order_date >= date('now', '-3 months') AND order_date <= date('now');
*/ 