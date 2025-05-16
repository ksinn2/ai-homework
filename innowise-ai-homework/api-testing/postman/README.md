# Using Postman for API Testing

This directory contains Postman collections for testing the Fake Store API.

## Requirements

- [Postman](https://www.postman.com/downloads/) (Desktop app or web version)

## Setup

1. Open Postman
2. Import the collection file:
   - Click "Import" in Postman
   - Select the `FakeStoreAPI.postman_collection.json` file
   - Click "Import"
3. Import the environment file:
   - Click "Import" in Postman
   - Select the `FakeStoreAPI.postman_environment.json` file
   - Click "Import"
   - Select the environment from the environment dropdown menu

## Running Tests

### Running All Tests

1. In Postman, locate the imported "Fake Store API Tests" collection in the Collections sidebar
2. Click the "..." (three dots) next to the collection name
3. Select "Run collection"
4. In the Collection Runner, click "Run"
5. View the test results

### Running Individual Tests

1. In Postman, locate the imported "Fake Store API Tests" collection in the Collections sidebar
2. Click on the collection to expand it
3. Click on a specific request (e.g., "Get All Products")
4. Click the "Send" button
5. View the test results in the "Test Results" tab of the response section
6. Check the Postman console for detailed defect reports (View > Show Postman Console)

## Test Types

The collection contains three types of tests:

1. **Get All Products** - Tests the endpoint that returns all products
2. **Get Single Product** - Tests the endpoint that returns a specific product
3. **Test Mock Data** - Uses mock data with deliberate defects to demonstrate validation

## Mock Data Testing

The "Test Mock Data" request uses built-in mock data with intentional defects to demonstrate how the validation logic detects problems:

- Product ID 2: Empty title
- Product ID 3: Negative price
- Product ID 4: Rating exceeds 5
- Product ID 5: Missing rating.rate value

This test doesn't interact with the actual API - it uses Postman's pre-request script functionality to create mock data with known defects.

## Test Details

The Postman tests validate:

1. Response status code (expected 200)
2. Products data format (array structure)
3. Required attributes for each product:
   - Non-empty `title`
   - Non-negative `price`
   - `rating.rate` that does not exceed 5

## Viewing Defect Reports

When defects are found:

1. Open the Postman Console (View > Show Postman Console)
2. The console will display:
   - List of products with defects
   - Summary of defect types
   - Count of each type of defect
   - Product IDs with each defect type

For the "Get All Products" test, defects are also stored in a Postman environment variable called `productsWithDefects`, which can be accessed in subsequent requests. 