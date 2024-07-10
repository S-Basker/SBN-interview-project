// server.js
const fastify = require('fastify')({ logger: true });
const routes = require('./src/routes');

fastify.register(require('fastify-formbody'));

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running on port 3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
