import React, { Component } from "react";


const weedTypes = ["all names", 'bud', 'kush', 'green', 'herb', "fireweed", "dank", "high", "frost", "frontier", "alaska"];

export class Pickers extends React.Component{


constructor(props){

	super(props)
	this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {


 // const currentType = e.target.datavalue;
 const currentType = e.target.getAttribute("datavalue");
console.log("currentType")
console.log(currentType)

 this.props.update(currentType);



  }

// ut className={`class1 ${class2}`}> –

render(){


console.log(weedTypes);
return (<div className='center flexPicker'><span id="subheader">⤵ Click a Weed Name Theme to Explore Business Names ⤵</span>
{weedTypes.map(d=><div className={`pickers ${d}`} onClick = {this.handleClick} datavalue={d}>{d}</div>)}  </div>)

}


}



// export default Pickers;