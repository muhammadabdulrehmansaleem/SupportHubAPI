const express = require("express");
const mongoess = require("mongoose");
const Ticket = require("../Models/tickets_model");
const User = require("../Models/users_model");

const createTicket = async (title, description, agent_type, user_id,files=null) => { 
    try {
        const ticket = new Ticket({
            title: title,
            description: description,
            agent_type: agent_type,
            user_id: user_id,
        });
        if(files){
            uploadFiles(files);
            ticket.attachments = files;
        }
        const result = await ticket.save();
        return result;
    }catch(error) {
        throw new Error(error.message);
    }

}

const getUserTickets = async (user_id) => { 
    try {
        const tickets = await Ticket.find({
            user_id: user_id,
            is_active: true
        });
        return tickets;
    }catch(error) {
        throw new Error(error.message);
    }
}

const deleteTicket = async (ticket_id) => { 
    try {
        const ticket = await Ticket.findOneAndUpdate({ _id: ticket_id }, { is_active: false });
        return ticket;  
    }
    catch(error) {
        throw new Error(error.message);
    }
}


const uploadFiles = async (files) => {
    try {
        
    }catch(error) {
        throw new Error(error.message);
    }
}




module.exports = {
    createTicket,
    getUserTickets,
    deleteTicket,
};