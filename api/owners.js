import express from 'express'
import prisma from './lib/index.js'

const router = express.Router()
// get all
router.get('/',async(req,res)=>{
    try{
        const ownsers = await prisma.ownner.findMany()
        if(ownsers.length === 0){
            return res.json({massege:"empty ownwr's"})
        }
        res.json(ownsers)
    }catch(error){
        console.log(error);
    }
})

// get by id
router.get('/:id',async(req,res)=>{
    const {id} = req.params
    try{
        const ownser = await prisma.ownner.findUnique({
            where:{
                id:Number(id)
            }
        })
        if(!ownser){
            return res.status(404).json({massege:"owner not Found "})
        }
        return res.json(ownser)
    }catch(error){
        console.log(error);
    }
})

// post
router.post('/',async(req,res)=>{
    const {name,email} = req.body
    try{
        const ownser = await prisma.ownner.create({
            data:{
                name,
                email
            }
        })
        if(!ownser){
            return res.json({massege:"owner not created "})
        }
        res.json(ownser)

    }catch(error){
        console.log(error);
    }
})

// update
router.put('/:id',async(req,res)=>{
    const {name,email} = req.body
    const {id} = req.params
    try{
        const ownser = await prisma.ownner.update({
            where:{
                id:Number(id)
            },
            data:{
                name,
                email
            }
        })
        if(!ownser){
            return res.json({massege:"owner not updated "})
        }
        res.json(ownser)

    }catch(error){
        console.log(error);
    }
})

// dellete
router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    try{
        const ownser = await prisma.ownner.delete({
            where:{
                id:Number(id)
            }
        })
        if(!ownser){
            return res.status(404).json({massege:"owner not deleted "})
        }
        res.json(ownser)

    }catch(error){
        console.log(error);
    }
})

export default router