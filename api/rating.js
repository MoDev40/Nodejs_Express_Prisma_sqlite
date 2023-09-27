import express from 'express'
import prisma from './lib/index.js'
const router = express.Router()
// get all
router.get('/',async(req,res)=>{
    try{
        const ratings = await prisma.rating.findMany()
        if(ratings.length === 0){
            res.json({massege:"empty rating"})
        }
        res.json(ratings)
    }catch(error){
        res.json({error})
    }
})

// get by id
router.get('/:id',async (req,res)=>{
    const {id} = req.params
    try{

        const rating = await prisma.rating.findUnique({
            where:{
                id:Number(id),
            },
        })
        if(!rating){
            return res.status(404).json({message:"Rating Not found"})
        }
        res.json(rating)

    }catch(error){
        console.log({error});
        res.send({error})
    }
})

// post
router.post('/',async(req,res)=>{
    const {rate,comment,restId} =  req.body
    try{
        const rating = await prisma.rating.create({
            data:{
                rate,
               restId,
               comment,
            }
        })
        if(!rating){
          return res.json({massage:"Rating Not created"})
        }
        res.json(rating)
    }catch (error){
        res.json({error})
    }
})

// update
router.put('/:id',async(req,res)=>{
    const {rate,comment} =  req.body
    const {id} = req.params

    try{
        const rating = await prisma.rating.update({
            where:{
                id:Number(id)
            },
            data:{
                rate,
                comment,
            }
        })
        if(!rating){
          return res.json({massage:"Rating Not Updated"})
        }
        res.json(rating)
    }catch (error){
        res.json({error})
    }
})

// delete
router.delete('/:id',async(req,res)=>{
    const {id} =  req.params
    try{
        const rating = await prisma.rating.delete({
            where:{
                id:Number(id)
            }
        })
        if(!rating){
          return res.json({massage:"Rating Not deleted"})
        }
        res.json(rating)
    }catch (error){
        res.json({error})
    }
})

export default router