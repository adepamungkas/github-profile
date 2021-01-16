let avatarDefault = "https://github.com/identicons/jasonlong.png";
let initState = {
    username: "",
    login: "",
    repos: "",
    following: "",
    followers: "",
    message: "",
    image_url: "",
    avatar_url:avatarDefault,
    dataRepos: [],
    dataProfile: {}
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "HANDLE_USERNAME":
            return {
                ...state,
                username: action.e.target.value
            };
        case "SUBMIT_FORM":
            let dataProfile = action.data;

            if (dataProfile.public_repos) {
                return {
                    ...state,
                    dataProfil: dataProfile,
                    repos: dataProfile.public_repos,
                    following: dataProfile.following,
                    followers: dataProfile.followers,
                    image_url: dataProfile.avatar_url,
                    avatar_url: dataProfile.avatar_url,
                    login: dataProfile.login,
                    message: "",
                };
            } else {
                return {
                    ...state,
                    message: "User Not Found."
                };
            }
        case "GET_REPO":
            let dataRepos = action.data;
            return {
                ...state,
                dataRepos: dataRepos,
            };
        default: return state
    }

};

export default reducer;




