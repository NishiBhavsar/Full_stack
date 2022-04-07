import {AppBar, Toolbar, makeStyles, withTheme} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles({
    header:{
        background:'black'
    },
    tabs:{
        color: 'white',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }

})

const NavBar = () =>{
    const classes = useStyle();
    return(
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to='./'>First</NavLink>
                <NavLink className={classes.tabs} to='./SecondComp'>Second</NavLink>
                <NavLink className={classes.tabs} to='./ThirdComp'>Third</NavLink>
            </Toolbar>
        </AppBar>    
    )
}
export default NavBar