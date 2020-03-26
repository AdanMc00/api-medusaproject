
const express = require('express')
const Product = require('../usesCases/products')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/', async (req, res) => {
  try {
    const product = await Product.getAll()
    console.log(product)
    res.status(200)
    res.json({
      success: true,
      message: 'all products',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(400),
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/',async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(200)
    res.json({
      success: true,
      message: 'product create',
      data: {
        product: newProduct
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const productfound = await Product.getById(id)
    res.json({
      success: true,
      message: 'products by Id',
      data: {
        product: productfound
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.get("/code/:code", async (req, res) => {
  try {
    const code = req.params.code;
    const codefound = await Product.getByCode(code);
    res.json({
      success: true,
      message: "products by code",
      data: {
        code: codefound
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

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const productDel = await Product.deletebyId(id)
    res.json({
      success: true,
      message: 'product Delete',
      data: {
        product: productDel
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const upDateproduct = await Product.updateById(id, info)

    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        product: upDateproduct
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

module.exports = router