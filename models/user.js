import React from 'react'
import { Schema, model, models } from 'mongoose'

const Userschema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    image: {
        type: String,
    }
});

const User = models.user || model("user", Userschema);

export default User;