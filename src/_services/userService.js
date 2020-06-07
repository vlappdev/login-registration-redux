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
        console.log(email);
        console.log(password)
        return firebaseAuth.auth().signInWithEmailAndPassword(email, password)
                .then((user)=>{
                    localStorage.setItem('email', user.user.email)
                    console.log('ulogovan')
                    console.log(user.user.email);firebaseAuth.auth().signOut()
                    return user
                })
    }

    function logout() {
        firebaseAuth.auth().signOut()
            .then(param => {
                console.log(param);
            });
        localStorage.removeItem('user');
    }
