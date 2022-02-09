import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import useAuth from 'hook/auth';
import Loading from 'components/Loading';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, Main } from 'pages';

import 'react-toastify/dist/ReactToastify.css';

const Redirector: React.VFC = () => (
    <Navigate to='/' />
);

const App: React.FC = () => {
    const auth = useAuth();

    return (
        <Suspense fallback={<Loading show />}>
            <Loading show={auth.user === undefined} />
            <ToastContainer />
            {auth.user !== undefined && (
                <Routes>
                    <Route path='/' element={<Main />} />
                    {!auth.user && (
                        <Route path='/login' element={<Login />} />
                    )}
                    <Route element={Redirector} />
                </Routes>
            )}
        </Suspense>
    );
}

export default App;