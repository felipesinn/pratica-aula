import express, { response } from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());


const repository = new PrismaClient()

app.get('/students', async (req, res) => {
    try{
        const students = await repository.student.findMany()

        return response.status(200).json({
            sucess: true,
            code: response.statusCode,
            message:'Alunos Listado com sucesso.',
            date: students
            
        })
    } catch (error) {
        return response.status(500).json({
            sucess: false,
            code: response.statusCode,
            message:'error ao Listar alunos',
          
        })
    }
})



app.listen(3333, () => {
    console.log("Server running on port 3333.");
});