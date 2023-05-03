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
            const noteArr = JSON.parse(data)
            const newPost = {
                title : req.body.title,
                text: req.body.text,
                id: uuid.v4()

            }
            
            //console.log(dataArr);
            noteArr.push(newPost);
            fs.writeFile('./db/db.json', JSON.stringify(noteArr, null ,4),(err)=>{
                if(err){
                    res.status(500).json({msg:"whoops error loading db"})
                } else
                return res.json(newPost);

            })
        }
    })
})
module.exports = router