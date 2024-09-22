import { Schema, model, connect, connection } from 'mongoose';
import { UsersInterface } from './types';
//const mongoose = require ('mongoose')
//import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/Prueba_1'
async function run() {
    await connect(connectionString)
    .then(()=>{
        console.log('Database connected!!')
    }) .catch((err)=>{
        console.error(err)
    });

}
run();

const usersSchema = new Schema<UsersInterface>({
    id: Number,
    name: String,
    mail: String,
    password: String,
    comment: String
})

const users = model<UsersInterface>('user',usersSchema)

/*const user1 = new users({
    id: 6,
    name: 'Gerard',
    mail: 'Derivia',
    password: 'Ignis',
    comment: 'No le caen bien los caballeros'
})
user1.save().then((result)=>{
    console.log(result)
    }) .catch((err)=>{
    console.error(err)
    });*/

users.find({}).then((result)=> {
    console.log(result)
    connection.close()
})