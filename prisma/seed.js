import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
// using initialization or started data or test data
const seed = async ()=>{
    try{

        await prisma.ownner.create({
            data:{
                name:"Daadir Axmed",
                email:"daadir@gmail.com"
            }
        })

        await prisma.restrurents.create({
            data:{
                name:"Baar-Xiin",
                location:"Jiiro France Macmacaanka",
                ownerId: 1
            }
        })
        await prisma.rating.create({
            data:{
                rate:8.5,
                restId:1,
                comment:"Maqaayadii ugu fiicneed abid"
            }
        })
    }catch(error){
        console.log(error);
        process.exit(1)
    }finally{
        await prisma.$disconnect()
    }
}

seed()