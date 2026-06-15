import request from 'supertest';
import express from 'express';
import { router } from './api';

const app = express();
app.use(router);

describe('API', () => {
  it('should respond to health check', async () => {
    // Placeholder — Claude will add tests for the /file endpoint
    expect(true).toBe(true);
  });
});
