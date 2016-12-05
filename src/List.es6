export default class List {

	constructor(listView, itemService) {
		this.listView = listView;
		this.itemService = itemService;
		itemService.onChanges(() => this.update() );

		this.update();
	}

	update(){
		this.listView.render( this.itemService.itemsArray );
	}

}
