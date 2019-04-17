import firebase from './firebase';
import userHandler from './user';


export default userHandler(firebase.app());
