const mongoose = require('mongoose');
const {Schema} = mongoose;

const seriesSchema = new Schema({

	id:{
		type: Number,
		unique: true
	},
	titulo:{
        type: String
        //required:true
    },
    director:{ 
		type: String
		//required:true
    },
    capitulos:{
		type: Number
		//required:true
	},
	actores:{  // objeto actores
		nombre: String,  
		apellidos: String,
		edad: Number,
        ciudad: String,
        //required: true
    },
    genero:{
		type: String,
		enum: ['Drama','Fantasia','Ciencia Ficcion','Comedia','Accion','Terror','Suspenso']
		//required:true 
	},
	calificacion_usuario:{
		type: String
		//required:true
	},
	resumen:{
		type: String
		//required:true
    },
    temporadas:{ // objeto temporadas
        numeroTemporadas: Number,
        capitulos: Number,
        //required: true
	}
 });
 
module.exports = mongoose.model('series', seriesSchema);