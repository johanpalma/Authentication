const { Router } = require('express');
const router = Router();

var md_auth = require('../middleware/authenticated');
const { deleteShipment, getShipments, getShipmentById,
        saveShipment, updateShipment, getShipment } = require('../controllers/shipment.controller');

router.post('/create_shipment',md_auth.auth , saveShipment);
router.get('/get_shipments', getShipments);
router.get('/get_shipments/q', getShipment);
router.get('/get_shipment/:id', getShipmentById);
router.put('/update_shipment/:id',md_auth.auth , updateShipment);
router.delete('/delete_shipment/:id',md_auth.auth , deleteShipment);

module.exports = router;