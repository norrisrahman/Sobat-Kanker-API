var mongoose = require('mongoose');

var ListObatSchema = mongoose.Schema({
    informasi_umum: {
        nama: {type: String, required: true},
        kegunaan: {type: String, required: true},
        jenis: {type: String, required: true},
    },
    keterangan_konsumsi: {
        takaran: {type: String, required: true},
        interval: {type: String, required: true}, //Seberapa sering obat diminum
        intruksi: {type: String, required: true},
        efek_samping: {type: String},
        intruksi_tambahan: {type: String},
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ListObat', ListObatSchema);
