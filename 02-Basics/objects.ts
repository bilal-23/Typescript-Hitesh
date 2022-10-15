// const User = {
//     name: "Bilal",
//     email: "b@b.com",
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// let newUser = { name: "Bilal", isPaid: true, email: "h@h.com" };

// createUser(newUser);

// function createCourse(): { name: string, price: number } {
//     return { name: "TS", price: 499 }
// }


//Type Aliases  
type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    upi?: string
}

let user1: User = {
    name: "Bilal",
    email: "mansuribilal@gmail.com",
    isActive: true,
    _id: "1"
}

type cardNumber = {
    cardNumber: string;
}
type cardDate = {
    cardDate: string;
}
type cardCVV = {
    cardCVV: number;
}

type cardDetails = cardNumber & cardDate & cardCVV;

let card1: cardDetails = {
    cardNumber: "123456789",
    cardDate: "12/12",
    cardCVV: 123
}

export { };