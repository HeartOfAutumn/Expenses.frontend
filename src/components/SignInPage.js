import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, FormControl, InputGroup } from "react-bootstrap"
import { SignIn } from "../services/authentication";

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return <div style={{ width: '30rem', margin: 'auto', paddingTop: '8px' }}>
    <Form onSubmit={event => {
      event.preventDefault();
      SignIn(dispatch, { username, password });
    }}>
      <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
      <InputGroup className='mb-3'>
        <FormControl placeholder='Username'
          onChange={event => setUsername(event.target.value)}></FormControl>
      </InputGroup>
      <InputGroup className='mb-3'>
        <FormControl placeholder='Password' type="password"
          onChange={event => setPassword(event.target.value)}></FormControl>
      </InputGroup>
      <Button
        type='submit'
        variant='primary'
        style={{ margin: 'auto', display: 'block', width: '10rem' }}>
        SignIn
      </Button>
    </Form>
  </div>
};

export default SignInPage;