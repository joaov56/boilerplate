import fastify from 'fastify';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import cors from '@fastify/cors';
import mongoose from 'mongoose';
import { healthRoutes } from './routes/health';

const server = fastify({
  logger: true,
});

// Register plugins
server.register(cors, {
  origin: true,
  credentials: true,
});

server.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Full Stack Boilerplate API',
      description: 'API documentation for the Full Stack Boilerplate',
      version: '1.0.0',
    },
    host: 'localhost:3001',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
});

server.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
});

// Register routes
server.register(healthRoutes);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/boilerplate')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const start = async () => {
  try {
    await server.listen({ port: 3001, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:3001');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start(); 