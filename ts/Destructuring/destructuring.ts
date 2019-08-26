const user = {
    first: 'Martin',
    last: 'Saman'
}
const { first, last } = user;
//console.log(first + ' ' + last);

const users = ['demo','demo2','demo3'];
const [user1, user2, user3] = users;
//console.log(user2);

const [a, b] = ['x', 'y'];
//console.log(a);

const obj = {f: [{foo: 123, bar: 'abc'},{}], gb: true};
const {f: [{bar: g}]} = obj;
console.log(g);