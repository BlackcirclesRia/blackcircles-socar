import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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

export default function ProfileTable() {
    return (
        <div  css={wrap}>
            <Table className="table">
                <TableBody>
                    <TableRow>
                        <TableCell>고객사</TableCell>
                        <TableCell colSpan={3}>{data.company}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >그룹</TableCell>
                        <TableCell >{data.group}</TableCell>
                        <TableCell >매장코드</TableCell>
                        <TableCell >{data.code}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>직원ID</TableCell>
                        <TableCell colSpan={3}>{data.id}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>상호명</TableCell>
                        <TableCell colSpan={3}>{data.store}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>휴대폰번호</TableCell>
                        <TableCell colSpan={3}>{data.mobile_phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>유선번호</TableCell>
                        <TableCell colSpan={3}>{data.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>주소</TableCell>
                        <TableCell colSpan={3}>{data.address}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>관리지역</TableCell>
                        <TableCell colSpan={3}>{data.location}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>딜리버리</TableCell>
                        <TableCell colSpan={3}>{data.delivery}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>등록일자</TableCell>
                        <TableCell colSpan={3}>{data.date}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>상태</TableCell>
                        <TableCell colSpan={3}>{data.status}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}