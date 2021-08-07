import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { formLists } from "../action/FormDetailAction";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import Alerts from "./Alert";
import Loder from "./Loder";
import AppBars from "./appBar";
import { makeStyles } from "@material-ui/styles";



const useStyle = makeStyles(() => ({
    userListEdit: {
        border: "none",
        borderRadius: "5px 10px",
        cursor: "pointer",
        marginRight: '20px',
        backgroundColor: '#3bb077',
        color: "white",
    },
}))

const FormDetail = ({ history }) => {

    const classes = useStyle();
    const columns = [
        // { field: "_id", headerName: "ID", width: 90, hide: true},
        {
            field: "fullName",
            headerName: "Name",
            width: 140,
        },
        {
            field: "email",
            headerName: "Email",
            sortable: false,
            width: 160,
        },
        {
            field: "phone",
            headerName: "Contact No",
            sortable: false,
            width: 120,
        },
        {
            field: "education",
            headerName: "Education",
            width: 140,
            sortable: false,
        },
        {
            field: "createdAt",
            headerName: "Date",
            width: 170,
        },
        {
            field: "course",
            headerName: "Course To Enroll",
            sortable: false,
            width: 160,
        },

        {
            field: "college",
            headerName: "Collage Name",
            sortable: false,
            width: 160,
        },

        {
            field: "message",
            headerName: "Messages",
            sortable: false,
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/form/${params.row._id}`}>
                            <button className={classes.userListEdit}>View</button>
                        </Link>
                    </>
                );
            },
        },
    ];
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const formList = useSelector((state) => state.formList);
    const { loding, error, lists } = formList;
    
    
    useEffect(() => {

        if (!userInfo) {
            history.push("/");
        }
        dispatch(formLists());
    }, [dispatch]);

    return (
        <div>
            <AppBars />

            <div style={{ height: 400, width: "95%", padding: "20px" }}>
                <Typography variant="h4"> All User Forms</Typography>
                {error && <Alerts severity="error"> {error}</Alerts>}
                {loding && <Loder />}
                <DataGrid
                    rows={lists}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
};

export default FormDetail;
