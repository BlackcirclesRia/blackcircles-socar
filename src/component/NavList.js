import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import mainlogo from "../img/logo/logo2.png";
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/Navbar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
export const Nav_logo = (
    <React.Fragment >
        <div css={wrap}>
            <ListSubheader className="logo_box" component="div" inset>
                <img className="logo" src={mainlogo} alt="" />
            </ListSubheader>
            <div className="logo_txt">
                <Typography  component="span" variant="span">Fleet Management System</Typography>
            </div>
            <div className="name_txt">
                <Typography  component="span" variant="span">토니정비나라</Typography>님
            </div>
            <ListItemButton className="btn_box">
                <Button variant="outlined">설정</Button>
                <Button variant="outlined">로그아웃</Button>
            </ListItemButton>
        </div>

    </React.Fragment>
);

export const Nav_menu = (
    <React.Fragment>
        <ListItemButton>
            <ListItemText primary="서비스 관리" />
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
    </React.Fragment>
);