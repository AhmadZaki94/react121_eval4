import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
export const Home = () => {

    return (
        <div>
            <h1>Home Page</h1>

            <Link style={{ marginLeft: '5px', color: 'blue'}} to={'/company'}>
                Companies
            </Link>

            <Link style={{ marginLeft: '5px', color: 'blue'}} to='/employee'>
                Employees
            </Link>
        </div>
        
    )
}