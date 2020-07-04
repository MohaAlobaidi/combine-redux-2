import React, { Component } from 'react';

import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  render(){
    console.log(this.props)
    return (
      <div className="App">

     <div className='col'>
         <div> <span>A :</span>  <span> {this.props.a}</span></div>
          <button onClick={ ()=>this.props.updateA(this.props.b) }> Update A</button>
     </div>

     <div className='col'>
       <div>   <span>B :</span>  <span> {this.props.b}</span></div>
          <button onClick={()=> this.props.updateB(this.props.a)}> Update B </button>
     </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    a:state.rootA.A,
    b:state.rootB.B
  }
}


function mapDispatchToProps(dispatch){
  return{
    updateA: (b)=>(dispatch( { type:'UPDATE_A',b:b })),// key b: value b(mapStateToProps line 30)
    updateB: (a)=>(dispatch ({ type:'UPDATE_B',a:a}))// key a: value a (mapStateToProps line 29)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
