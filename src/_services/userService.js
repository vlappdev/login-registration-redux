import firebaseAuth from '../firebase'

    export const userService = {
        register,
        login,
        logout
    };

    function register(user) {

            console.log(user.email);
            console.log(user.password);
        return firebaseAuth.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(param => {
                console.log(param);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error)
            })
    }

    function login(email, password){
        return firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{
                localStorage.setItem('email', user.user.email);
                return user
            })
            .catch((error)=>{
                console.log(error)
                return Promise.reject(error)
            })
    }

    function logout() {
        firebaseAuth.auth().signOut()
            .then(() => {
                console.log('Signed out');
            });
        localStorage.removeItem('email');
    }
