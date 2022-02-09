import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { api } from 'api';
import useAuth from 'hook/auth';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface roomInterface {
    id: number;
    room: string;
    limit: number;
    personnel: number;
    floor: number;
}

const Main: React.FC = () => {
    const [rooms, setRooms] = useState<Array<roomInterface>>([]);

    useEffect(() => {
        api.get(`/room`)
        .then(res => {
            setRooms(res.data.rooms);
        });
    }, []);

    return (
        <Container>
        </Container>
    );
}

export default Main;