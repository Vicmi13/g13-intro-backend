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

export { usersRecovered };
