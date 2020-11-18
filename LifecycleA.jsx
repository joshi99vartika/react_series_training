import React, { Component } from 'react'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"vartika"
         }
         console.log('lifecycleA - constructor')
     }
     
     static getDerivedStateFromProps(props, state){
         console.log('lifecycleA- getderivedStateFromProps')
         return null
     }


     componentDidMount(){
         console.log('lifecycleA -componentDidMount')
     }

    render() {
        console.log('lifecycleA-render')
        return (
            <div>
                lifecycleA
            </div>
        )
    }
}

export default LifecycleA
