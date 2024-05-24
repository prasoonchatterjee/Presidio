const express = require('express');
const requireAuth = require('../middlewares/requireAuth');
const {getAllRentals,createSingleRental,getSingleRental,deleteSingleRental,updateSingleRental} = require('../controllers/rental');
const router = express.Router();

router.get('/',getAllRentals);
// router.use(requireAuth);
router.post('/',createSingleRental);
router.get('/:id', getSingleRental);
// router.delete('/:id',deleteSingleRental);
// router.put('/:id',updateSingleRental);

module.exports = router;