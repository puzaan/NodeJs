import React from 'react'
import './featureInfo.css'
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
export default function FeatureInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <PersonIcon />
                <span className="featureTitle"> Users</span>
                <div className="featureUserContainer">
                    <span className="featureUser">20</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <ListAltIcon className= 'featureIcon'/>
                <span className="featureTitle"> Form list</span>
                <div className="featureUserContainer">
                    <span className="featureUser">20</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
            <ListAltIcon className= 'featureIcon'/>
                <span className="featureTitle"> Users</span>
                <div className="featureUserContainer">
                    <span className="featureUser">20</span>
                    
                </div>
                
                
            </div>
        
        </div>
    )
}
