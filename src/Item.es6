import "./item.scss";
import $ from "jquery";

export default class Item {

	render(){
		let template = $(`
<li class="item">

	<dl>
		
	</dl>
	
	<div class="buttons">
		
	</div>

</li>`
		);

		this.template = template;

		template.find(".buttons")
			.append(this.getButtons());

		this.renderDetails();

		return template;
	}

	renderDetails(){
		let details = $(`
			<dt>ID</dt>
			<dd>${this.id}</dd>
			
			<dt>Name</dt>
			<dd>${this.name}</dd>
			
			<dt>Skill</dt>
			<dd>${this.skill}</dd>
			
			<dt>Title</dt>
			<dd>${this.title}</dd>
			
			<dt>Last Check In</dt>
			<dd>${this.lastCheckIn}</dd>
		`);


		this.template.find("dl")
			.html(details);
	}

	getButtons(){
		return ``;
	}

}