import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize(
  "postgres://postgres:akasiakasi7yz@project-3.czybmthoclva.us-east-1.rds.amazonaws.com:5432/postgres"
);
