    // server.test.js
const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('should return HTML with "Le Response"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Le Response');
    });
});
