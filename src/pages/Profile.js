import * as React from 'react';
import Box from '@mui/material/Box';
import  Navbar  from '../component/Navbar';
import  ProfileTable  from '../component/ProfileTable';
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/Navbar';


export default function Profile() {
    return (
            <Box css={wrap} sx={{ display: 'flex' }}>
               <Navbar></Navbar>
                <Box component="main" className="main_wrap">
                    <ProfileTable></ProfileTable>
                </Box>
            </Box>
    );
}
