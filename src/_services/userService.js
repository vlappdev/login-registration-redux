import firebaseAuth from '../firebase'

    export const userService = {
        register,
        login,
        logout
    };

    function register(user) {

            console.log(user.email);
            console.log(user.password);
        //return firebaseAuth.auth().createUserWithEmailAndPassword()
    }

    function login(email, password){
        return firebaseAuth.auth().signInWithEmailAndPassword(email, password)
                .then((user)=>{
                    localStorage.setItem('email', user.user.email);
                    //firebaseAuth.auth().signOut()
                    return user
                })
                .catch((error)=>{
                    console.log(error)
                    return Promise.reject(error)
                })
    }

    function logout() {
        firebaseAuth.auth().signOut()
            .then(param => {
                console.log(param);
            });
        localStorage.removeItem('user');
    }
