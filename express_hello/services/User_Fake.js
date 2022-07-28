// POO

class UserService {
  constructor() {
    this.users = [];
    this.createFakeUsers();
  }

  createFakeUsers() {
    this.users = [
      {
        id: 1,
        name: "user harcoded",
        lastName: "Torres",
        email: "victor@gmail.com",
      },
      { id: 2, name: "Isaac", lastName: "Huanca", email: "isaaac@gmail.com" },
    ];
  }

  createUser(infoUser) {
    // ver BUG en body
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // creando una copia de un array
        const copyUsers = [...this.users];
        //agregamos nuevo elemento al copyUsers
        copyUsers.push(infoUser);
        // Se asigna nuevo valor (copyUsers) a this.users - array original
        this.users = copyUsers;

        resolve("User created successfully ");
      }, 3000);
    });
  }

  updateUser(id, newInfoUser) {
    console.log("newInfoUser", newInfoUser);
    return new Promise((resolve, reject) => {
      // 1 Buscar el indice del id que recibimos como param en nuestro array de users
      const indexUser = this.users.findIndex(
        (element) => element.id === parseInt(id)
      );

      // 2 guardar en una variable el valor del array en esa posicion Ejemplo => array[posicion]
      let user = this.users[indexUser];

      // 3 Validar si el indice se encontro
      if (user) {
        /**
            user = { "id": 1, "name": "user harcoded", "lastName": "Torres", "email": "victor@gmail.com",  },
            newInfoUser = { name: "userHarcoded-x2" }

            RESULTADO FINAL
            user ={ "id": 1, "name": "hola", "lastName": "amigos", "email": "victor@gmail.com",  age: 24 },
        */

        // 4 Sustituir el atributo con el nuevo valor (newInfoUser) y copiar los que ya existen
        user = { ...user, ...newInfoUser };

        //5 Asignar nuevo objeto a  arrayElemn[position]
        this.users[indexUser] = user;
        resolve("User updated successfully");
      } else {
        reject("User id not found");
      }
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      const indexUser = this.users.findIndex(element => element.id === parseInt(id))
      let user = this.users[indexUser]
      if (user) {
        console.log('La posición del elemento en el array this.users a borrar es: ',indexUser);
        console.log('Se encontro el item a borrar y es el siguiente: ', user)
        for(let i = 0; i <= this.users.length-1; i++) {
          if(this.users[i].id == user.id) {
            this.users.splice(indexUser, 1)
            console.log('El arreglo de usarios queda así: ',this.users);
            console.log('User deleted successfully')
            resolve()
          }
        }
      } else if(!user) {
        console.log('Error at delete user')
        reject('---')
      }
    })
  }


  
}

// FRONT
// SERVICES
// USERS
// AXIOS
// getuser axios.get
// deleetuser axios.delete
// createUser axios.post

export default UserService;

// ES LO MISMO PERO SE EXPORTA COMO OBJETO
//export { UserService}
