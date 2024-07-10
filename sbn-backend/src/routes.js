// src/routes.js
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });

    fastify.post('/auth', async (request, reply) => {
    const { password } = request.body;
    if (password === 'correct-password') {
      reply.send({ authenticated: true });
    } else {
      reply.status(401).send({ authenticated: false });
    }
  });

  fastify.get('/people', async (request, reply) => {
    const { Person } = require('./models');
    const people = await Person.findAll();
    return people;
  });

  fastify.get('/people/filterByMonth', async (request, reply) => {
    const { Person } = require('./models');
    const { month } = request.query;
    const people = await Person.findAll({
      where: sequelize.where(
        sequelize.fn('MONTH', sequelize.col('dateOfBirth')),
        month
      ),
    });
    return people;
  });

  fastify.post('/people', async (request, reply) => {
    const { Person } = require('./models');
    const person = await Person.create(request.body);
    return person;
  });

  fastify.put('/people/:id', async (request, reply) => {
    const { Person } = require('./models');
    const person = await Person.findByPk(request.params.id);
    if (person) {
      await person.update(request.body);
      return person;
    }
    reply.code(404).send({ error: 'Person not found' });
  });

  fastify.delete('/people/:id', async (request, reply) => {
    const { Person } = require('./models');
    const person = await Person.findByPk(request.params.id);
    if (person) {
      await person.destroy();
      return { success: true };
    }
    reply.code(404).send({ error: 'Person not found' });
  });
}

module.exports = routes;

