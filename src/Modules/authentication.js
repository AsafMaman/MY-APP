export const types={
    LOGIN_REQUEST:'AUTH/LOGIN_REQUEST',
    LOGIN_SUCCESS:'AUTH/LOGIN_SUCCESS',
    LOGIN_FAILED:'AUTH/LOGIN_FAILED'
}

export const actions= {
    login:(user,password)=>({type:types.LOGIN_REQUEST,payload:{user:user,password:password}})
}

const initalState={
    isLoggedId:false
}

export default(state=initalState,action)=>{
    switch(action.type) {
        case types.LOGIN_SUCCESS:{
            return {...state,isLoggedId:true};
        }
        case types.LOGIN_FAILED:{
            return {...state,isLoggedId:false};
        }
        default:{
            return state;
        }
    }
}