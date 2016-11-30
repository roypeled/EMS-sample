import $ from "jquery";
import ItemsService from './ItemsService.es6';

export default class List {

	constructor(){
		ItemsService.onChanges(() => this.render() );
	}

	render(){
		this.template = this.template || $(`<ul></ul>`);
		this.template.html("");

		for(let item of ItemsService.itemsArray) {
			let itemHTML = item.render();
			this.template.append(itemHTML);
		}

		return this.template
	}

}