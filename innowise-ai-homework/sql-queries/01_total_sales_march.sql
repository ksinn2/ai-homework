-- Calculate the total sales volume for March 2024
SELECT 
    SUM(amount) AS total_sales_march_2024
FROM 
    orders
WHERE 
    order_date >= '2024-03-01' AND order_date <= '2024-03-31';

-- Alternative query using STRFTIME to extract month and year
/*
SELECT 
    SUM(amount) AS total_sales_march_2024
FROM 
    orders
WHERE 
    STRFTIME('%Y-%m', order_date) = '2024-03';
*/ 