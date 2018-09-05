import React, { Component } from 'react';
import Display from './Display';
const axios = require('axios');

class NotSafeForWork extends Component {
    constructor(){
        super();
        this.state = {
            quotes: []
        }
    }
    ComponentDidMount(){
        axios.get('http://locolhost/8080')
             .then(results=>{
                 let mimic = Array.from(this.state.quotes);
                 let resultsData = results.data;
                 for (let x = 0; x < resultsData.length; x++) {
                     mimic.push(resultsData[x]);  
                 }
                 this.setState({
                     quotes:mimic
                 });
             })
             .catch(error=>{
                 console.log('God Lord that did not work');
             });
    }


    render() {
        return (
            <div>
                <h2>I'm Coming Shorsey!</h2>
                <div>
                    <Display quotes = {this.state.quotes} paragraphs = {this.props.paragraphs}/>
                </div>
            </div>
        );
    }
}

export default NotSafeForWork;