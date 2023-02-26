import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Router from 'Pages/Router';
import { ThemeProvider } from '@mui/material/styles';
import 'Components/Global'

import theme from 'Components/muiTheme'
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from 'Context/AuthContext';
function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
