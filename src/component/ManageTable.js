import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/Manage';

const data = {
    company:"company",
    group:"group",
    code:"code",
    id:"id",
    store:"store",
    mobile_phone:"mobile_phone",
    phone:"phone",
    address:"address",
    location:"location",
    delivery:"delivery",
    date:"date",
    status:"status"
};


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ManageTable() {
    return (
        <div  css={wrap}>
            <Table className="table">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Checkbox {...label} defaultChecked />
                        </TableCell>
                        <TableCell>
                            <Grid className="status_box" container justifyContent="space-between">
                                <div className="btn_wrap">
                                    <Button size="small" variant="outlined">쏘카</Button>
                                    <Button size="small" variant="outlined">정기권</Button>
                                    <Button size="small" variant="outlined">정비완료</Button>
                                </div>
                                <div className="btn_wrap">
                                    <Button size="small" variant="contained">오더번호</Button>
                                    <span>1231339</span>
                                    <Button size="small" variant="contained">등록일자</Button>
                                    <span>12313˚39</span>
                                    <Button size="small" variant="contained">배정업체</Button>
                                    <span>1231339</span>
                                </div>
                            </Grid>
                            <Grid className="detail_box" container>
                                <div className="left">
                                    <Grid container >
                                        <b>12gh3212</b>
                                        <span>202 쏘렌토</span>
                                    </Grid>
                                    <p>엔진오일/얄어</p>
                                </div>
                                <div  className="btn_wrap right">
                                    <Grid className="address" container >
                                        <Button size="small" variant="contained">주소</Button>
                                        <span>1231339</span>
                                    </Grid>
                                    <Button size="small" variant="contained">작업기한</Button>
                                    <span>1231339</span>
                                    <Button size="small" variant="contained">메모</Button>
                                    <span>1231339</span>
                                </div>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}