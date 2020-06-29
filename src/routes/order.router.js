const { Router } = require('express');
const router = Router();

var md_auth = require('../middleware/authenticated');
const { deleteOrder, getOrderById, getOrders,
        saveOrder, updateOrder, getOrder } = require('../controllers/order.controller');

router.post('/create_order',md_auth.auth , saveOrder);
router.get('/get_orders', getOrders);
router.get('/get_orders/q', getOrder);
router.get('/get_order/:id', getOrderById);
router.put('/update_order/:id',md_auth.auth , updateOrder);
router.delete('/delete_order/:id',md_auth.auth , deleteOrder);

module.exports = router;