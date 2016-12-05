import List from './List.es6';
import Form from './Form.es6';

let list = new List();
let form = new Form();

document.body.appendChild(form.render()[0]);
document.body.appendChild(list.render()[0]);
