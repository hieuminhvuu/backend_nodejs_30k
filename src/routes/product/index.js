const express = require("express");
const productController = require("../../controllers/product.controller");
const { asyncHandler } = require("../../auth/checkAuth");
const { authenticationV2 } = require("../../auth/authUtils");
const router = express.Router();

// search product by user
router.get(
    "/search/:keySearch",
    asyncHandler(productController.getListSearchProduct)
);

// authentication
router.use(authenticationV2);

// create new
router.post("", asyncHandler(productController.createProduct));
router.put(
    "/publish/:id",
    asyncHandler(productController.publishProductByShop)
);
router.put(
    "/unpublish/:id",
    asyncHandler(productController.unPublishProductByShop)
);

// query
router.get("/draft/all", asyncHandler(productController.findAllDraftsForShop));
router.get(
    "/publish/all",
    asyncHandler(productController.findAllPublishForShop)
);

module.exports = router;
