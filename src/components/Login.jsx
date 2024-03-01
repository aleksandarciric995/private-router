import {useState} from "react";

const Login = ({onHandleLogin}) => { // onHandleLogin se poziva u viticastim zagradama jer je to props koji se prosledjuje dalje childrenima ili gde vec
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);

        const handleSubmit = (e) => {
            e.preventDefault();
            onHandleLogin();
        }

    return <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" onChange={e => setUsername(e.target.value)} value={username}/>
        <label htmlFor="Password">Password</label>
        <input type="text" id="Password" onChange={e => setPassword(e.target.value)} value={password}/>


        <input type="submit" value='login'/>
    </form>
}

export default Login;