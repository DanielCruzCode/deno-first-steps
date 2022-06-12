console.log('Hello world from Deno');
const username: string = prompt('Hi, what\'s your name?') ?? 'Daniel';

console.log(`%c${username}, sup bro`, 'color:red');

alert('☢️ Alert! You are a model baby');

const isConfirmTerms = confirm('To continue, please confirm the message');
const termsMessage = isConfirmTerms ? 'Thanks to accept' : 'You are a muggle :P';
console.log(termsMessage);
