import React, { Componenent } from "react";




export class Title extends React.Component {

constructor(props){

	super(props);
	this.flip = this.flip.bind(this);

	this.state = {name: "dank"};

}




flip () {
const weedTypes1 = ["elevated", "rustic", "blazing", "frosty", "grassy", 'green', 'herbal', "noble", "dank", "high", "fuzzy"];


const current =  weedTypes1[Math.floor(Math.random()*(weedTypes1.length))];
this.setState({name: current});



}


componentDidMount () {


	setInterval(this.flip,1300);

}


	render() {
		return (
			<div>
				<h1 className="header"><span className ="inline"> Alaska's </span> <span className ="titleHighlight">{this.state.name}</span><br /><span className ="inline"> Marijuana Business Names</span></h1>
				
			</div>
		);
	}
}
