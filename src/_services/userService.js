import firebaseAuth from '../firebase'

export const userService = {
    register,
    login
};

function register(user) {

        console.log(user.email);
        console.log(user.password);
    //return firebaseAuth.auth().createUserWithEmailAndPassword()
}

function login(email, password){
    console.log(email);
    console.log(password)
    // firebaseAuth.firestore()
    //     .auth().signInWithEmailAndPassword(email, password)
    //         .then(()=>{
    //             console.log('ulogovan')
    //         })
}
