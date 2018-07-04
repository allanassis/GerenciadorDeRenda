let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DiariaSchema = new Schema({

    valorDiaria : Number,
    horasDiaria : Number,
    data : {
        type : Date,
        default : (new Date).toLocaleDateString()
    },
    horarioInicio: Date,
    horarioFim: Date
})

let Diaria = mongoose.model('Diaria',DiariaSchema);

module.exports = Diaria;