import Teacher from "./Teacher.es6";
import $ from "jquery";

export default class Manager extends Teacher {

	constructor(name, skill, title = "Manager"){
		super(name, skill, title);
	}

	sayYo(){
		alert(`${this.name} says yo`);
	}

	getButtons(){
		let button = $(`<button>Say yo!</button>`)
			.bind("click", ()=> this.sayYo() );

		return [button, ...super.getButtons()];
	}

}