import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import weed from "./data/weedEdit.json";
import {weed} from "./data/weedEdit.js";
import { Grid } from "./components/grid.js"
import { Pickers } from "./components/pickers.js"
import { Title }  from "./components/title.js"
import    { Footer } from "./components/footer.js"

// const result = data.map(o => ({ ...o, foo: increment(o.foo) }));
// console.log(result);


// const weed2 = weed.map(d=>({...d, dba:d.Dba.toLowerCase() }));
const weedData = weed.map(d=>({...d, dba:d.Dba.toLowerCase()}))






// const weedClean = weed.map(function (d){ 

//   return {
//   "dba": d.Dba.toLowerCase(),
//   "license_number": d.license_number
//     }
//   }

// )

// console.log(weedClean);


const url = "./data/weedEdit.json";

class App extends Component {
  

  constructor(props) {
    super(props);

    this.state = { weed: [] };

  this.updateFunction= this.updateFunction.bind(this);

    console.log(url);
  }


  updateFunction (item) {

console.log("starging from scratch");
console.log(weedData);
this.setState({ weed: weedData }, function ()

{

console.log("this is the item "+item)
  if (item !== "all names")
{const updatedData = this.state.weed.filter(d=>d[item]==true);
console.log("in update function")
this.setState({weed: updatedData})
}

});

  





  }

  // omponentWillMount() {
  //     fetch(url)
  //       .then(d => d.json())
  //       .then(
  //         data => {
  //           console.log(data);
  //           this.setState({ ice: data, all_ice: data });
  //         } //callbakc 1
  //       );
  //   }

  componentDidMount() {
  //   fetch(url)
  //     .then(data => data.weed.json())
  //     .then(d => {
  //       console.log(d);
  //       this.setState({ "weed": d });
  //     });
  // 


this.setState({ "weed": weedData })

// console.log(weed)
}






  render() {
    return <div>
    <Title />
    <Pickers update={this.updateFunction} />
    <Grid dat={this.state.weed}/>
<Footer />
    </div>;
    
  }
}

export default App;
