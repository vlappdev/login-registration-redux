import React from 'react';
import { Link } from 'react-router-dom'
import firebaseAuth from '../firebase'

function MemberPage() {
    return (
        <>
            <h1>Welcome to Member page</h1>
            {/*<button onClick={() => firebaseAuth.auth().signOut() }>Sign Out</button>*/}
            <Link to="/login">Logout</Link>
        </>
    );
}

export default MemberPage;