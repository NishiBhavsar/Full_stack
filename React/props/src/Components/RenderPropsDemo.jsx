import React from 'react'

class ParentSampleRenderProps extends React.Component {
    render() {
      return (
        <ChildSampleRenderProps
          render={() => {
            return (
              <div>
                <h3> 
                    I am coming from parent sample render props.
                </h3>
              </div>
            )
          }}
        />
      )
    }
  }

class ChildSampleRenderProps extends React.Component {
    render() {
      return (
        <div>
          <h2>I am Child Render Prop Component</h2>
          {this.props.render()}
        </div>
      )
    }
  }
    
  
    
  export default ParentSampleRenderProps;