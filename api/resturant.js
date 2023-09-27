import express from 'express'
import prisma from './lib/index.js'

const router = express.Router()
// get all
router.get('/',async(req,res)=>{
    try{

        const resturents = await prisma.restrurents.findMany()
        if(resturents.length === 0){
            return res.json({message:"Empty Restuents"})
        }
        return res.json(resturents)

    }catch(error){
        console.log({error});
        res.send({error})
    }
})

// get by id
router.get('/:id',async (req,res)=>{
    const {id} = req.params
    try{

        const resturent = await prisma.restrurents.findUnique({
            where:{
                id:Number(id)
            }
        })
        if(!resturent){
            return res.status(404).json({message:"Resturent Not found"})
        }
        res.json(resturent)

    }catch(error){
        console.log({error});
        res.send({error})
    }
})

// post
router.post('/',async(req,res)=>{
    const {name,location,ownerId} =  req.body
    try{
        const resturant = await prisma.restrurents.create({
            data:{
                name,
                location,
                ownerId
            }
        })
        if(!resturant){
          return res.json({massage:"Resturent Not created"})
        }
        res.json(resturant)
    }catch (error){
        res.json({error})
    }
})

// update
router.put('/:id',async(req,res)=>{
    const {name,location,ownerId} =  req.body
    const {id} = req.params

    try{
        const resturant = await prisma.restrurents.update({
            where:{
                id:Number(id)
            },
            data:{
                name,
                location,
                ownerId
            }
        })
        if(!resturant){
          return res.json({massage:"Resturent Not Updated"})
        }
        res.json(resturant)
    }catch (error){
        res.json({error})
    }
})

// delete
router.delete('/:id',async(req,res)=>{
    const {id} =  req.params
    try{
        const resturant = await prisma.restrurents.delete({
            where:{
                id:Number(id)
            }
        })
        if(!resturant){
          return res.json({massage:"Resturent Not deleted"})
        }
        res.json(resturant)
    }catch (error){
        res.json({error})
    }
})

export default router