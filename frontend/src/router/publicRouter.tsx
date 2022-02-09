import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Login } from 'pages';

const Redirector: React.VFC = () => (
    <Navigate to='/' />
);

export default () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={Redirector} />
        </Routes>
    );
}