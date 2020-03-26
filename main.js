class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;

    }
    isAdmin() {
        if (this.admin === true) {
            return this.admin;
        } else {
            this.admin = false;
            return this.admin;
        }
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const Adm1 = new Admin('djalmascat@gmail.com', '123');
console.log(Adm1);
console.log(Adm1.isAdmin()) // true

const User1 = new Usuario('lanebrankinha@gmail.com', '456');
console.log(User1);
console.log(User1.isAdmin()) // false