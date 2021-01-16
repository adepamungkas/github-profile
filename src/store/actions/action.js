import axios from 'axios'

export const handleUsername = e => {
    return {
        type: "HANDLE_USERNAME",
        e: e
    };
};


export const submitForm = (e, username) => {
    e.persist();
    return async dispatch => {

        axios
            .get(`https://api.github.com/users/${username}`)
            .then(result => {
                const data = result.data
                dispatch(sendToReducerSubmitForm(e,data))

                return result;
            }).then(result => {
                let login = result.data.login
                axios.get(`https://api.github.com/users/${login}/repos`)
                .then(result=>{
                    const data = result.data
                    dispatch(sendToReducerGetRepo(data))
                    
                });
                

            })
            .catch(error => {
                console.log(error);
                // error.message is the error message
                //dispatch(fetchProductsFailure(error.message))
            })
    };
};

export const sendToReducerSubmitForm = (e,data) => {
    return  {
        type: "SUBMIT_FORM",
        e: e,
        data
    }
}

export const sendToReducerGetRepo = (data) => {
    return  {
        type: "GET_REPO",
        data
    }
}


//   export const submitForm = (e, username) => {
//     e.persist();
//     return async dispatch => {
//       try {
//         const resp = await fetch(`https://api.github.com/users/${username}`);
//         const data = await resp.json();
//         dispatch({
//           type: "SUBMIT_FORM",
//           e: e,
//           data
//         });

//       } catch (er) {
//         console.log(er);
//       }
//     };
//   };

//   export const getRepo = (e, username) => {
//     e.persist();
//     return async dispatch => {
//       try {
//         const resp = await fetch(`https://api.github.com/users/${username}/repos`);
//         const data = await resp.json();
//         dispatch({
//           type: "GET_REPO",
//           e: e,
//           data
//         });
//       } catch (er) {
//         console.log(er);
//       }
//     };
//   };