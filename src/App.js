import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentNumber: '0',
      decimalFlag: false,
      operatorFlag: false,
      limitFlag: false
    }
    this.handleClick = this.handleClick.bind(this);
    // this.clearDisplay = this.clearDisplay.bind(this);
    // this.totalAnswer = this.totalAnswer.bind(this);
    // this.backSpace = this.backSpace.bind(this);
  }

handleClick(e){
  let buttonName = e.target.value
  let {currentNumber, operatorFlag, decimalFlag} = this.state
  switch(true){
      case buttonName === "0" ||
           buttonName === "1" ||
           buttonName === "2" ||
           buttonName === "3" ||
           buttonName === "4" ||
           buttonName === "5" ||
           buttonName === "6" ||
           buttonName === "7" ||
           buttonName === "8" ||
           buttonName === "9" :
      if(this.state.currentNumber!=="0"){
      currentNumber += buttonName
      operatorFlag = false
      }else{
      currentNumber = buttonName
      }
         break
    case buttonName === "+" ||
         buttonName === "-" || 
         buttonName === "*" ||
         buttonName === "/" :
         if(!this.state.operatorFlag){
           currentNumber += buttonName
           operatorFlag = true
           decimalFlag = false
         }else{
           let replacer = currentNumber.slice(0, currentNumber.length-1);
           currentNumber = replacer;
           currentNumber += buttonName
         }
         break
    case buttonName === ".":
         if(!this.state.decimalFlag){    //Triggering the Value Of Decimal if Decimal is false then append it to 
          currentNumber += buttonName;    //the Display or current Number & soon after that make it true so  it will 
          decimalFlag = true; //not get added after clicking it for the first time😎😎 
         }
         break
    case buttonName === "clear":
         currentNumber = '0'
         operatorFlag = false;
          decimalFlag = false
         break     
    case buttonName === '=':
         currentNumber = eval(this.state.currentNumber)
         operatorFlag = false;
         decimalFlag = true;
         break
  }
  this.setState({decimalFlag})
  this.setState({operatorFlag})
  this.setState({currentNumber})
}

// totalAnswer(e){
//   if(this.state.input !== ''){
//     this.setState({
//       output: eval(this.state.input)
//     })
//     // this.setState({
//     //   input: 
//     // })
//   }
// }


// backSpace(e){
//   if(this.state.input !== ''){
//     this.setState({
//       input: this.state.input.substring(0, this.state.input.length-1)
//     })
//   }
// }

// clearDisplay(e){
//     this.setState({
//       input: '',
//       output: '0'
//     })
// }
  render(){

  //   let {input, disabled} = this.state;

  //   if(this.state.input === "00"){
  //     this.setState({
  //       input: '0'
  //     })
  //   }
  //   // if(!regex.test(this.state.input)){
  //   //   this.setState({
  //   //     disabled: true
  //   //   })
  //   // }

  //   else if (input[0] == "." || input[0] == "+" || input[0] == "-" || input[0] == "/" || input[0] == "*") {
  //     this.setState({
  //       input: ''
  //     })
  // }
    return (
      <div className="bg">
      <div className="wrapper">

        

        <input type="text" id="display" value={this.state.currentNumber}/>
       

        <div className="gridContainer">

        <button id="clear" value="clear" onClick={this.handleClick} className="operator">AC</button>

        <button id="divide" value="/" onClick={this.handleClick} className="number logic">/</button>

        <button id="multiply" value="*" onClick={this.handleClick} className="number logic">x</button>

        <br/>

        <button id="seven" value="7" onClick={this.handleClick} className="number">7</button>

        <button id="eight" value="8" onClick={this.handleClick} className="number">8</button>

        <button id="nine" value="9" onClick={this.handleClick} className="number">9</button>

        <button id="subtract" value="-" onClick={this.handleClick} className="number logic">-</button>

        <br/>

        <button id="four" value="4" onClick={this.handleClick} className="number">4</button>

        <button id="five" value="5" onClick={this.handleClick} className="number">5</button>

        <button id="six" value="6" onClick={this.handleClick} className="number">6</button>

        <button id="add" value="+" onClick={this.handleClick} className="number logic">+</button>

        <br/>

        <button id="one" value="1" onClick={this.handleClick} className="number">1</button>

        <button id="two" value="2" onClick={this.handleClick} className="number">2</button>

        <button id="three" value="3" onClick={this.handleClick} className="number">3</button>

        <button id="backspace" onClick={this.handleClick} className="number logic">C</button>

        <br/>

        <button id="zero" value="0" onClick={this.handleClick} className="operator">0</button>
        
        <button id="decimal" value="." onClick={this.handleClick} className="number">.</button>

        <button id="equals" value="=" onClick={this.handleClick} className="number">=</button>


          </div>        
        </div>
      </div>
    )
  }
}

export default App;

