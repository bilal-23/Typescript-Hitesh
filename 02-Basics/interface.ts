//loose form of class;


interface User {
    name: string;
    age: number;
    email: string;
    userId?: string;
    greet(name: string): string
}

//reopeing the interface
interface User {
    token: string;
}

interface Admin extends User {
    role: "admin" | "user";
}

const bilal: Admin = {
    role: 'admin',
    name: 'Bilal',
    age: 23,
    email: "",
    userId: "123",
    greet: () => {
        return "hello"
    },
    token: "1234"
}