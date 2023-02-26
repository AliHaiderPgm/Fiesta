import { createTheme } from '@mui/material';

    const theme = createTheme({
        palette: {
          primary: {
            main: "#e7aa5b",
          },
        },
        components:{
          MuiButton:{
            styleOverrides:{
              root:{
                color: "#fff",
                fontWeight: "bold",
                ":hover":{
                  backgroundColor:'#edc56a'
                }
              },
            },
          },
        },
      });

export default theme
