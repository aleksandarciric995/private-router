import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return <>
    <h1>
        Page not found 404
        <button onClick={() => navigate(`/`)}>Go home</button>
    </h1>
    </>
}

export default PageNotFound;