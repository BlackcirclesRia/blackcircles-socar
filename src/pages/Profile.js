import * as React from 'react';
import Box from '@mui/material/Box';
import  Navbar  from '../component/Navbar';
import  Appbar  from '../component/Appbar';
import  ProfileTable  from '../component/ProfileTable';
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/Profile';


export default function Profile() {
    return (
            <Box css={wrap} sx={{ display: 'flex' }}>
               <Navbar></Navbar>
                <Box component="main" className="main_wrap">
                    <Appbar></Appbar>
                    <Box  className="content">
                        <ProfileTable></ProfileTable>
                    </Box>
                </Box>
            </Box>
    );
}
