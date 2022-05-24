import app from "../app.js"
import supertest from "supertest"

beforeAll(async () => {
  const response = await supertest(app)
  .post('/users/login')
  .send({
    email:"jm@email.com",
    password:"12345"
  })
  token = response.body.token;
});

beforeRegister(async () => {
  const regResponse = await supertest(app)
  .post('/register')
  .send({
    first:"jim",
    last:"mohty",
    email:"jm@email.com",
    password:"12345",
    role:"user"
  })
  
});

describe('Add user to database with auth', () => {
  console.log(token, 'get token')
  test('should respond with company name Google', async () => {
    const response = await supertest(app)
      .get('/applications')
      .set('Authorization', `Bearer ${token}`);
      console.log(response.body[0].company)

    expect(response.body[0].company).toBe("Google");
  })
});
