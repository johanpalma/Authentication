const {  Router } = require('express');
const router = Router();

var md_auth = require('../middleware/authenticated');
const { saveCarrier, getCarriers, getCarrierById,
        deleteCarrier, updateCarrier, getCarrier } = require('../controllers/carrier.controller');

router.post('/create_carrier',md_auth.auth , saveCarrier);
router.get('/get_carriers', getCarriers);
router.get('/get_carriers/q', getCarrier);
router.get('/get_carrier/:id', getCarrierById);
router.delete('/delete_carrier/:id',md_auth.auth , deleteCarrier);
router.put('/update_carrier/:id',md_auth.auth , updateCarrier);

module.exports = router;