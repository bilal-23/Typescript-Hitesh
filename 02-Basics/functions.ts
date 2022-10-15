function addTwo(num: number = 0) {
    return num + 2;
}
const fourPlusTwo = addTwo(4);
console.log(fourPlusTwo);

//better way to write functions
function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    } else {
        return "200 OK"
    }
}

const getHello = (name: string): string => {
    return "Hello" + name
}

const heros = ["1", 2, "Thor"];

heros.map((hero): string => {
    return "hero";
})
//void
function logError(errmsg: string): void {
    console.error(errmsg);
}

//never - never returns anything
function throwError(errmsg: string): never {
    throw new Error(errmsg);
}


export { }