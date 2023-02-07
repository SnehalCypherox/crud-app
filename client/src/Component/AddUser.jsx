import { useState } from 'react';
import { FormGroup, Paper, Input, Button, FormLabel, FormControl } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({ name: '', email: '', rollno: '' });

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <div className='form-wrapper'>
            <Paper elevation={5} className="card">
                <FormGroup>
                    <FormControl>
                        <FormLabel> Name :</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name='name' type='text' className='form-control' />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Email :</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name='email' type='email' className='form-control' />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Roll No :</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name='rollno' type='number' className='form-control' />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" onClick={() => addUserDetails()} color="info" className='btn'>
                            Add Student
                        </Button>
                    </FormControl>
                </FormGroup>
            </Paper>
        </div>


    )
}

export default AddUser;