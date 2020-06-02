import React from 'react';
import firebaseAuth from '../firebase'

function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => firebaseAuth.auth().signOut() }>Sign Out</button>
        </>
    );
}

export default HomePage;