import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'Assets/Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown } from 'antd';
import { useAuth } from 'Context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

export default function Navbar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.45),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <Link className='nav-link' rel="noopener noreferrer" to='/categories'>
  //         Categories
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <Link className='nav-link' rel="noopener noreferrer" to="/cart">
  //         Cart
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <Link className='nav-link' rel="noopener noreferrer" to='/checkout'>
  //         Checkout
  //       </Link>
  //     ),
  //   },
  // ];


  const { isAuthenticated,dispatch } = useAuth()
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch({type:"LOGOUT"})
      window.notify('Logged out','success')
    }).catch(() => {
      window.notify('Something went wrong!','error')
    });
  }

  return (
   <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold bg-navColor">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          <img src={logo} alt="FURN-Logo" width="50" height="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/addEvent'>Add Event</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/events'>Events</Link>
            </li>
            {/* <Dropdown
              menu={{
                items,
                selectable: true,
              }}
              placement="bottom"
            >
              <Link className='nav-link'>Pages<DownOutlined /></Link>
            </Dropdown> */}
            <li className="nav-item">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  className='w-100'
                />
              </Search>
            </li>
          </ul>
          {
            !isAuthenticated ? <Link className='nav-link me-2 my-2 my-md-0' to="/auth/login">Sign in</Link>
              : <Button variant='contained' onClick={handleLogout}>Sign out</Button>
          }
          <button type="button" className="btn position-relative p-0 mb-4 mb-md-0 me-0 me-md-3">
          </button>

        </div>

      </div>
    </nav>
   </>
  )
}
