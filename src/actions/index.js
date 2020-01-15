
export const newLogin = (event) => {
    return {
        type: "NEW_LOGIN",
        payload: {
            event: event
        }
    }
}

export const createLogin = (event) => {
    return {
        type: "CREATE_LOGIN",
        payload: {
            event: event
        }
    }
}

export const admin_login = () =>{
    return {
        type : "ADMIN_LOGIN"
    }
}

export const score_final = (event) =>{
    return {
        type : "SCORE_FINAL",
        payload : {
            event : event
        }
    }
}