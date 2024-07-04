const conexao = require('../database/db')
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')


const port = 3000

const app = express()

conexao.connect((err) => {
    if(err) {
        throw err
    }
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())


app.get('/', (req, res) => {
    res.send('Full cycle Rocks !')
})

app.get('/listar', (req, res) => {

    conexao.query('SELECT * FROM tb_people', (err, results) => {
        if(err) {
            throw err
        }

        res.send(results.map((item) => ({ nome: item.nome })))
    })

})

app.post('/', (req, res) => {
    const { nome } = req.body

    try {
        if(nome) {
            conexao.query(`insert into tb_people (nome) values (?)`, nome, (err) => {
                if(err) throw new Error('Ocorreu um erro ao realizar a operação.')
            })
        }
    
        res.status(201).json({
            Mensagem: 'Nome incluído com sucesso.'
        })
    } catch (error) {
        res.status(500).json({
            Mensagem: 'Ocorreu um erro na aplicacao.'
        })
    }
})

app.listen(port, () => {
    console.log(`Server has been started on Port: ${port}`)
})