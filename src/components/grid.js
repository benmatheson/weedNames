import React, { Component } from "react";
// import '../index.css';



export class Grid extends React.Component {


constructor(props){

	super(props);
}


render() {

return (<div className="center flexContainer">{this.props.dat.map(d=><div className="flexItem">{d.dba}<span className="grid--span--tp"> {d.license_type} </span><span className="grid--span--lc"> {d.City} </span></div>)}</div> )


}



}



