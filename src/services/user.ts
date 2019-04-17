import firebase from 'firebase';

interface IuserData {
    firstname: string,
    lastname: string
}

function userHandler(firebase:firebase.app.App) {
    const createUser = (userData: IuserData) => {

    }

    return { createUser }

}

export default userHandler;