import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Paper from '@mui/material/Paper';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


const useStyles = makeStyles({
    mainHeaderBox: {
        backgroundColor: 'white !important',

    },
    boxOne: {
        color: 'black',
        marginLeft: '6%',
        width: '50%',
        height: '90%',
        border: '0px solid red',
        display: 'flex'
    },
    BoxTwo: {
        width: '23%',
        height: '90%',
        border: '0px solid blue',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    BoxTwoChild1: {
        width: '50%',
        height: '30px',
        border: '0px solid black',
        color: 'black',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center'

    }
})

export default function Header() {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1, border: '0px solid red', backgroundColor: 'white !important', color: "black" }}>
            <AppBar className={classes.mainHeaderBox} position="static">
                <Toolbar>
                    <Box className={classes.boxOne}>
                    <Typography fontSize='19px' fontWeight='600' fontFamily='Default' sx={{ color: 'black', }}>
                                    Procurement
                                </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, border: '0px solid red' }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={classes.BoxTwo}>
                        <Box sx={{ width: '25px', height: '25px', border: '1px solid black', borderRadius: '100% 100%',
                        display:'flex', alignItems:'center', justifyContent:'center'
                    }}>
                            <SearchOutlinedIcon fontSize='small' />
                        </Box>
                        <IconButton
                            size="small"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <NotificationsNoneOutlinedIcon sx={{color:'grey'}}/>
                        </IconButton>
                        <IconButton
                            size="small"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AppsOutlinedIcon fontSize='small' />
                        </IconButton>
                        <Paper elevation={3} className={classes.BoxTwoChild1}>
                            <Box sx={{ width: '20px', height: '20px', border: '1px solid red', borderRadius: '100px', border:'1px solid grey' }}>
                                <img src="../../profileIcon.png" alt="" width='100%' height='100%' />
                            </Box>
                            <Box sx={{ width: '50%', height: '20px', border: '0px solid red' }}>

                                <Typography variant="h10"
                                    fontWeight='bold' fontSize='12px'      >
                                    Daniel Rogers
                                </Typography>
                            </Box>
                            <Box sx={{ width: '20px', height: '20px' }}>
                                <ArrowDropDownOutlinedIcon />
                            </Box>
                        </Paper>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
