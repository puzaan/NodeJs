import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import {formLists} from '../action/FormDetailAction'
import Alerts from './Alert';
import Loder from './Loder'

const columns = [
    // { field: "id", headerName: "ID", width: 90 },
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
];




const FormDetail = ({history}) => {
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin;

    const formList = useSelector((state) => state.formList)
    const {loding, error, lists} = formList;
const dispatch = useDispatch();
    useEffect(() => {
        if(!userInfo){
history.push('/');
        }
        dispatch(formLists())
    }, [dispatch])

    
    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
            <Typography variant = 'h4'>User Forms Details</Typography>
            {error && <Alerts severity = "error"> {error}</Alerts>}
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
    )
}

export default FormDetail
