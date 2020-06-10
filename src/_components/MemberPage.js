import React from 'react';
import { Link } from 'react-router-dom'

function MemberPage() {
    return (
        <>
            <Link className=" btn btn-primary btn-logout" to="/login">Logout</Link>
            <h1>Welcome to Member page</h1>
        </>
    );
}

export default MemberPage;