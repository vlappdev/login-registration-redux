import firebaseAuth from '../firebase'

    export const userService = {
        register,
        login,
        logout
    };

    function register(user) {
        return firebaseAuth.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                return res.user.email;
            })
            .catch((error) => {
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
