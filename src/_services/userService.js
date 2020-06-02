import firebaseAuth from '../firebase'

export const userService = {
    register
};

function register(user) {

        console.log(user.email);
        console.log(user.password);
    //return firebaseAuth.auth().createUserWithEmailAndPassword()
}
