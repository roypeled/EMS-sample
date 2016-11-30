import EmployeeIDService from "./EmployeeIDService.es6";
import Item from "./Item.es6";

export default class Employee extends Item {
	constructor(name, skill, title){
		super();

		this.id = EmployeeIDService.getId();
		this.name = name;
		this.skill = skill;
		this.title = title;
		this.lastCheckIn = 0;
	}
}