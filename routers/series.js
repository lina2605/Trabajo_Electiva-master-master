const express = require('express');
const controller = require('../controllers/series');
const router = express.Router();

router.post('/',controller.createSerie);
router.get('/',controller.indexSerie); //series
router.get('/:key:value',controller.findSerie,controller.showSerie); //series/director/Pepito 
router.put('/:key:value',controller.findSerie,controller.updateSerie); //series/genero/Comedia
router.delete('/:key:value',controller.findSerie,controller.deleteSerie); //series/genero/Terror

module.exports = router;