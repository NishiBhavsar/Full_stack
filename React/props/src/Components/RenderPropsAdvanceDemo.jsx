import React from 'react';

class PersonCompany extends React.Component {

    render() {
      return (
        <div>
          
          <h1>Move the mouse around!</h1>

            <Company render={mouse=>(<Person mouse={mouse} />)}/>
        </div>
      );
    }
  }
    class Company extends React.Component {
      constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
      }
    
      handleMouseMove(event) {
        this.setState({
          x: event.clientX,
          y: event.clientY
        });
      }
    
      render() {
        return (
          <div style={{ height: '200px' }} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)}
          </div>
        );
      }
    }
class Person extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
          <>
            <div>{mouse.x} - {mouse.y}</div>
            <img src={process.env.PUBLIC_URL + '/sky9.png'} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt='Sky9' />
         </>
      );
    }
  }
  export default PersonCompany