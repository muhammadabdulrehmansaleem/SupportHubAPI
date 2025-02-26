const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const ticketSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true
    },
    agent_type : {
        type: Number,
        required: true
    },
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: false
    },
    user_id: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    assignee_id: { 
        type: ObjectId, 
        ref: 'User',
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    attachments: [String],
    agent_id: {
        type: ObjectId,
        ref: 'User'
    },
    location: {
        city: String,
        zip: String,
        coordinates: { type: [Number], index: '2dsphere' },
        required: true
    }

}, {
    timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;