import { useState, useEffect } from 'react';
import { FormGroup, FormControl, Input, Button, Paper, FormLabel } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const EditUser = () => {
    const [user, setUser] = useState({ name: '', email: '', rollno: '' });
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className='form-wrapper' injectFirst>
            <Paper elevation={5} className='card'>
                <FormGroup >
                    <FormControl>
                        <FormLabel> Name:</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name='name' className='form-control' value={user.name}  aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Email:</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name='email' className='form-control' value={user.email}  aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Roll number:</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name='rollno' className='form-control' value={user.rollno}  aria-describedby="my-helper-text"  />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" color="success" onClick={() => editUserDetails()} className='btn'>
                            Edit Student
                        </Button>
                    </FormControl>
                </FormGroup>
            </Paper>

        </div>

    )
}

export default EditUser;