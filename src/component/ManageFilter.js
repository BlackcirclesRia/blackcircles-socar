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



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ManageTable(props) {

    const [data, setData] = React.useState(props.data);

    return (
        <div  css={wrap}>
            <Table className="table">
                <TableBody>
                    {data.map(val=>(
                        <TableRow>
                            <TableCell>
                                <Checkbox {...label} defaultChecked />
                            </TableCell>
                            <TableCell>
                                <Grid className="status_box" container justifyContent="space-between">
                                    <div className="btn_wrap">
                                        <Button size="small" variant="outlined">{val.btn1}</Button>
                                        <Button size="small" variant="outlined">{val.btn2}</Button>
                                        <Button size="small" variant="outlined">{val.btn3}</Button>
                                    </div>
                                    <div className="btn_wrap">
                                        <Button size="small" variant="contained">오더번호</Button>
                                        <span>{val.order_num}</span>
                                        <Button size="small" variant="contained">등록일자</Button>
                                        <span>{val.reg_date}</span>
                                        <Button size="small" variant="contained">배정업체</Button>
                                        <span>{val.company}</span>
                                    </div>
                                </Grid>
                                <Grid className="detail_box" container>
                                    <div className="left">
                                        <Grid container >
                                            <b>{val.title}</b>
                                            <span>{val.car}</span>
                                        </Grid>
                                        <p>
                                            {val.status.map(status=>(
                                                status+"/"
                                            ))}
                                        </p>
                                    </div>
                                    <div  className="btn_wrap right">
                                        <Grid className="address" container >
                                            <Button size="small" variant="contained">주소</Button>
                                            <span>{val.address}</span>
                                        </Grid>
                                        <Button size="small" variant="contained">작업기한</Button>
                                        <span>{val.du_date}</span>
                                        <Button size="small" variant="contained">메모</Button>
                                        <span>{val.memo}</span>
                                    </div>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    );
}