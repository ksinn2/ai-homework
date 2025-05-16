# SQL Queries for Sales Analysis

This folder contains SQL queries to analyze sales data from the `orders` table in SQLite.

## Database Schema

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);
```

## Sample Data

The table contains the following sample data:

```sql
INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');
```

## Available Queries

1. **[01_total_sales_march.sql](./01_total_sales_march.sql)**: Calculates the total sales volume for March 2024.
   - Expected result: 27,000

2. **[02_top_spending_customer.sql](./02_top_spending_customer.sql)**: Finds the customer who spent the most overall.
   - Expected result: Alice (20,000)

3. **[03_average_order_value.sql](./03_average_order_value.sql)**: Calculates the average order value.
   - Expected result: 6,000

4. **[04_all_analysis.sql](./04_all_analysis.sql)**: Combines all analyses above plus additional insights.

5. **[05_data_setup.sql](./05_data_setup.sql)**: Database setup script to create the table and insert sample data.

## How to Run

These queries can be executed in any SQLite environment, such as:

- SQLite command-line tool
- SQLite Browser
- Online SQLite environments like [SQLite Online](https://sqliteonline.com/)

### Steps:

1. Run the setup script: `05_data_setup.sql` (or create the table manually using the schema above)
2. If you used the setup script, the sample data is already inserted
3. Run the individual SQL queries (01-04)
4. Compare with the expected results

## Results Summary

| Query | Description | Expected Result |
|-------|-------------|----------------|
| 01    | Total sales for March 2024 | 27,000 |
| 02    | Top-spending customer | Alice (20,000) |
| 03    | Average order value | 6,000 |

## Additional Notes

- All dates in the queries are formatted as 'YYYY-MM-DD'
- The STRFTIME function is used in some queries to format dates
- Alternative query variations are provided as comments in some files 