const router = require("express").Router();
const productsController = require("../../controllers/productsController");

console.log("inside routes file")
// Matches with "/api/products"
router
  .route("/")
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);

// Matches with "/api/products/category"
router
  .route("/category")
  .get(productsController.findByClass)


module.exports = router;
