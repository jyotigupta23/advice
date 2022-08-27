import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state = { advice:''}; //value!

    componentDidMount(){
        // axios.get(); //since required many times, will create a seprate funtion fetchAdvice
        // console.log('COMPONENT DID MOUNT')
        this.fetchAdvice();
    }
    fetchAdvice = ()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            // console.log(response.data.slip.advice);

            const {advice} = response.data.slip;
            this.setState({advice}); //when property name is equal to value name we prefer using once.


        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        const {advice} = this.state;
        return(
            // <h1>{advice}</h1> //<h1>{this.state.advice}</h1>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}export default App;