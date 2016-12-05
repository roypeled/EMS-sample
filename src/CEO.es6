import Manager from "./Manager.es6";
import $ from "jquery";

export default class CEO extends Manager {

	constructor(itemsService, name, skill, title = "CEO"){
		super(name, skill, title);
		this.itemsService = itemsService;
	}

	fireAll(){
		this.itemsService.fireAll();
	}

	getButtons(){
		let button = $(`<button>Fire All</button>`)
			.bind("click", ()=> this.fireAll() );

		return [button, ...super.getButtons()]
	}

}
