import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import useAuth from 'hook/auth';
import Loading from 'components/Loading';
import PublicRouter from './publicRouter';
import PrivateRouter from './privateRouter';

const App: React.FC = () => {
    const auth = useAuth();

    return (
        <Suspense fallback={<Loading show />}>
            <Loading show={auth.user === undefined} />
            <ToastContainer />
            {auth.user !== undefined && (
                auth.user ? <PrivateRouter /> : <PublicRouter />
            )}
        </Suspense>
    );
}

export default App;