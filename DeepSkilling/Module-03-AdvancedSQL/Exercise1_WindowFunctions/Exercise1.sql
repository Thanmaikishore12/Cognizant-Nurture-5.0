-- ============================================
-- Exercise 1: Ranking and Window Functions
-- Goal: Find the top 3 most expensive products
-- in each category using ranking functions.
-- ============================================

-- Using ROW_NUMBER()
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Row_Num
FROM Products;

-- Using RANK()
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Rank_Num
FROM Products;

-- Using DENSE_RANK()
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Dense_Rank_Num
FROM Products;

-- Top 3 most expensive products in each category
SELECT *
FROM
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS Row_Num
    FROM Products
) AS RankedProducts
WHERE Row_Num <= 3;