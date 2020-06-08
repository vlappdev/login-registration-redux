import React from 'react';
import { Link } from 'react-router-dom'

function MemberPage() {
    return (
        <>
            <h1>Welcome to Member page</h1>
            <Link to="/login">Logout</Link>
        </>
    );
}

export default MemberPage;