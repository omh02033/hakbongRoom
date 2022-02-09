import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Main } from 'pages';

const Redirector: React.VFC = () => (
    <Navigate to='/' />
);

export default () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route element={Redirector} />
        </Routes>
    );
}