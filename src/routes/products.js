
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
    const newProduct = await product.create(req.body)
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
    const productfound = await product.getById(id)
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

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const productDel = await product.deletebyId(id)
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
    const upDateproduct = await product.updateById(id, info)

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