import React from 'react'
import Spinner1 from './Spinner1'

const Hoc = WrappedComponent =>{
    return class Hoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = { 
                timeup : true
             };

            
            setTimeout(() => {
                this.setState({
                    timeup: false
                })
            }, 2000);

        }
      
        render() { 
            return this.state.timeup ? (<Spinner1/>) : (<WrappedComponent{...this.props}/>)
        
        }
    }
}
     
    export default Hoc;

