import $ from "jquery";
import List from './List.es6';
import ListView from "./ListView.es6";
import Form from './Form.es6';
import ItemsService from './ItemsService.es6';

let form = new Form(ItemsService.get());
document.body.appendChild(form.render()[0]);

let listView = new ListView($(document.body));
let list = new List(listView, ItemsService.get());
