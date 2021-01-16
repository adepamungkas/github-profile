import React from 'react';
import {Badge} from 'react-bootstrap'

const Repo = (props) => {
   
    return(
        <div>
        <div className="row">
            <div className="col-md-9">
                <h4><a href={props.repo.html_url} target="_blank">{props.repo.name}</a></h4>
                <p>{props.repo.description}</p>
            </div>

            <div className="col-md-3">
                <Badge  variant="info"> {props.repo.watchers} Watchers </Badge> 
                <Badge  variant="dark"> {props.repo.forks} Forks</Badge>

            </div>
        </div>
        <hr/>
    </div>
      );
}

export default Repo;