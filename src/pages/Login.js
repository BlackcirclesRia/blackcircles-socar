import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/login';
import mainlogo from "../img/logo/logo1.png";

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div css={wrap}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className="container">
                    <img className="logo" src={mainlogo} alt="" />
                    <Typography component="subtitle1" variant="subtitle1">Fleet Management System</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="id" label="아이디를 입력해주세요." name="id" autoComplete="id" autoFocus/>
                        <TextField margin="dense" required fullWidth name="password" label="비밀번호를 입력해주세요." type="password" autoComplete="current-password"/>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 1 }}>로그인</Button>
                        <Button className="btn" type="button" fullWidth variant="outlined" sx={{ mt: 0, mb: 1 }}>
                            <Link href="#" variant="body2">아이디 찾기</Link>
                        </Button>
                        <Button className="btn" type="button" fullWidth variant="outlined" sx={{ mt: 0, mb: 2 }}>
                            <Link href="#" variant="body2">
                                비밀번호 찾기
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}