const productController = require('../controllers/productController.js')


const router = require('express').Router()

router.post('/add-products', productController.addProduct)
router.get('/get-products', productController.getAllProducst)
router.get('/get-product/:id', productController.getOneProduct)
router.put('/update-product/:id', productController.updateProduct)
router.delete('/delete-product/:id', productController.deleteProduct)
router.get('/get-published-product', productController.publishedProducts)


module.exports = router