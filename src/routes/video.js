const express = require('express');
const router = express.Router();
const videoController= require('../app/controllers/VideoController');





router.get('/create',videoController.create)

router.get('/:slug',videoController.show);
module.exports=router;