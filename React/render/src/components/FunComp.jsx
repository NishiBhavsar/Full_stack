import  ReactDOM  from 'react-dom';
import ChildComp from './Child';
function Fun(){    
    return(
    <>
    <h1>First Render!!</h1>
    <ChildComp/>
    </>
    );
}
ReactDOM.render(<Fun/>,document.getElementById('root'));
export default Fun;