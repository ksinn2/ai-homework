-- Find the customer who spent the most overall
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

-- Alternative query showing all customers and their total spending
/*
SELECT 
    customer,
    SUM(amount) AS total_spent
FROM 
    orders
GROUP BY 
    customer
ORDER BY 
    total_spent DESC;
*/ 