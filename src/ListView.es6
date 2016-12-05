import $ from "jquery";

export default class ListView {
	constructor(container){
		this.template = this.template || $(`<ul></ul>`);
		container.append(this.template);
	}

	render(items){
		this.template.html("");
		for(let item of items) {
			let itemHTML = item.render();
			this.template.append(itemHTML);
		}
	}
}
