import CEO from './CEO.es6';
import Teacher from './Teacher.es6';
import Manager from './Manager.es6';
import List from './List.es6';
import ItemsService from './ItemsService.es6';

let ceo = new CEO("Roy", "Angular");
let teacher = new Teacher("David", "React");
let manager = new Manager("Dudi", "SCSS");
ItemsService.addItem(ceo);
ItemsService.addItem(teacher);
ItemsService.addItem(manager);

let list = new List();

document.body.appendChild(list.render()[0]);