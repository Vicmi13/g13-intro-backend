import { connection } from "../config/db.js";

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM owners", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getUserById = (idUser) => {
  return new Promise((resolve, reject) => {
    const id = [idUser];
    connection.query("Select * from owners where id = ?;", id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    // const stmtParams = [POSITION1 = primer ?, POSITION2 = segundo ?,  POSITION3 = tercer ?]
    const stmtParams = [user.name, user.lastName];
    connection.query(
      "INSERT INTO owners (name, lastName) VALUES (?,?);",
      stmtParams,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );

    connection.query();
  });
};

export { getAllUsers, getUserById, createUser };
