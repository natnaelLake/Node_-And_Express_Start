
const express = require('express');
const Router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');


Router.get('/', (req, res) => {
    res.json(members);
})
Router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        const updateMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updateMember.name? updateMember.name: member.name;
                member.email = updateMember.name? updateMember.email:member.email;
                res.json({msg:'Member Updated',member})
            
            }
        })
    }
    else {
        res.status(400).json({message: `No member with the id of ${req.params.id}`})
    }
})

Router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json({msg:'member is deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    }
    else {
        res.status(400).json({message: `No member with the id of ${req.params.id}`})
    }
})


//Insert a new member.
Router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status : 'active'
    }
    if (!newMember.name || !newMember.email) {
      return  res.status(400).json({msg: "please insert the name and email"})
    }
    members.push(newMember);
    res.json(members)
})

//Update the exited member.



Router.use((err, req, res, next)=>{
    console.error(err);
    next(err)
})


module.exports = Router;