import bcrypt from 'bcryptjs'

const users = [{
        name: "Sahir Khan",
        email: "sahirkhan0630@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,

    },
    {
        name: "Ali Fida",
        email: "ali@gmail.com",
        password: bcrypt.hashSync("123456", 10),

    },
    {
        name: "Usman Fida",
        email: "usman@gmail.com",
        password: bcrypt.hashSync("123456", 10),
    },
]

export default users