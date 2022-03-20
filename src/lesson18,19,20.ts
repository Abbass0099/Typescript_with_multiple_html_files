import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let values : [string, string, number] // Tuple
    values = [tofrom.value, details.value, amount.valueAsNumber]

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
});




// **************************************** ENUMS ************************************ ////////

// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }

// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.DIRECTOR,
//     data: { title: 'name of the wind' }
// }

// console.log(docOne);
// console.log(docTwo);



// **************************** TUPLES ********************************* //////////////////
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];

// let tup: [string, number, boolean] = ['ryu', 25, true];
// // tup[0] = false;
// tup[0] = 'ken';

// let student: [string, number];
// //student = [23564, 'chun-li'];
// student = ['chun-li', 23564];