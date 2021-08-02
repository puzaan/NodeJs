import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Typography } from "@material-ui/core";
import "./users.css";
import { Link } from "react-router-dom";
import { userRows } from "./data";
import DeleteIcon from '@material-ui/icons/Delete';
import { ContactMailOutlined } from "@material-ui/icons";

const User = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        console.log(id)
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="userList">
                        <img className="userImage" src={params.row.avatar} alt="image" />
                        {params.row.userName}
                    </div>
                );
            },
        },
        {
            field: "firstName",
            headerName: "First Name",
            width: 140,
        },
        {
            field: "lastName",
            headerName: "Last Name",
            width: 140,
        },

        {
            field: "email",
            headerName: "Email",
            width: 140,
        },

        {
            field: "type",
            headerName: "User Type",
            sortable: false,
            width: 140,
        },

        {
            field: "status",
            headerName: "Status",
            sortable: false,
            width: 140,
        },
        {
            field: "action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteIcon
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <div style={{ height: 400, width: "100%" }}>
                <Typography variant="h4">User List</Typography>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
};

export default User;
