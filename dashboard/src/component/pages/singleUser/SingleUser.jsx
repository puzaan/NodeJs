import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './singleUser.css'
export default function SingleUser() {
   
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='userTitle'> Edit User</h1>
                <button className='userAddButton'> Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src='data:image/png;base64,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' alt='name' className='userShowImg'/>
                        <div className="userShowTopTitle">
                            <samp className='userShowUserName'> abcd</samp>
                            <samp className='userShowTitle'> abcd</samp>

                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle"> Accunt Details</span>
                           <div className="userShowInfo">
                            <PersonIcon className='userShowIcon' />

                            <span className="userShowInfoTitle">ssdad</span>
                            </div>
                            <div className="userShowInfo">
                            <PersonIcon className='userShowIcon' />

                            <span className="userShowInfoTitle">ssdad@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                            <PersonIcon className='userShowIcon' />

                            <span className="userShowInfoTitle">address</span>
                            </div>
                    </div>

                </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle"> Edit</span>
                        <form className='userUpdateForm'>
                            <div className="userUpdateLeft">
                                <div className="userUpdateLable">
                                    <lable>User Name</lable>
                                    <input typee='text' placeholder='name' className="userUpdateInput"/>

                                    
                                </div>
                                <div className="userUpdateLable">
                                    <lable>User Name</lable>
                                    <input typee='text' placeholder='name' className="userUpdateInput"/>

                                    
                                </div>
                                <div className="userUpdateLable">
                                    <lable>Email</lable>
                                    <input typee='text' placeholder='name' className="userUpdateInput"/>

                                    
                                </div>
                                <div className="userUpdateLable">
                                    <lable>Address</lable>
                                    <input typee='text' placeholder='name' className="userUpdateInput"/>

                                    
                                </div>
                                <div className="userUpdateLable">
                                    <lable>Contact No</lable>
                                    <input typee='text' placeholder='name' className="userUpdateInput"/>

                                    
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className='userUpdateUpload'>
                                
                                    <input type='file' id='file' />
                                </div>
                                <div className='btn'>
                                <button className="userUpdateButton">Update</button>
                                </div>
                                
                            </div>

                        </form>
                    </div>
                
            </div>
        </div>
    )
}