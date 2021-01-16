import React from 'react';
import Repo from "./Repo";

const RepoList = (props) => {
 
    var dataRepositories= props.data.data.dataRepos
   
    return(
        <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">User Repositories</h3>
        </div>
        <div className="panel-body">
            {
               dataRepositories.map(item => {
                   console.log("repo",item)
                return <Repo
                    repo={item}
                    key={item.id}
                    {...item} />
            })
                
            }

        </div>
    </div>
      );
}

export default RepoList;