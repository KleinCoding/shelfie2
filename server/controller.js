function getProducts(req, res) {
  const db = req.app.get("db");

  db.get_products().then(response => {
    res.status(200).json(response).catch(console.log("Error in Get Products!"));
  });
}

function getProduct(req, res) {
  const db = req.app.get("db");
  const id = +req.params.id;

  db.get_product(id).then(response => {
    res.status(200).json(response);
  });
}

function addProduct(req, res) {
  const db = req.app.get("db");
  const { product_name, product_desc, product_price, product_image } = req.body;

  db.add_product(product_name, product_desc, product_price, product_image).then(
    response => {
      res.status(200).json(response).catch(console.log("Error in add Product!"));
    }
  );
}

function updateProduct(req, res) {
  const db = req.app.get("db");
  const id = +req.params.id;
  const { product_name, product_desc, product_price, product_image} = req.body;

  db.update_product(
      id,
    product_name,
    product_desc,
    product_price,
    product_image,
    
  ).then(response => {
    res.status(200).json(response).catch(console.log("Error in update Product!"));
  });
}

function deleteProduct(req, res) {
  const db = req.app.get("db");
  const id = +req.params.id;

  db.delete_product(id).then(() => {
    res.sendStatus(200).catch(console.log("Error in Delete Product!"));
  });
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};
