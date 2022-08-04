# Hosting a Full-Stack Application

<div id="top"></div>

![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=Jasmine&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Circle-CI](https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white)

<!-- PROJECT LOGO -->
<div align="center">

  <h2 align="center">Hosting a Full Stack Application</h2>

  <p align="center">
  <a href="http://kasi-project-3.s3-website-us-east-1.amazonaws.com/">View Demo</a>
    ·
    <a href="https://github.com/AKASI1/Udagram-Project/issues">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#cicd">CI/CD</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

In this project it's required to take a newly developed Full-Stack application built for a retailer and deploy it to a cloud service provider so that it is available to customers.

By Taking a developed full stack application and deploying it to a cloud service provider so that it is available to customers. This application contains the main components of a 3-tier full stack application (UI, API, and Database).

[AWS Infrastructure Description](./documentation/Infrastructure_description.md)

![ARC](./documentation/Architecture-diagram.PNg)

<p align="right">(<a href="#top">back to top</a>)</p>

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
   cd Udagram-Project
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

---

### Ports

- Server runs on port `8080`
- Database on port `5432`

---

<p align="right">(<a href="#top">back to top</a>)</p>
