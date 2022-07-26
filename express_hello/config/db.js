import mysql from "mysql2";
import { mysqlCredentials } from "../constants/index.js";

export const connection = mysql.createConnection(mysqlCredentials);

// mysql.createPool COMENTAR
