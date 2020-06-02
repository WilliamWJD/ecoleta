import express from 'express'
import routes from './routes'
import { resolve } from 'path'

const app = express()

app.use(express.json())
app.use(routes)

//ROTA PARA ACESSO DE ARQUIVOS ESTÁTICOS
app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))

app.listen(3333, ()=>{
    console.log('Servidor Online')
})