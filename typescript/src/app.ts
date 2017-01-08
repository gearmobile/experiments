let a:number = 5;
let b:number = 3;
let c:number;
let isDone:boolean = true;
let userName:string = 'John';
let userSurname:string = 'Doe';
let userFullName:string;

c = a + b;

if ( isDone ) {
    userFullName = userName + ' ' + userSurname;
    isDone = false;
}

console.log( c );
console.log( userFullName );
console.log( isDone );