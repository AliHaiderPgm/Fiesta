import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Center,
    Box,
} from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'Config/Firebase';

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

export function ForgotPassword() {
    const { classes } = useStyles();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = ()=>{
        setLoading(true)
        sendPasswordResetEmail(auth, email)
        .then(() => {
            window.notify('Reset email has been sent successfully.','success')
            setLoading(false)
        })
        .catch(() => {
            window.notify('Something went wrong!','error')
            setLoading(false)
        });

    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center bg-Image' style={{ height: "100vh" }}>
                <Container size={460} my={30} style={{ width: "460px", position: 'relative' }}>
                    <Title className={classes.title} align="center">
                        Forgot your password?
                    </Title>
                    <Text color="dimmed" size="sm" align="center">
                        Enter your email to get a reset link
                    </Text>

                    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                        <TextInput label="Your email" placeholder="me@mantine.dev" onChange={handleChange} value={email} required />
                        <Group position="apart" mt="lg" className={classes.controls}>
                            <Link to="/auth/login" style={{ fontSize: "14px" }}>
                                <Center inline>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <Box ml={5}>Back to login page</Box>
                                </Center>
                            </Link>
                            {
                                !loading ? <Button className={classes.control} onClick={handleSubmit}>Reset password</Button>
                                : <Button className={classes.control} loading>Reset password</Button> 
                            }
                        </Group>
                    </Paper>
                </Container>
            </div>
        </>
    );
}