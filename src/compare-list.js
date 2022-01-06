// node src/compare-list.js
console.log("Compare lists.");

const list_A = [
    { id: 1, name: 'name 1'},
    { id: 2, name: 'name 2' },
    { id: 3, name: 'name 3' },
    { id: 4, name: 'name 4' }
];

const list_B = [
    { id: 1, status: true },
    { id: 3, status: true }
];

// map a complete list
const list = list_A.map( obj => {
    //filter a short list
    const listFilter = list_B.find( e => e.id === obj.id );
    //if found construct a object return with status true
    if(listFilter){
        const { id, name } = obj;
        return { id, name, status: true };
    }
    // else return with status false
    return { ...obj, status: false }
});

console.log(list);