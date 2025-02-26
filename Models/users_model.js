const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const AGENT_TYPES = {
    1: 'plumber',
    2: 'electrician',
    3: 'mechanic',
    4: 'carpenter',
    5: 'security'
};

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'agent', 'manager', 'admin'],
        default: 'User'
    },
    phone: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_available: {
        type: Boolean,
        default: true
    },
    agent_type: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 1
    },
    profile_pic: {
        type: String
    },
    address: {
        type: String
    },
    agent_details: {
        skills: [{ type: Number, ref: 'AgentType' }],
        rating: { type: Number, default: 5 }, 
        total_tickets_completed: { type: Number, default: 0 }, 
        response_time_avg: { type: Number, default: 0 }, 
        location: {
            city: String,
            zip: String,
            coordinates: { type: [Number], index: '2dsphere' }
        }
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;