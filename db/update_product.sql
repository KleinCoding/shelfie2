UPDATE products
SET product_name = $2,
    product_desc= $3,
    product_price = $4,
    product_image = $5
WHERE
    product_id = $1;

SELECT * FROM products;