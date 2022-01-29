const createUser = (user) => {
    return fetch('/api/users', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(
        (res) => res.json()
    )
        .catch(
            err => console.log(err)
        )
}

const readUser = (params, credentials) => {
    return fetch('/api/users/' + params.userId, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.remember_me
        }
    }).then(
        (res) => res.json()
    )
        .catch(
            err => console.log(err)
        )
}
const deleteUser = (params, credentials) => {
    return fetch('/api/users/' + params.userId, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.remember_me
        },
    }).then(
        (res) => res.json()
    )
        .catch(
            err => console.log(err)
        )
}

const updateUser = (params, credentials,user) => {
    return fetch('/api/users/' + params.userId, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.remember_me
        },
        body: JSON.stringify(user)
    }).then(
        (res) => res.json()
    )
        .catch(
            err => console.log(err)
        )
}





const getUsers = () => {
    return fetch("/api/users/" , {
        method: "GET",
    }).then(
        res => res.json()
    ).catch(err => console.log(err)) //remember to remove console.log here!

}

export { createUser, readUser , updateUser , deleteUser , getUsers}