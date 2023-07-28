const request = require('supertest');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const app = require('../app');
const User = require('./model');

jest.mock('./model');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('lodash');

describe('Authentication API', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    // describe('POST /registration', () => {
    //     it('should register a new user', async () => {
    //         const data = {
    //             user_id: 1,
    //             name: 'Rahiful',
    //             email: 'johndoe@example.com',
    //             password: 'password123',
    //         };

    //         const hashedPassword = 'hashedPassword123';
    //         const newUser = {
    //             _id: 'user_id',
    //             ...data,
    //             password: hashedPassword,
    //         };

    //         bcrypt.hash.mockResolvedValue(hashedPassword);
    //         User.prototype.save.mockResolvedValue(newUser);

    //         const response = await request(app)
    //             .post('/registration')
    //             .send(data);

    //         expect(response.statusCode).toBe(201);
    //         expect(response.body).toEqual(newUser);
    //     });

    //     it('should return an error if validation fails', async () => {
    //         const data = {
    //             // Invalid data
    //         };

    //         const response = await request(app)
    //             .post('/registration')
    //             .send(data);

    //         expect(response.statusCode).toBe(400);
    //         expect(response.body).toEqual('Validation error message');
    //     });

    //     it('should return an error if user save fails', async () => {
    //         const data = {
    //             user_id: 1,
    //             name: 'Rahiful',
    //             email: 'johndoe@example.com',
    //             password: 'password123',
    //         };

    //         const errorMessage = 'User save error message';

    //         bcrypt.hash.mockResolvedValue('hashedPassword123');
    //         User.prototype.save.mockRejectedValue(new Error(errorMessage));

    //         const response = await request(app)
    //             .post('/registration')
    //             .send(data);

    //         expect(response.statusCode).toBe(404);
    //         expect(response.body).toEqual(errorMessage);
    //     });
    // });

    describe('POST /login', () => {
        it('should log in a user and return a token', async () => {
            const email = 'rahiful@gmail.com';
            const password = '123';

            const user = {
                _id: '64ae44a88e99a71e269582bd',
                email: email,
                password: '$2b$10$xHF0Is7xH8DO0OwtIBIOPeJ5n78uGId08VC6BI4ycGtEaDagr1bsS',
            };

            User.findOne.mockResolvedValue(user);
            bcrypt.compare.mockResolvedValue(true);
            jwt.sign.mockReturnValue('accessToken');
            _.pick.mockReturnValue({
                _id: '64ae44a88e99a71e269582bd',
                name: 'Rahiful',
                email: email,
            });

            const response = await request(app)
                .post('/login')
                .send({ email, password });

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('Login successfully');
            expect(response.body.user).toEqual({
                _id: '64ae44a88e99a71e269582bd',
                name: 'Rahiful',
                email: email,
            });
        });

        // it('should return an error if user does not exist', async () => {
        //     const email = 'nonexistent@example.com';
        //     const password = 'password123';

        //     User.findOne.mockResolvedValue(null);

        //     const response = await request(app)
        //         .post('/login')
        //         .send({ email, password });

        //     expect(response.statusCode).toBe(400);
        //     expect(response.body).toBe('Invalid User');
        // });

        // it('should return an error if password is invalid', async () => {
        //     const email = 'johndoe@example.com';
        //     const password = '567';

        //     const user = {
        //         _id: 'user_id',
        //         email: email,
        //         password: 'hashedPassword123',
        //     };

        //     User.findOne.mockResolvedValue(user);
        //     bcrypt.compare.mockResolvedValue(false);

        //     const response = await request(app)
        //         .post('/login')
        //         .send({ email, password });

        //     expect(response.statusCode).toBe(400);
        //     expect(response.body).toBe('Invalid password');
        // });

        // it('should return an error if an exception occurs', async () => {
        //     const email = 'johndoe@example.com';
        //     const password = 'password123';

        //     const errorMessage = 'Login error message';

        //     User.findOne.mockRejectedValue(new Error(errorMessage));

        //     const response = await request(app)
        //         .post('/login')
        //         .send({ email, password });

        //     expect(response.statusCode).toBe(404);
        //     expect(response.body).toEqual(errorMessage);
        // });
    });

    // describe('POST /getUser', () => {
    //     it('should get the list of users', async () => {
    //         const users = [
    //             {
    //                 _id: 'user_id1',
    //                 name: 'Rahiful',
    //                 email: 'johndoe@example.com',
    //             },
    //             {
    //                 _id: 'user_id2',
    //                 name: 'Jane Smith',
    //                 email: 'janesmith@example.com',
    //             },
    //         ];

    //         User.find.mockResolvedValue(users);
    //         User.find().sort.mockReturnThis();
    //         User.find().select.mockReturnThis();

    //         const response = await request(app)
    //             .post('/getUser')
    //             .set('Authorization', 'Bearer accessToken');

    //         expect(response.statusCode).toBe(200);
    //         expect(response.body.message).toBe('Student showed successfully');
    //         expect(response.body.student).toEqual(users);
    //     });

    //     it('should return an error if something goes wrong', async () => {
    //         const errorMessage = 'Something went wrong';

    //         User.find.mockRejectedValue(new Error(errorMessage));

    //         const response = await request(app)
    //             .post('/getUser')
    //             .set('Authorization', 'Bearer accessToken');

    //         expect(response.statusCode).toBe(400);
    //         expect(response.body.message).toBe('Something went wrong');
    //         expect(response.body.error).toEqual(errorMessage);
    //     });
    // });
});
