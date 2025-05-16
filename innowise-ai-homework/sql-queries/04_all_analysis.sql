-- Comprehensive analysis of the orders data

-- 1. Calculate the total sales volume for March 2024
SELECT 
    SUM(amount) AS total_sales_march_2024
FROM 
    orders
WHERE 
    order_date >= '2024-03-01' AND order_date <= '2024-03-31';

-- 2. Find the customer who spent the most overall
SELECT 
    customer,
    SUM(amount) AS total_spent
FROM 
    orders
GROUP BY 
    customer
ORDER BY 
    total_spent DESC
LIMIT 1;

-- 3. Calculate the average order value
SELECT 
    AVG(amount) AS average_order_value
FROM 
    orders;
