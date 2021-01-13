import bcryptjs from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jessen Mercado',
        email: 'jessen@example.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        name: 'Beth Mendoza',
        email: 'beth@example.com',
        password: bcryptjs.hashSync('123456', 10),
    },
]

export default users