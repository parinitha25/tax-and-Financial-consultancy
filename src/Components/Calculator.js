// import React, { Component } from 'react';
// import Buttons from './Buttons';
// import History from './History';
// import FolkMe from './Folkme';
// import DisplayToolbar from './DisplayToolbar';
// import {Calculator} from '../calculator-core';
// import './App.css';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       formula: [],
//       history: [],
//       input: '0',
//       isShowHistory: false,
//       afterCalculation: false
//     }

//     this.onDigit = this.onDigit.bind(this);
//     this.onOperator = this.onOperator.bind(this);
//     this.onClear = this.onClear.bind(this);
//     this.onEqual = this.onEqual.bind(this);
//     this.onDecimal = this.onDecimal.bind(this);
//     this.onParenthesis = this.onParenthesis.bind(this);
//     this.onBackspace = this.onBackspace.bind(this);
//     this.onHistory = this.onHistory.bind(this);
//     this.onHistoryItemClicked = this.onHistoryItemClicked.bind(this);
//     this.onClearHistory = this.onClearHistory.bind(this);
//   }

//   onDigit({ target }) {
//     const digit = target.innerText;
//     const input = this.state.input;

//     if (this.state.afterCalculation) {
//       this.setState({
//         input: digit,
//         afterCalculation: false
//       });
//     } else if (input === '0') {
//       this.setState({
//         input: digit
//       });
//     } else if (Calculator.isNotNumber(input)) {
//       this.setState({
//         input: digit,
//         formula: this.state.formula.concat(input)
//       });
//     } else {
//       this.setState({
//         input: input.concat(digit)
//       });
//     }
//   }

//   onDecimal({ target }) {
//     const decimal = target.innerText;
//     const input = this.state.input;

//     if (this.state.afterCalculation) {
//       this.setState({
//         input: `0${decimal}`,
//         afterCalculation: false
//       });
//     } else if (Calculator.isNotNumber(input)) {
//       this.setState({
//         input: `0${decimal}`,
//         formula: this.state.formula.concat(input)
//       });
//     } else if (!input.includes(decimal)) {
//       this.setState({
//         input: input.concat(decimal),
//       });
//     }
//   }

//   onOperator({ target }) {
//     const operator = target.innerText;
//     const input = this.state.input;

//     if (Calculator.isOperator(input)) {
//       this.setState({
//         input: operator,
//         afterCalculation: false
//       });
//     } else if (input !== '(') {
//       this.setState({
//         formula: this.state.formula.concat(this.state.input),
//         input: operator,
//         afterCalculation: false
//       });
//     }
//   }

//   onParenthesis({ target }) {
//     const parenthesis = target.innerText;
//     const input = this.state.input;

//     if (parenthesis === '(') {
//       if ((Calculator.isNumber(input) && input !== '0') ||
//         (Calculator.isNumber(input) && input === '0' && this.state.formula.length > 0) ||
//         input === ')') {
//         this.setState({
//           input: parenthesis,
//           formula: this.state.formula.concat([input, '*']),
//           afterCalculation: false
//         });
//       } else if (Calculator.isOperator(input) || input === '(') {
//         this.setState({
//           input: parenthesis,
//           formula: this.state.formula.concat(input),
//           afterCalculation: false
//         });
//       } else if (Calculator.isNumber(input) && input === '0' && this.state.formula.length === 0) {
//         this.setState({
//           input: parenthesis,
//           afterCalculation: false
//         });
//       }
//     } else {
//       const arrayOpenParenthesis = this.state.formula.join("").match(/\(/g);
//       const numOpenParenthesis = arrayOpenParenthesis ? arrayOpenParenthesis.length : 0;

//       const arrayCloseParenthesis = this.state.formula.join("").match(/\)/g);
//       const numCloseParenthesis = arrayCloseParenthesis ? arrayCloseParenthesis.length : 0;

//       if ((Calculator.isNumber(input) || input === ')') && numOpenParenthesis > 0 && numOpenParenthesis > numCloseParenthesis) {
//         this.setState({
//           input: parenthesis,
//           formula: this.state.formula.concat(input),
//           afterCalculation: false
//         });
//       }
//     }
//   }

//   onClear() {
//     this.setState({
//       formula: [],
//       input: '0',
//       afterCalculation: false
//     });
//   }

//   onBackspace() {
//     const input = this.state.input;
//     const formula = this.state.formula;
//     const currentInputLength = input.length;

//     if (input === 'Infinity' || input === '-Infinity' || input === 'NaN') {
//       this.setState({
//         input: '0',
//         afterCalculation: false
//       });
//     } else if (currentInputLength > 1) {
//       this.setState({
//         input: input.slice(0, currentInputLength - 1),
//         afterCalculation: false
//       });
//     } else if (input !== '0') {
//       this.setState({
//         input: '0',
//         afterCalculation: false
//       });
//     } else if (formula.length > 0) {
//       this.setState({
//         input: formula[formula.length - 1],
//         formula: formula.slice(0, formula.length - 1),
//         afterCalculation: false
//       });
//     }
//   }

//   onEqual() {
//     const finalFormula = this.state.formula.concat(this.state.input);
//     const result = Calculator.evaluate(finalFormula);

