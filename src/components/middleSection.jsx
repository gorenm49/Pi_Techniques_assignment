import Box from '@mui/material/Box';
import React from 'react'
import { makeStyles } from '@mui/styles';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton, Paper, Typography } from '@mui/material';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import AnchorIcon from '@mui/icons-material/Anchor';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SwipeIcon from '@mui/icons-material/Swipe';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PushPinIcon from '@mui/icons-material/PushPin';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const useStyles = makeStyles({
    mainMiddlebox: {
        width: '92vw',
        height: '100vh',
        border: '0px solid red',
        marginLeft: '6%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    mainMiddleboxChild1: {
        width: '32%',
        height: '100%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    mainMiddleboxChild2: {
        width: '68%',
        height: '100%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    mainMiddleboxSubChild1: {
        width: '95%',
        height: '170px',
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundColor: '#ebe3eb'
    },
    mainMiddleboxSubChild2: {
        width: '95%',
        height: '670px',
        border: '0px solid black',
        marginTop: '20px',
       // backgroundColor:'#f3f4f4'
    },
    mainMiddleboxSub1Child2: {
        width: '100%',
        height: '120px',
        border: '0px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f4f4',
    },
    mainMiddleboxSub2Child2: {
        width: '100%',
        height: '40px',
        border: '1px solid #cacdcd',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    mainMiddleboxSub3Child2: {
        width: '100%',
        height: '60px',
        border: '0px solid black',
    },
    mainMiddleboxSub4Child2: {
        width: '100%',
        height: '640px',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mainMiddleboxSub4Child2_1: {
        width: '96%',
        height: '19%',
        border: '0px solid red',
        backgroundColor: '#f3f4f4',
        borderRadius: '5px',
    },
    mainMiddleboxSub4Child2_2: {
        width: '96%',
        height: '49%',
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        // backgroundColor: '#f4f8f8',
        backgroundColor:'#f3f4f4'


    },
    mainMiddleboxSub4Child2_3: {
        width: '96%',
        height: '29%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#f4f8f8'
        backgroundColor:'#f3f4f4'

    },
    mainMiddleboxSubChild1_1: {
        width: '48%',
        height: '90%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mainMiddleboxSubChild1_2: {
        width: '48%',
        height: '90%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mainMiddleboxSubChild1_1_search: {
        width: '95%',
        height: '35px',
        border: '0px solid red',
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#d7c9d4'
    },
    mainMiddleboxSubChild1_1_group: {
        width: '88%',
        height: '80px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    mainMiddleboxSubChild1_1_group_line: {
        width: '100%',
        border: '1px solid grey'
    },
    mainMiddleboxSubChild1_1_group_div: {
        width: '100%',
        height: '30px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainMiddleboxSubChild1_2_search: {
        width: '70%',
        height: '35px',
        border: '0px solid red',
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#d7c9d4'
    },
    mainMiddleboxSubChild2_box: {
        width: '100%',
        height: '120px',
        border: '0px solid black',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8px',
        backgroundColor:'#f3f4f4 !important'
    },
    mainMiddleboxSubChild2_subBox: {
        width: '90%',
        height: '90px',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor:'#f3f4f4'
    },
    blueBoxFormat: {
        width: '140px',
        height: '30px',
        borderRadius: '7px',
        backgroundColor: '#87f2fd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    TabCss: {
        maxWidth: '100%'
    }
})


function MiddleSection() {

    const classes = useStyles();
    return (
        <Box className={classes.mainMiddlebox}>
            <Box className={classes.mainMiddleboxChild1}>
                <Box className={classes.mainMiddleboxSubChild1}>
                    <Box className={classes.mainMiddleboxSubChild1_1}>
                        <Box className={classes.mainMiddleboxSubChild1_1_search}>
                            <DirectionsBoatOutlinedIcon sx={{color:'grey'}}/>
                            <Typography fontSize='13px' fontFamily='Default'>My Resposibilities</Typography>
                            <SearchIcon sx={{color:'grey'}}/>
                        </Box>
                        <Box className={classes.mainMiddleboxSubChild1_1_group} >
                            <Typography fontSize='11px' fontFamily='Default' textAlign='left'>Coy id</Typography>
                            <Typography fontSize='11px' fontFamily='Default' textAlign='left'>Enter Coy id</Typography>
                            <Box className={classes.mainMiddleboxSubChild1_1_group_line} ></Box>
                            <Box className={classes.mainMiddleboxSubChild1_1_group_div} >
                                <Typography sx={{ textDecoration: 'underline' }} fontSize='14px' fontWeight='600' fontFamily='Default' textAlign='left'>Sort</Typography>
                                <KeyboardArrowDownTwoToneIcon />
                                <Typography sx={{ textDecoration: 'underline' }} marginLeft='5px' fontSize='14px' fontWeight='600' fontFamily='Default' textAlign='left'>Group By</Typography>
                                <KeyboardArrowDownTwoToneIcon />
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.mainMiddleboxSubChild1_2}>
                        <Box sx={{ display: 'flex', width: '92%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box className={classes.mainMiddleboxSubChild1_2_search}>
                                <Typography fontSize='13px' fontFamily='Default'>PO</Typography>
                                <KeyboardArrowDownTwoToneIcon />
                            </Box>
                            <Badge badgeContent={10} color='success' >
                                <IconButton sx={{ background: 'black' }}>
                                    <TuneSharpIcon fontSize='small' sx={{ color: 'green !important' }} />
                                </IconButton>
                            </Badge>

                        </Box>

                        <Box className={classes.mainMiddleboxSubChild1_1_group} >
                            <Typography fontSize='11px' fontFamily='Default' textAlign='left'>Order no</Typography>
                            <Typography fontSize='11px' fontFamily='Default' textAlign='left'>Enter order no</Typography>
                            <Box className={classes.mainMiddleboxSubChild1_1_group_line} ></Box>
                            <Box className={classes.mainMiddleboxSubChild1_1_group_div} >
                                <Typography sx={{ textDecoration: 'underline', marginLeft: '65px' }} fontSize='14px' fontWeight='600' fontFamily='Default' textAlign='right'>Clear</Typography>
                                <Typography sx={{ textDecoration: 'underline' }} marginLeft='5px' fontSize='14px' fontWeight='600' fontFamily='Default' textAlign='right'>Search</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.mainMiddleboxSubChild2}>
                    <Box sx={{ width: '100%', height: '40px', border: '0px solid red', display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ marginLeft: '10px' }} fontSize='17px' fontWeight='500' fontFamily='Default' textAlign='left'>ORDERS</Typography>
                        <Box sx={{ width: '22px', height: '22px', borderRadius: '100px', backgroundColor: '#b4a8b4', marginLeft: '5px' }}>8</Box>
                    </Box>
                    <Paper elevation={1} className={classes.mainMiddleboxSubChild2_box} sx={{ border: '1px solid black' }}>
                        <Box className={classes.mainMiddleboxSubChild2_subBox}>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black' }}>
                                    <Typography fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>4907 - 00019</Typography>
                                    <Typography fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>HOTEL/TECH WORK SQUAD GFR</Typography>

                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <AnchorIcon sx={{ color: 'grey' }} />
                                    <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>RT</Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Box className={classes.blueBoxFormat}>
                                        <DirectionsBoatFilledOutlinedIcon fontSize='small' />
                                        <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='left'>Lorem ipsum</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>Services</Typography>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>12 Jul 2019</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={1} className={classes.mainMiddleboxSubChild2_box}>
                        <Box className={classes.mainMiddleboxSubChild2_subBox}>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black' }}>
                                    <Typography color='green' fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>5325 - 00034</Typography>
                                    <Typography fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>SAFETY EQUIPEMENT - COMPULSORY SPARES</Typography>

                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'red', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>TQ</Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Box className={classes.blueBoxFormat}>
                                        <DirectionsBoatFilledOutlinedIcon fontSize='small' />
                                        <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='left'>Lorem ipsum</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography fontSize='14px' fontWeight='200' fontFamily='Default' textAlign='right'>Consumables</Typography>
                                    <Typography fontSize='14px' fontWeight='200' fontFamily='Default' textAlign='right'>04 Mar 2020</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={1} className={classes.mainMiddleboxSubChild2_box}>
                        <Box className={classes.mainMiddleboxSubChild2_subBox}>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black' }}>
                                    <Typography color='green' fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>4907 - 00038</Typography>
                                    <Typography fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>EM SPARES FOR INTERSTAGE FILTER UNIT</Typography>

                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <PushPinIcon sx={{ color: 'grey' }} />
                                    <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'orange', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>EO</Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Box className={classes.blueBoxFormat}>
                                        <DirectionsBoatFilledOutlinedIcon fontSize='small' />
                                        <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='left'>Lorem ipsum</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>Spares</Typography>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>26 Jul 2022</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={1} className={classes.mainMiddleboxSubChild2_box}>
                        <Box className={classes.mainMiddleboxSubChild2_subBox}>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black' }}>
                                    <Typography color='green' fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>5325 - 00040</Typography>
                                    <Typography fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>FUEL.LUBE / AIR / WATER.SAVAGE SYSTEM</Typography>

                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <PushPinIcon sx={{ color: 'grey' }} />
                                    <AnchorIcon sx={{ color: 'grey' }} />
                                    <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>RT</Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Box className={classes.blueBoxFormat}>
                                        <DirectionsBoatFilledOutlinedIcon fontSize='small' />
                                        <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='left'>Lorem ipsum</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>Spares</Typography>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>10 Mar 2019</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={1} className={classes.mainMiddleboxSubChild2_box}>
                        <Box className={classes.mainMiddleboxSubChild2_subBox}>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black' }}>
                                    <Typography color='green' fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>4907 - 00050</Typography>
                                    <Typography fontSize='12px' fontWeight='600' fontFamily='Default' textAlign='left'>HOBART FX-A_SEF VSP UNDERCOUNTER</Typography>

                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <ErrorOutlineIcon sx={{ color: 'grey' }} />
                                    <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>RT</Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '50%', border: '0px solid red', display: 'flex' }}>
                                <Box sx={{ width: '75%', height: '100%', border: '0px solid black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Box className={classes.blueBoxFormat}>
                                        <DirectionsBoatFilledOutlinedIcon fontSize='small' />
                                        <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='left'>Lorem ipsum</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '25%', height: '100%', border: '0px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>Spares</Typography>
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='right'>21 Nov 2019</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
            <Paper elevation={1} className={classes.mainMiddleboxChild2}>
                <Box className={classes.mainMiddleboxSub1Child2}>
                    <Box sx={{ width: '96%', height: '80%', border: '0px solid red', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ width: '100%', height: '40%', border: '0px solid red', display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '60%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>RT</Typography>

                                </Box>

                                <Typography marginLeft='10px' fontSize='15px' fontWeight='bold' fontFamily='Default' textAlign='left'>4907 - 00019</Typography>
                                <Typography marginLeft='10px' fontSize='15px' fontWeight='bold' fontFamily='Default' textAlign='left'>HOTEL/TECH WORK SQUAD GFR</Typography>

                            </Box>
                            <Box sx={{ width: '20%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Box className={classes.blueBoxFormat}>
                                    <DirectionsBoatFilledOutlinedIcon fontSize='small' />
                                    <Typography fontSize='15px' fontWeight='500' fontFamily='Default' textAlign='left'>Lorem ipsum</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', height: '60%', border: '0px solid red', display: 'flex', }}>
                            <Box sx={{ width: '70%', height: '100%', display: 'flex', border: '0px solid blue', }}>
                                <Box sx={{ width: '20%', height: '100%', border: '0px solid green', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>Date Requested</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>10 Jul 2019</Typography>

                                </Box>
                                <Box sx={{ width: '20%', height: '100%', border: '0px solid green', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>Type</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>Services</Typography>
                                </Box>
                                <Box sx={{ width: '50%', height: '100%', border: '0px solid green', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>Account Code</Typography>
                                    <Typography fontSize='13px' fontWeight='bold' fontFamily='Default' textAlign='left'>5830042 - HM PAX ACCOMODATION (LABOUR)</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ width: '30%', height: '100%', display: 'flex', border: '0px solid blue', display: 'flex', justifyContent: 'Space-evenly', alignItems: 'center' }}>
                                <Typography fontSize='13px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', textDecoration: 'underline' }}>Order Summery</Typography>
                                <Typography fontSize='13px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', textDecoration: 'underline' }}>Order Progress</Typography>

                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.mainMiddleboxSub2Child2}>
                    <Box sx={{ width: '18%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <SaveAsIcon color='success' />
                        <Typography marginLeft='5px' fontSize='12px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', }}>Edit Order Details</Typography>

                    </Box>
                    <Box sx={{ width: '18%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <LocalPrintshopIcon color='success' />
                        <Typography marginLeft='5px' fontSize='12px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', }}>Print Order Details</Typography>
                    </Box>
                    <Box sx={{ width: '18%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <FileOpenIcon color='success' />
                        <Typography marginLeft='5px' fontSize='12px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', }}>Change Delivery Status</Typography>

                    </Box>
                    <Box sx={{ width: '14%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <ReceiptLongIcon color='success' />
                        <Typography marginLeft='5px' fontSize='12px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', }}>Reports</Typography>
                    </Box>
                    <Box sx={{ width: '18%', height: '100%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <SwipeIcon color='success' />
                        <Typography marginLeft='5px' fontSize='12px' fontWeight='bold' fontFamily='Default' sx={{ color: 'green', }}>Actions</Typography>
                    </Box>

                </Box>
                <Box className={classes.mainMiddleboxSub3Child2}>

                    <Box sx={{ borderBottom: 1, borderColor: '#cacdcd', width: '100%', fontSize: '10px', color: 'black' }}>
                        <Tabs value={0} aria-label="basic tabs example" size='small' className={classes.TabCss}>
                            <Tab size='small' label="Summery" />
                            <Tab size='small' label="order Lines" />
                            <Tab size='small' label="Suppliers" />
                            <Tab size='small' label="Analysis" />
                            <Tab size='small' label="Freight Details" />
                            <Tab size='small' label="Delivery" />
                            <Tab size='small' label="Invoice" />
                            <Tab size='small' label="Memos" />
                            <Tab size='small' label="NoteS & Attachments" />
                            <Tab size='small' label="Budgets" />
                        </Tabs>
                    </Box>
                </Box>
                <Box className={classes.mainMiddleboxSub4Child2}>
                    <Box className={classes.mainMiddleboxSub4Child2_1}>

                        <Box sx={{ width: '96', height: '98%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
                            <Box sx={{ display: 'flex', width: '100%', height: '50%', border: '0px solid red', alignItems: 'center' }}>
                                <Typography marginLeft='5px' fontSize='17px' fontWeight='bold' fontFamily='Default' sx={{ color: 'black', }}>
                                    COMPONENTS
                                </Typography>
                                <Box sx={{ width: '20px', height: '20px', borderRadius: '100px', marginLeft: '5px', backgroundColor: '#bfc2c2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>0</Box>
                            </Box>
                            <Typography marginLeft='5px' fontSize='17px' fontWeight='300' fontStyle='italic' fontFamily='Default' sx={{ color: 'grey', }}>No items found</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.mainMiddleboxSub4Child2_2}>
                        <Box sx={{ width: '97%', height: '95%', border: '0px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Box sx={{ width: '100%', height: '15%', border: '0px solid red', display: 'flex', alignItems: 'center' }} >
                                <Typography fontSize='17px' fontWeight='bold' fontFamily='Default' sx={{ color: 'black', }}>AUTHORIZED SUPPLIER</Typography>
                                <Box sx={{ width: '18%', height: '30px', borderRadius: '10px', backgroundColor: '#d7d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }}>
                                    <Typography fontSize='12px' fontWeight='300' fontFamily='Default' sx={{ color: 'black', }}>Ref: PRJ001963SRIN</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '20%', border: '0px solid red', display: 'flex', justifyContent: 'space-between' }} >
                                <Box sx={{ width: '16%', height: '100%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>Date Requested</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>10 Jul 2019</Typography>
                                </Box>
                                <Box sx={{ width: '16%', height: '100%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>Authorized By</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>Jim Darren</Typography>
                                </Box>
                                <Box sx={{ width: '16%', height: '100%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>Invoice Chased Date</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>-</Typography>
                                </Box>
                                <Box sx={{ width: '16%', height: '100%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>PO Chased Date</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>-</Typography>
                                </Box>
                                <Box sx={{ width: '16%', height: '100%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>PO Confirmed Date</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>-</Typography>
                                </Box>
                                <Box sx={{ width: '16%', height: '100%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <Typography fontSize='12px' fontWeight='400' fontFamily='Default'>PO Ref No.</Typography>
                                    <Typography fontSize='14px' fontWeight='bold' fontFamily='Default'>-</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '20%', border: '0px solid red', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }} >
                                <Typography fontSize='13px' fontWeight='bold' fontFamily='Default' sx={{ color: 'blue', }}>Repairs (Riding Squads / Manpower)</Typography>
                                <Box sx={{ width: '20%', height: '40%', border: '0px solid red', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <StarOutlinedIcon sx={{ color: 'yellow' }} />
                                    <StarOutlinedIcon sx={{ color: 'yellow' }} />
                                    <StarOutlinedIcon sx={{ color: 'yellow' }} />
                                    <StarOutlinedIcon sx={{ color: 'yellow' }} />
                                    <StarOutlineOutlinedIcon />
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: '40%', border: '0px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <Box sx={{ width: '100%', height: '25%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <LocationOnOutlinedIcon fontSize='small' color='success' />
                                    <Typography marginLeft='5px' fontSize='11px' fontWeight='600' fontFamily='Default' sx={{ color: 'green', }}>1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR</Typography>

                                </Box>
                                <Box sx={{ width: '100%', height: '25%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CallOutlinedIcon color='success' fontSize='small' />
                                    <Typography marginLeft='5px' fontSize='11px' fontWeight='600' fontFamily='Default' sx={{ color: 'green', }}>+44 (0) 1413051300</Typography>

                                </Box>
                                <Box sx={{ width: '100%', height: '25%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <RingVolumeOutlinedIcon color='success' fontSize='small' />
                                    <Typography marginLeft='5px' fontSize='11px' fontWeight='600' fontFamily='Default' sx={{ color: 'green', }}>+44 (0) 1413051300</Typography>

                                </Box>
                                <Box sx={{ width: '100%', height: '25%', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <MailOutlineOutlinedIcon fontSize='small' color='success' />
                                    <Typography marginLeft='5px' fontSize='11px' fontWeight='600' fontFamily='Default' sx={{ color: 'green', textDecoration: 'underline' }}>repairs@service.com</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.mainMiddleboxSub4Child2_3}>
                        <Box sx={{ width: '100%', height: '30px', border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '10px' }} >
                            <Typography marginLeft='5px' marginTop='5px' fontSize='17px' fontWeight='bold' fontFamily='Default' sx={{ color: 'black', }}>
                                SUPPLIER
                            </Typography>
                            <Box sx={{ width: '20px', height: '20px', borderRadius: '100px', marginLeft: '5px', backgroundColor: '#bfc2c2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</Box>

                        </Box>
                        <Box sx={{ width: '95%', height: '140px', border: '0px solid red', display: 'flex',marginTop:'20px', marginLeft:'30px'}}>
                        <TableContainer component={Paper} elevation={2}>
                            <Table  aria-label="simple table">
                                <TableHead sx={{ backgroundColor: '#f1f4f4' }}>
                                    <TableRow>
                                        <TableCell>Status</TableCell>
                                        <TableCell size='small' align="left">Supplier Name</TableCell>
                                        <TableCell size='small' align="left">Goods</TableCell>
                                        <TableCell size='small' align="left">Freight</TableCell>
                                        <TableCell size='small' align="left">Total</TableCell>
                                        <TableCell size='small' align="left">Cur</TableCell>
                                        <TableCell size='small' align="left">Base&nbsp;(USD)</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell size='small' component="th" scope="row">
                                                {row.status}
                                            </TableCell>
                                            <TableCell size='small' align="left">{row.name}</TableCell>
                                            <TableCell size='small' align="left">{row.goods}</TableCell>
                                            <TableCell size='small' align="left">{row.freight}</TableCell>
                                            <TableCell size='small' align="left">{row.total}</TableCell>
                                            <TableCell size='small' align="left">{row.cur}</TableCell>
                                            <TableCell size='small' align="left">{row.base}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </Box>
                       
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

function createData(status, name, goods, freight, total, cur, base) {
    return { status, name, goods, freight, total, cur, base };
}

const rows = [
    createData(<Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>TQ</Typography>
    </Box>, 'Engineering Co. Ltd', 3459.70, 0.00, 3459.70, 'EUR', 3811.92),

    createData(<Box sx={{ width: '25px', height: '25px', borderRadius: '100px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontSize='12px' fontWeight='500' fontFamily='Default' textAlign='left'>TQ</Typography>

    </Box>, 'Fintec Co. Ltd - SPARES', 4370.60, 0.00, 4370.60, 'USD', 4370.60),

];

export default MiddleSection

