//your JS code here. If required.
let list = document.querySelectorAll('li');
let count=0;
for (let i = 0; i < list.length; i++) {
  if (list[i].getAttribute('id') === 'level') {
    break;
  }
  count++;
}
alert(`The level of the element is: ${count}`);   
