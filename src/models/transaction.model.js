const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({

    fromAccount: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required:[true, 'Transaction must be associated with a from account'],
        index: true
    },
    toAccount: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required:[true, 'Transaction must be associated with a to account'],
        index: true
    },
    status: {
        type: String,
        enum: {
            values: ['PENDING', 'COMPLETED', 'FAILED', 'REVERSED']
        },
        default: 'PENDING'
    },
    ammount: {
        type: Number,
        required: [true, 'ammount is required'],
        min: [0, 'Tranction ammount cannot be negative']
    },
    idempotencyKey: {
        type:String,
        required: [true, 'i key required'],
        index: true,
        unique: true
    }

}, { timestamps: true });

const transactionModel = mongoose.model('transaction', transactionSchema);

module.exports = transactionModel;