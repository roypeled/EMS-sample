class ItemsService {

	constructor(){
		this.itemsArray = [];
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