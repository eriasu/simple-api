const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
const {
    validateParams, validateNationalId, validateBody, validatePeople, validateHeaders, validateJsonHeader,
} = require('../validations/validations');
const { getOneController } = require('../repository/people/getOne/getOne.controller');
const { getAllController } = require('../repository/people/getAll/getAllcontroller');
const { createOneController } = require('../repository/people/createOne/createOne.controller');
const { destroyOneController } = require('../repository/people/deleteOne/deleteOne.controller');
const { updateOneController } = require('../repository/people/updateOne/updateOne.controller');

app.get('/people', async (request, response) => {
    try {
        const data = await getAllController();
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get('/people/:nationalId', validateParams(validateNationalId), async (request, response) => {
    try {
        const { nationalId } = request.params;
        const data = await getOneController(nationalId);
        response.status(data.status).send(data.data);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post('/people', validateHeaders(validateJsonHeader), validateBody(validatePeople), async (request, response) => {
    try {
        const people = request.body;
        const data = await createOneController(people);
        response.status(data.status).send(data.data);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put('/people/:nationalId', validateHeaders(validateJsonHeader), validateBody(validatePeople), async (request, response) => {
    try {
        const { nationalId } = request.params;
        const people = request.body;
        const data = await updateOneController(people, nationalId);
        response.status(data.status).send(data.data);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete('/people/:nationalId', validateParams(validateNationalId), async (request, response) => {
    try {
        const { nationalId } = request.params;
        const data = await destroyOneController(nationalId);
        response.status(data.status).send(data.data);
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
