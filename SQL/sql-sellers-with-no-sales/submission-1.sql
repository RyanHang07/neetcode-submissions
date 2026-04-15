-- Write your query below

SELECT s.seller_name from seller s
LEFT JOIN orders o ON s.seller_id = o.seller_id
AND o.sale_date BETWEEN '2020-01-01' AND '2020-12-31'
WHERE order_id is NULL
ORDER BY s.seller_name