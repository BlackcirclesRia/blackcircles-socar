import * as React from 'react';
import Box from '@mui/material/Box';
import  Navbar  from '../component/Navbar';
import  Appbar  from '../component/Appbar';
import  ManageTable  from '../component/ManageTable';
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/Profile';


export default function Manage() {
    return (
            <Box css={wrap} sx={{ display: 'flex' }}>
               <Navbar></Navbar>
                <Box component="main" className="main_wrap">
                    <Appbar></Appbar>
                    <Box  className="content">
                        <ManageTable></ManageTable>
                    </Box>ß
                </Box>
            </Box>
    );
}
