import React from "react";
import { DataGrid } from "@material-ui/data-grid";

import "./user.css";
import { Typography } from "@material-ui/core";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "name",
        headerName: "Name",
        width: 140,
       
    },
    {
        field: "Created",
        headerName: "Created at",
        sortable: false,
        width: 160,
        
    },
    {
        field: "email",
        headerName: "Email",
        width: 140,
        
    },
    {
        field: "phone",
        headerName: "Phone Number",
        type: "number",
        width: 110,
        sortable: false,
    },
    {
        field: "course",
        headerName: "Course Enroll",
        sortable: false,
        width: 160,
        
    },

    {
        field: "qualification",
        headerName: "Qualification",
        sortable: false,
        width: 160,
        
    },
    {
        field: "collageName",
        headerName: "Your college/ Institution Name",
        sortable: false,
        width: 160,
        
    },
    {
        field: "message",
        headerName: "Messages",
        sortable: false,
        width: 160,
        
    },
];

const rows = [
    { id: 1, Created:'2021/07/7',email: "Snow", name: "Jon", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database', "dsafsdaf"],phone: 35 },
    { id: 2, Created:'2021/07/7',email: "Lannister", name: "Cersei", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 42 },
    { id: 3, Created:'2021/07/7',email: "Lannister", name: "Jaime", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 45 },
    { id: 4, Created:'2021/07/7',email: "Stark", name: "Arya", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 16 },
    { id: 5, Created:'2021/07/7',email: "Targaryen", name: "Daenerys", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: null },
    { id: 6, Created:'2021/07/7',email: "Melisandre", name: null, message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 150 },
    { id: 7, Created:'2021/07/7',email: "Clifford", name: "Ferrara", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 44 },
    { id: 8, Created:'2021/07/7',email: "Frances", name: "Rossini", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 36 },
    { id: 9, Created:'2021/07/7',email: "Roxie", name: "Harvey", message: 'i like', collageName:'slington college', qualification:'sdf', course:['database'],phone: 65 },
];

export default function UserForm() {
    return (
        <div className="userList">
            
            <div style={{ height: 400, width: '100%' }}>
            <Typography variant = 'h4'>User Forms Details</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
        </div>
    );
}
