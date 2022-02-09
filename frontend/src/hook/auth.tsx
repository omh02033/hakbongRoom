import React, { createContext, useContext, useState, useEffect } from 'react';
import {api} from 'api';

interface User {
    userId: number;
    roleId: string;
    identity: object;
}

const useProvideAUth = () => {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        api.get('/auth/isLogin')
        .then(res => {
            const { login, data } = res.data;
            if(!login) {
                setUser(null);
                return;
            }
            setUser(data);
        });
    }, []);

    return { user };
}

const authContext = createContext<ReturnType<typeof useProvideAUth> | undefined>(undefined);

export const ProvideAuth: React.FC = ({children}) => {
    const auth = useProvideAUth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => {
    const auth = useContext(authContext);
    if(auth === undefined) throw new Error("ProvideAuth not found");
    return auth;
};

export default useAuth;