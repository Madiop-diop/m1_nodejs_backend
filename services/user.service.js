 const db = require("../models");

const User = db.User;

const create = async (req,res) =>{
    try {
        if (req.body.username && req.body.password) {
            const {username,password} = req.body;
            User.create({
                username,
                password
            });
            res.json(await req.body);
        } else {
            res.json({'message':'not added to the database'});
        }
    } catch (error) {
        res.status(500).json({ "message": "error creating user" });
        console.log(error);
    }
};
const getAll = async (req,res) => {
    try {
        res.json(await User.findAll());
    } catch (error) {
        res.status(500).json({"message":"Error when retrieving all users"});
        console.log(error);
    }
};
const updateUser = async (req, res) =>{
    try {
        const id = req.params.id;
        const userFound = await User.findByPk(id);
        if (userFound) {
            await userFound.update(req.body);
            res.json({"message":"user upadated successfully"});
        }
    } catch (error) {
        res.status(500).json({"message":"error of upadating user"});
        console.log(error);
    }

};
const getById = async (req, res) =>{
    try {
        const id = req.params.id;
        const userFound = await User.findByPk(id);
        if (userFound) {
            res.json(userFound);
        }
        else{
            res.status(404).json({"message":"user not found"});
        }
    } catch (error) {
        res.status(500).json({"message":"error of selected user"});
        console.log(error);
    }

};
module.exports = {
    create,
    getAll,
    updateUser,
    getById
} 