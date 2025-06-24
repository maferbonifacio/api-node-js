const express = require('express'); 
const router = express.Router(); 

const RotasMafer = require('../routes-mafer'); 

router.use('/', RotasMafer);

module.exports = router;