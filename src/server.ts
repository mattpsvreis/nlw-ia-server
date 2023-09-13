import { fastify } from 'fastify';
import { getAllPromptsRoute } from './routes/getAllPrompts';
import { uploadVideoRoute } from './routes/uploadVideo';

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
