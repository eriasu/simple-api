const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/people', async (request, response) => {
    try {
        response.status(200).send("[{'testing':'api'}]");
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get('/people/:nationalId', async (request, response) => {
    try {
        const { nationalId } = request.params;
        response.status(200).send(nationalId);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post('/people', async (request, response) => {
    try {
        const people = request.body;
        response.status(201).send(people);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put('/people/:nationalId', async (request, response) => {
    try {
        const { nationalId } = request.params;
        response.status(200).send(nationalId);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete('/people/:nationalId', async (request, response) => {
    try {
        const { nationalId } = request.params;
        response.status(200).send(nationalId);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.use((error, request, response, next) => {
    const errorCode = error.errors ? 400 : 401;
    response.status(errorCode).send({ message: error.message });
    next();
});

exports.routes = app;
