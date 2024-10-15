
import { useDispatch, useSelector } from 'react-redux'
import {Form} from '../index'
import setUsers from '../../contexts/authSlice'
import users from '../../mock_data/users';

 function SignIn() {
    return (
        <>
            <Form/>
        </>
    )
}

export default SignIn