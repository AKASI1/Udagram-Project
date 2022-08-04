# Hosting a Full-Stack Application

<!-- GETTING STARTED -->

## Getting Started

This project require some prequesites and dependenscies to be installed, you can find the instructions below

> To get a local copy, follow these simple steps :

### Installation

#### installing Locally

1. Clone the repo
   ```sh
   git clone https://github.com/abdrahmansoltan/Hosting-a-Full-Stack-Application.git
   ```
2. go to project folder

   ```sh
   cd Hosting-a-Full-Stack-Application
   ```

3. install dependenscies

   ```bash
   npm run frontend:install
   npm run backend:install
   ```

4. create databases

   - connect to the default postgres database as the server's root user

     ```bash
     psql -U postgres
     ```

   - In psql run the following to create a user

     ```bash
     CREATE USER project_user WITH PASSWORD 'password123';
     ```

   - In psql run the following to create the dev database

     ```bash
     CREATE DATABASE udagram;
     ```

   - Connect to the databases and grant all privileges

     ```bash
     \c udagram;
     GRANT ALL PRIVILEGES ON DATABASE udagram TO project_user;
     ```

5. Enviromental Variables Set up

   - Here are the environmental variables that needs to be set in a .env file. This is the default setting that I used for development, but you can change it to what works for you.

   ```
   POSTGRES_USERNAME=
   POSTGRES_PASSWORD=
   POSTGRES_HOST=localhost
   POSTGRES_DB=template1
   AWS_BUCKET=arn:aws:s3:::kasi-udagram-frontend
   AWS_REGION=us-east-1
   AWS_PROFILE=default
   JWT_SECRET=mysecretstring
   URL=http://localhost:8100
   PORT=8080
   ```

6. Run development server

   ```sh
   cd udagram-api npm run dev
   ```

- or: Run frontend server

  ```bash
  cd udagram-frontend npm start
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

---

### Ports & EndPoints

#### Ports

- Server runs on port `8080`
- Database on port `5432`

---
