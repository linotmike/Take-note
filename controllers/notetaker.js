const router = require("express").Router()
const fs = require('fs');
const uuid = require('uuid')


router.get('/', (req,res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) =>{
        if(err){
            res.status(500).json({msg:"whoops error loading db"})
        } else{
            const dataArr = JSON.parse(data)
            return res.json(dataArr)
        }
    })
})
router.post('/', (req,res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) =>{
        if(err){
            res.status(500).json({msg:"whoops error loading db"})
        } else{
            const dataArr = JSON.parse(data)
            const newNote = {
                title : req.title,
                id: uuid.v4(),
                text: req.text

            }
            console.log(newNote);
            data.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(dataArr, null ,4),(err)=>{
                if(err){
                    res.status(500).json({msg:"whoops error loading db"})
                } else
                return res.json(newNote);

            })
        }
    })
})
module.exports = router