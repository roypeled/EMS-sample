import $ from "jquery";
import CEO from "./CEO.es6";
import Teacher from "./Teacher.es6";
import Manager from "./Manager.es6";
import ItemsService from "./ItemsService.es6";

import "./form.scss";

export default class Form {

	constructor(){
		this.allTitles = ["CEO", "Manager", "Teacher", "Employee", "Pilot"];
	}

	addEmployee(e){
		e.preventDefault();

		let name = this.template.find('[name="name"]').val();
		let skill = this.template.find('[name="skill"]').val();
		let title = this.template.find('[name="title"]').val();
		let newItem;


		switch (title){
			case "CEO":
				newItem = new CEO(name, skill);
				break;
			case "Manager":
				newItem = new Manager(name, skill);
				break;
			case "Teacher":
				newItem = new Teacher(name, skill);
				break;
		}

		ItemsService.addItem(newItem);

		this.template.find('[name="name"]').val("");
		this.template.find('[name="skill"]').val("");
		this.template.find('[name="title"]').val("");
	}

	render(){
		this.template = $(`
<form>
	<input type="text" name="name" placeholder="Name..."/>
	<input type="text" name="skill" placeholder="Skill..."/>
	<select name="title">
		${
			this.allTitles.map(
				(title)=> `<option value="${title}">${title}</option>` 
			).join('')
		}
	</select>
	<button>Add Employee</button>
</form>
`);
		this.template.find("button")
			.bind("click", (e)=> this.addEmployee(e));

		return this.template;
	}

}

