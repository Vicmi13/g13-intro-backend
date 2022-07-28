import { connection } from "../config/db.js";

const usersRecovered = () => {
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

const userCreated = (body) => {
  const { name, lastName, email, id } = body;
  return new Promise((resolve, reject) => {
    const stmParams = [id, name, lastName, email];
    connection.query(
      "INSERT INTO owners (id, name, last_name, email) VALUES (?,?,?,?);",
      stmParams,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export { usersRecovered, userCreated };
