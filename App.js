import React, { Component } from 'react'
import LifecycleA from './LifecycleA'

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             name :"vartika"
        };
    }
    
    static getDerivedStateFromProps(props,state){

       console.log(props,state);
       return null;
       
    }
        render() {
            
        return (
            <div>
                <LifecycleA/>
             </div>
        );
    }
}

export default App
