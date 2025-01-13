const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let DadosdeCelulares = [];

app.post('/DadosdeCelulares', (req, res) => {
    const { modelo, ano, gigas, desbloqueio, cor, valor, tamanho } = req.body;

    if (!modelo || !ano || !gigas || !cor || !valor || !tamanho) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    const novoCelular = {
        id: DadosdeCelulares.length + 1,
        modelo,
        ano,
        gigas,
        desbloqueio,
        cor,
        valor,
        tamanho,
    };

    DadosdeCelulares.push(novoCelular);
    res.status(201).json(novoCelular);
});

app.get('/DadosdeCelulares', (req, res) => {
    res.status(200).json(DadosdeCelulares);
});

app.get('/DadosdeCelulares/:id', (req, res) => {
    const { id } = req.params;
    const celular = DadosdeCelulares.find(u => u.id === parseInt(id));

    if (!celular) {
        return res.status(404).json({ erro: 'Celular não encontrado' });
    }

    res.status(200).json(celular);
});

app.put('/DadosdeCelulares/:id', (req, res) => {
    const { id } = req.params;
    const { modelo, ano, gigas, desbloqueio, cor, valor, tamanho } = req.body;

    const celular = DadosdeCelulares.find(u => u.id === parseInt(id));

    if (!celular) {
        return res.status(404).json({ erro: 'Celular não encontrado' });
    }

   
    celular.modelo = modelo || celular.modelo;
    celular.ano = ano || celular.ano;
    celular.gigas = gigas || celular.gigas;
    celular.desbloqueio = desbloqueio || celular.desbloqueio;
    celular.cor = cor || celular.cor;
    celular.valor = valor || celular.valor;
    celular.tamanho = tamanho || celular.tamanho;

    res.status(200).json(celular);
});


app.delete('/DadosdeCelulares/:id', (req, res) => {
    const { id } = req.params;
    const index = DadosdeCelulares.findIndex(u => u.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ erro: 'Celular não encontrado' });
    }

    DadosdeCelulares.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
