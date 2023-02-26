import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  createStyles,
} from '@mantine/core';
import { useAuth } from 'Context/AuthContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
      [theme.fn.smallerThan('xs')]: {
          flexDirection: 'column-reverse',
      },
  },

  control: {
      [theme.fn.smallerThan('xs')]: {
          width: '100%',
          textAlign: 'center',
      },
      backgroundColor: '#fd8f5e',
      ":hover":{
        backgroundColor:'#db855f'
      }
  },
}));
const initialState = {
  email: "",
  password: ""
}
export default function Login() {
  const { classes } = useStyles();
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { dispatch } = useAuth()

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  const handleSubmit = () => {
    const { email, password } = state
    if (email.length === 0 || password.length === 0) {
      window.notify( 'Please the input feilds!','error')
    }
    setLoading(true)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: { user } })
        navigate('/')
        window.notify('Welcome back!', 'success')
      })
      .catch((error) => {
        const errorMessage = error.message;
        let msg;
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          msg = 'User not found!'
        }
        else if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          msg = "Check your network!"
        }
        else {
          msg = "Something went wrong!"
        }
        window.notify(msg,'error')
        setLoading(false)
      });
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-Image' style={{ height: "100vh" }}>
        <Container size={420} my={40} style={{ width: '420px', position: 'relative' }}>
          <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
          >
            Welcome back!
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="abc@xyz.co" required name='email' value={state.email} onChange={handleChange}/>
            <PasswordInput label="Password" placeholder="Your password" required mt="md" name='password' onChange={handleChange} value={state.password}/>
            <Group position="apart" mt="lg">
              <Link to='/auth/createAccount' size="sm">
              Create account
            </Link>
              <Link to='/auth/forgotPassword' size="sm">
                Forgot password?
              </Link>
            </Group>
            {
              !loading ? <Button fullWidth mt="xl" className={classes.control} onClick={handleSubmit}>
              Sign in
            </Button>
            :
            <Button fullWidth mt="xl" className={classes.control} loading>
              Sign in
            </Button> 
            }
          </Paper>
        </Container >
      </div>
    </>
  );
}