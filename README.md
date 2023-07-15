# NestJS: Microservices with gRPC, API Gateway, and Authentication


## Description:

An example of a microservice architecture using NestJS, gRPC, API Gateway, and Authentication for the microservices course at ESGI

## Installation:

### Init a database, here we use PostgreSQL:

```
$ psql postgres
$ CREATE DATABASE micro_auth;
$ CREATE DATABASE micro_product;
$ CREATE DATABASE micro_order;
$ \l
$ \q
```

### Modify the .env file in each microservice with the correct database username and password

Here we're using, dbname can be found with ```\l``` command in psql

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=micro_product
DB_USERNAME=bvietanh2810
DB_PASSWORD=null
```

### Then for each microservice, run the following commands:

```
$ npm install
$ npm run start:dev
```

## Usage:

### Register a user:

```
$ curl -X POST http://localhost:3000/auth/register \
    -H "Content-Type: application/json" \
    -d '{"email": "test@gmail.com", "password":"12345678"}'
```
Server Response:
```
{ "status": 201 }
```

### Login a user:

```
$ curl -X PUT http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "elon@gmail.com", "password": "12345678"}'
```
Server Response:
```
{ "status": 200, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoZWxsb2tldmludm9nZWxAZ21haWwuY29tIiwiaWF0IjoxNjQ3NTMzMjczLCJleHAiOjE2NzkwNjkyNzN9.w14jPT72_sfbdPIPXxEmSdopn8TXS-EDMJ3HalXT9Kw" }
```

### Create a product:

Remember to get the token from login response and put it in the Authorization header

```
$ curl -X POST http://localhost:3000/product \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your_token_here" \
  -d '{"name": "Test A", "sku": "A00001", "price": 100, "stock": 5}'
```

Server Response:
```
{ "status": 200, "id": 1 }
```

### Create an order, which will check if the product is available then decrease the stock

```
$ curl -X POST http://localhost:3000/order \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_token_here" \
    -d '{"productId": 1, "quantity": 1}'
```

Server Response:
```
{ "status": 200, "id": 1 }
```
