import React from 'react'
import ReactDom from 'react-dom'

class FirstRef extends React.Component {
    constructor(){
        super();
        this .state = {count: 0}
    }

    updateByUsingRefs(e){
        this.setState({count:this.refs.countRef.value})
    }

    render(){
        return(
            <div>
                Counts<input type="text" ref="counterRef" onChange = {this.updateByUsingRefs.bind(this)}/>
                <br/>
                <p>{this.state.count}</p>
  
                ReactDOM.render(<FirstRef/>, document.getElementById('root'));

  
            </div>
        );
    }
}
export default FirstRef