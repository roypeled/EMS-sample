import Manager from "./Manager.es6";
import ItemsService from './ItemsService.es6';
import $ from "jquery";

export default class CEO extends Manager {

	constructor(name, skill, title = "CEO"){
		super(name, skill, title)
	}

	fireAll(){
		ItemsService.fireAll();
	}

	getButtons(){
		let button = $(`<button>Fire All</button>`)
			.bind("click", ()=> this.fireAll() );

		return [button, ...super.getButtons()]
	}

}