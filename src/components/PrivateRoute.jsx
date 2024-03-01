import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children, isLoggedIn, ...rest}) => {


    return isLoggedIn ? children : <Navigate to='/login' {...rest} />
}
// rest parametar nam omogucava da predstavimo neki neodredjeni broj argumenata kao niz, i u ovom nasem kontekstu, rest props odnosi se na neke dodatne propertije koji nisu eksplicitno definisani

export default PrivateRoute;
