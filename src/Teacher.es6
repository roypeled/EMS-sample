import Employee from "./Employee.es6";
import $ from "jquery";

export default class Teacher extends Employee {

	constructor(name, skill, title = "Teacher"){
		super(name, skill, title)
	}

	checkIn(){
		this.lastCheckIn = new Date();
		this.renderDetails();
	}

	getButtons(){
		let button = $(`<button>Check In</button>`)
			.bind("click", ()=> this.checkIn() );

		return [button];
	}

}