const express = require('express');
const router = express.Router();
const listDSController= require('../app/controllers/ListDSController');

router.get('/list/delete',listDSController.delete)
router.post('/list',listDSController.list)


module.exports=router;