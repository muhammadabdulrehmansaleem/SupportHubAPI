const express = require("express");

const login = async (email, password) => {
    try {
        return {
            email: email,
            password: password,
        };
        //throw new Error('Invalid credentials');
    }catch(error) {
        throw new Error(error.message);
    }
}

const signup = async (email, password) => { 
    try {
        return {
            email: user.email,
            name: user.name,
        };
        //throw new Error('Invalid credentials');
    }catch(error) {
        throw new Error(error.message);
    }
}

module.exports = {
    login,
    signup
}