import { createStyles, Overlay, Container, Title, Text } from '@mantine/core';
import Button from '@mui/material/Button';
const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://img.freepik.com/free-photo/close-up-shiny-glassware-standing-dinner-plate_8353-664.jpg?w=900&t=st=1677395148~exp=1677395748~hmac=4eedc8c47bb726ff3169aa9ef0a1c7f06bf370836fab65e4f62028c8b5b4f3b3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
    background: '#deb887',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function Header() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Discover Events</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        {/* <Button variant="filled" size="xl" radius="xl" className={classes.control}>
          Get started
        </Button> */}
        <Button variant="contained" className='mt-2 p-3 rounded'>Get Started</Button>
      </Container>
    </div>
  );
}