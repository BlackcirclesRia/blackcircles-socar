import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
/** @jsxImportSource @emotion/react */
import { wrap } from '../css/Profile';

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
                            <Grid container justifyContent="space-between">
                                <div>
                                    <Button size="small" variant="outlined">쏘카</Button>
                                    <Button size="small" variant="outlined">정기권</Button>
                                    <Button size="small" variant="outlined">정비완료</Button>
                                </div>
                                <div>
                                    <Button size="small" variant="contained">오더번호</Button>
                                    <span>1231339</span>
                                    <Button size="small" variant="contained">등록일자</Button>
                                    <span>1231339</span>
                                    <Button size="small" variant="contained">배정업체</Button>
                                    <span>1231339</span>
                                </div>
                            </Grid>
                            <Grid container justifyContent="space-between">
                                <div>
                                    <b>12gh3212</b>
                                </div>
                                <div>
                                    <Button size="small" variant="contained">주소</Button>
                                    <span>1231339</span>
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