//     if (!Number.isNaN(result)) {
//       const newHistoryItem = {
//         formula: finalFormula,
//         result: result
//       }

//       this.setState({
//         input: result + "",
//         formula: [],
//         history: [].concat(newHistoryItem, this.state.history),
//         afterCalculation: true
//       });
//     }
//   }

//   onHistory() {
//     this.setState({
//       isShowHistory: !this.state.isShowHistory
//     });
//   }

//   onClearHistory() {
//     this.setState({
//       history: []
//     });
//   }

//   onHistoryItemClicked({ target }) {
//     const number = target.getAttribute("value");
//     const input = this.state.input;

//     if (Calculator.isNumber(input)) {
//       this.setState({
//         input: number
//       });
//     } else {
//       this.setState({
//         input: number,
//         formula: this.state.formula.concat(input)
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="calculator">
//           <DisplayToolbar
//             formula={this.state.formula}
//             input={this.state.input}
//             onBackspace={this.onBackspace}
//             githubURL={this.props.githubURL}
//             onHistory={this.onHistory}
//             isShowHistory={this.state.isShowHistory}
//           />

//           <Buttons
//             onClear={this.onClear}
//             onEqual={this.onEqual}
//             onDecimal={this.onDecimal}
//             onDigit={this.onDigit}
//             onOperator={this.onOperator}
//             onParenthesis={this.onParenthesis}
//           />

//           <History
//             isShowHistory={this.state.isShowHistory}
//             history={this.state.history}
//             onHistoryItemClicked={this.onHistoryItemClicked}
//             onEqual={this.onEqual}
//             onClearHistory={this.onClearHistory}
//           />
//         </div>

//         <FolkMe
//           targetURL={this.props.githubURL}
//           color="#fff"
//           backgroundColor="#3da4ab"
//           position="right"
//           size="120px"
//           ariaLabel="View source on Github"
//         />
//       </div>
//     )
//   }
// }
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// console.log(Math.random());

// Math.floor(Math.random() * 6) + 1  
// console.log(Math
// import React, { Component } from 'react';
// // import Home from './Home'
// // import About from './About'
// // import News from './News'
// // import Service from './Service'
// // import Contact from './Contact'
// import '../Css/Navbar.css';
// // import logo1 from '../Images/logo1.png'
// class Navbar extends Component { 
//     render() {

//         return (
//             // <div className='nav_body'>
//             //     <nav className='navnar'>
//             //         <div className='toggle'>
//             //             <i className="fa fa-bars" arial-hidden="true" ></i>
//             //         </div>
//             //         <ul className="unlist row">
//             //             <li className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
//             //                 {/* <img src={logo1} alt={"logo"} className='logo1'></img> */}
//             //                 <h3 className='logo_name1'>HEALTH+</h3>
//             //             </li>
//             //             <li className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></li>
//             //             <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href='Home'>Home</a></li>
//             //             <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href='About'>About Us</a></li>
//             //             <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="Service">Services</a></li>
//             //             <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="News">News</a></li>
//             //             <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="Contact">Contact Us</a></li>
//             //             <li className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></li>
//             //             <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
//                             <div className='search_box'>
//                             <input className='search_txt' type="text" placeholder='Type to search'></input>
//                             <a className="search_btn" href="#"><i className="fa fa-search"></i></a>
//                             </div>
//                 //         </span>
//                 //     </ul>
//                 // </nav>
//                 {/* <script src='https://code.jquery.com/jquery-3.2.1.js'></script>
//                 <script type="text/javascript">
//                     $(document).ready(function(){
//                         $('.unlist').toggleClass('active')
//                     }) 
                    
//                 </script> */}
//             // </div>
//         );
//     }
// }

// export default Navbar;


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import '../App.css';
// import { Carousel } from 'react-responsive-carousel';

// class Calculator extends Component {
//     render() {
//         return (
//             <Carousel className="imagecalcia">
//                 <div>
//                     <img src={require('../images/financial.jpg')} alt="First slide" className="imagecalci" />
//                     <p className="colorcalci">During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
//                                 hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
//                                 The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
//                                 Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
//                                 guest and shelterer, hospitality, friendliness, and hospitable reception.</p>
//                     {/* <p className="legend">Legend 1</p> */}
//                 </div>
//                 <div>
//                     <img src={require('../images/download1.jpg')} alt="Second slide" className="imagecalci" />
//                     <p className="colorcalci">During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
//                                 hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
//                                 The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
//                                 Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
//                                 guest and shelterer, hospitality, friendliness, and hospitable reception.</p>
//                 </div>
//                 <div>
//                     <img src={require('../images/download4.jpeg')} alt="Second slide" />
//                     <p className="colorcalci">During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
//                                 hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
//                                 The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
//                                 Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
//                                 guest and shelterer, hospitality, friendliness, and hospitable reception.</p>>
//                 </div>
//             </Carousel>
//         );
//     }
// };

// // ReactDOM.render(<Calculator />, document.querySelector('.demo-carousel'));
// export default Calculator;
import React from "react";
import DatePicker from "react-datepicker";
// import './demo.css'
import "react-datepicker/dist/react-datepicker.css";
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <div className='demobody'>
       <span className='date'>
      <DatePicker 
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      </span> 
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />
      </div>
    );
  }
}

export default Example;