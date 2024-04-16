import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';


const useStyles = makeStyles({
    drawerBox: {
        backgroundColor: 'green',
        marginLeft: 100
    }
})

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        backgroundColor: '#043013',
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: '#043013',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#043013de',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: 'green',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DrawerOne() {

    const classes = useStyles();

    return (
        <Box >
            <Drawer variant="permanent" className={classes.drawerBox}>
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MenuIcon sx={{ color: 'white' }} />
                </DrawerHeader>

                <List>
                    <ListItem disablePadding sx={{ display: 'block', backgroundColor: '#25db63', borderRadius: '15px' }}>
                        <ListItemButton                        >
                            <ListItemIcon>
                                <AddIcon sx={{ color: '#a4fa06' }} fontSize='large' />
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box sx={{ width: '95%', height: '350px', border: '0px solid white', marginTop: '50px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                    <List>

                        <ListItem disablePadding sx={{ display: 'block', borderRadius: '15px' }}>
                            <ListItemButton                            >
                                <ListItemIcon                                >
                                    <Box sx={{ backgroundColor: '#188515', width: '55px', height: '40px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-12px' }}>
                                        <Inventory2OutlinedIcon sx={{ color: '#a4fa06' }} />
                                    </Box>
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block', borderRadius: '15px' }}>
                            <ListItemButton                            >
                                <ListItemIcon                                >
                                    <WarningAmberOutlinedIcon sx={{ color: '#a4fa06' }} />
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block', borderRadius: '15px' }}>
                            <ListItemButton                            >
                                <ListItemIcon                                >
                                    <Person3OutlinedIcon sx={{ color: '#a4fa06' }} />
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block', borderRadius: '15px' }}>
                            <ListItemButton                            >
                                <ListItemIcon                                >
                                    <WaterDropOutlinedIcon sx={{ color: '#a4fa06' }} />
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block', borderRadius: '15px' }}>
                            <ListItemButton                            >
                                <ListItemIcon                                >
                                    <SettingsOutlinedIcon sx={{ color: '#a4fa06' }} />
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block', borderRadius: '15px' }}>
                            <ListItemButton                            >
                                <ListItemIcon                                >
                                    <HandymanOutlinedIcon sx={{ color: '#a4fa06' }} />
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
