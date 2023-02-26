import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
    createStyles,
} from '@mantine/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from 'Config/Firebase'
import { doc, setDoc } from 'firebase/firestore';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}
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
        ":hover": {
            backgroundColor: '#db855f'
        }
    },
}));
export default function Login() {
    const { classes } = useStyles();
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        const { name, email, password } = state
        if (state.password !== state.confirmPassword) {
            return window.notify('Password does not match', 'error')
        }
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setDocumnet(user)
            })
            .catch(() => {
                window.notify('Something went wrong!', 'error')
                setLoading(false)
            });
        const setDocumnet = async (user) => {
            try {
                await setDoc(doc(firestore, "users", user.uid), {
                    id: window.getRandomId(),
                    Email: user.email,
                    displayName: name,
                })
            } catch (err) {
                window.notify('Something went wrong!', 'error')
            } finally {
                window.notify('Account created!', 'success')
                setState(initialState)
                setLoading(false)
                navigate('/auth/login')
            }
        }
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center bg-Image' style={{ height: "100vh" }}>
                <Container size={420} my={40} style={{ width: '420px', position: 'relative' }}>
                    <Title
                        align="center"
                        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                    >
                        Get started!
                    </Title>

                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput label="Name" placeholder="Your name" onChange={handleChange} value={state.name} name="name" required />
                        <TextInput label="Email" placeholder="abc@example.xyz" mt="md" onChange={handleChange} value={state.email} name="email" required />
                        <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={handleChange} value={state.password} name="password" />
                        <PasswordInput label="Password" placeholder="Confirm password" required mt="md" onChange={handleChange} value={state.confirmPassword} name="confirmPassword" />
                        <Text color="dimmed" size="sm" align="center" mt={5}>
                            Already have an?
                            <Link to='/auth/login'>account</Link>
                        </Text>
                        {
                            loading ? <Button fullWidth mt="xl" className={classes.control} loading>Sign up</Button>
                                : <Button fullWidth mt="xl" className={classes.control} onClick={handleSubmit} >
                                    Sign up
                                </Button>
                        }
                    </Paper>
                </Container >
            </div>
        </>
    );
}