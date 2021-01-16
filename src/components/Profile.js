
import React from 'react';
import {Badge, Button} from 'react-bootstrap'
import RepoList from "./RepoList";
const Profile = (props) =>{
   
    console.log("props profilr",props.data)
    return(
    
        <div className="panel panel-default">
        <div className="panel-heading">
            <br/>
        </div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-4">
                    <img src={props.data.avatar_url} className="thumbnail" style={{width: '100%'}} />
                    <a href={props.data.html_url} target="_blank" className="btn btn-secondary btn-block">View Profile</a>

                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <Badge variant="primary">{props.data.dataProfile.public_repos} Public Repositories</Badge>{' '}
                            <Badge variant="secondary">{props.data.dataProfile.public_gists} Public Gist</Badge>{' '}

                            <Badge variant="success">{props.data.followers} Followers</Badge>{' '}
                            <Badge variant="warning">{props.data.following} following</Badge>{' '}
                            
                        </div>
                    </div>
                    <hr />
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Username: {props.data.login}</strong></li>
                            <li className="list-group-item"><strong>Location: {props.data.location}</strong></li>
                            <li className="list-group-item"><strong>Email: {props.data.email}</strong></li>
                        </ul>
    
                </div>
            </div>
            <hr/>
          <RepoList data={props}/>
        </div>
    </div>
    );
}



export default Profile;
