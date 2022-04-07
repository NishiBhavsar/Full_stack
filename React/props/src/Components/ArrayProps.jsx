import React from 'react'
import  ReactDOM  from 'react-dom'

class ArrayProps extends React.Component{
    render(){
        return(
                <div>
                    <h1>
                        {this.props.persons.map((per,index) => <>Person:{index + 1} - {per}<br /></>)}
                    </h1>
                </div>
            );
    }
}
 
ArrayProps.defaultProps = {persons: ['Nishi', 'Vishruti', 'Tej']}
 
ReactDOM.render(<ArrayProps/>,document.getElementById("root"));

export default ArrayProps