const person = { name: 'Jack', age: 17, job: 'facebooking', address: 'uttara', phone: '017111111', friends: ['tom', 'hanks']};

const {phone, address} = person;
const name = person.name;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kolabagan',
        leader: 'amir khan'
    }
}

const {leader} = complexObject.info;
console.log(leader);

// console.log(name, phone);
// console.log(name, phone, address);
// console.log(name);
// console.log(name);

// const friends = ['sakib', 'mili', 'amir', 'salman', 'shahrukh'];
// const [first, nextFriend, ...restFriends] = friends;
// console.log(first, nextFriend);
// console.log(restFriends);