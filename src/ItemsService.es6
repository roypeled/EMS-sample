import CEO from "./CEO.es6";
import Teacher from "./Teacher.es6";
import Manager from "./Manager.es6";

class ItemsService {
	constructor(){
		let ceo = new CEO("Roy", "Angular");
		let teacher = new Teacher("David", "React");
		let manager = new Manager("Dudi", "SCSS");

		this.itemsArray = [ceo, teacher, manager];
		this.changeHandler = ()=>{}
	}


	addItem(item){
		this.itemsArray.push(item);

		this.changeHandler();
	}

	fireAll(){
		let newArray = [];

		for(let item of this.itemsArray){
			if(item.title == "CEO")
				newArray.push(item);
		}

		this.itemsArray = newArray;

		this.changeHandler();
	}

	onChanges(handler){
		this.changeHandler = handler;
	}
}

export default new ItemsService();
