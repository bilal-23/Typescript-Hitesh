let score: number | string = 33;

type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let bilal: User | Admin = {
    name: 'Bilal',
    id: 1
}

function getDbId(id: number | string): void {
    if (typeof id === 'string') {

    } else {

    }
    console.log(`DB ID: ${id}`);
}

const data: (string | number | boolean)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "11"];

let seatAllotment: "Aisle" | "Window" | "Middle" = "Aisle";

seatAllotment = "Middle" 