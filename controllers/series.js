const Serie = require('../models/series.js');


function createSerie(req,res){
    const newSerie = new Serie(req.body);
    newSerie.save((err,result)=>{
    if (err){
        return res.send({error: err.toString()});
    }
        return res.send(result);
    })
}

function indexSerie(req,res){
    Serie.find((err,result)=>{
        if(result.length){
            return res.send(result);
        }
        return res.send({error: err.toString()});
    })
}

function findSerie(req,res,next){
    var query ={};
    query[req.params.key] = req.params.value;
    Serie.find({query},(series)=>{
        if(!series.length){
            return next();
        }
        req.body.series = series;
        return next();
    }).catch(err =>{
        req.body.error = err;
        netx();
    })       
}

function updateSerie(req,res){

}

function showSerie(req,res){
    if(req.body.error){
        return res.send({error});
    }
    if(req.body.series){
        return res.send({series})
    }
    return res.send({message: "No se encontro"});
}

/*function showSerie(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.series) return res.status(404).send({message: "No encontrado"});
    let series = req.body.series;
    return res.status(200).send({series});

}*/


function deleteSerie(req,res){

}
function deleteSerie(req,res){

}


module.exports.createSerie = createSerie;
module.exports.indexSerie = indexSerie;
module.exports.deleteSerie = deleteSerie;
module.exports.updateSerie = updateSerie;
module.exports.showSerie = showSerie;
module.exports.findSerie = findSerie;


