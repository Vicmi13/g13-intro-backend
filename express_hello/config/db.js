import mysql from "mysql2";
import { mysqlCredentials } from "../constants";

export const connection = mysql.createConnection(mysqlCredentials);

// mysql.createPool COMENTAR
