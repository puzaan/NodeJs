import bcrypt from "bcryptjs";
const Users = [
    {
        name: "Admin User",
        email: "admin@dhakatopi.com",
        password: bcrypt.hashSync("achievers", 10),
        isAdmin: true
    },
    {
        name: "Jhon Doe",
        email: "jhon@dhakatopi.com",
        password: bcrypt.hashSync("123456", 10),
    },
    
];

export default Users;