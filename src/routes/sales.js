const express = require("express");
const Sales = require("../usesCases/sales");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", async (req, res) => {
  try {
    const sale = await Sales.getAll();
    console.log(sale);
    res.status(200);
    res.json({
      success: true,
      message: "all sales",
      data: {
        sale
      }
    });
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const salefound = await Sales.getById(id);
    res.json({
      success: true,
      message: "sale by Id",
      data: {
        sale: salefound
      }
    });
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      });
  }
});

router.post("/", async (req, res) => {
  try {
    const newSale = await Sales.create(req.body);
    res.status(200);
    res.json({
      success: true,
      message: "product create",
      data: {
        sale: newSale
      }
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message
    });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productDel = await product.deletebyId(id);
    res.json({
      success: true,
      message: "product Delete",
      data: {
        product: productDel
      }
    });
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      });
  }
});


module.exports = router;
