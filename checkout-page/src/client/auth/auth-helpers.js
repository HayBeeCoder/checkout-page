
const authenticate = (jwt , callback) =>{
    if (typeof window !== "undefined"){
        sessionStorage.setItem("jwt" ,JSON.stringify(jwt))
    }
    callback()
}

const isAuthenticated = () => {
    if(typeof window === "undefined") return false;

    if(sessionStorage.getItem("jwt")){
        return JSON.parse(sessionStorage.geItem("jwt"))
    }else{
        return false
    }
}

const signout = ( callback ) => {
    if(typeof window !== "undefined"){
        sessionStorage.removeItem("jwt")
        callback()
        signout().then((data) => {
            document.cookie = "remember_me=; expires=Thu, 01 Jan 1970 00:00:00UTC; path=/;"
        })
    }
}