import { useEffect, useState } from 'react';
import mainstyles from '../styles/mainstyles.module.css';

const Home = () => {
    const [user, setUser] = useState(null);
    const redirectUrl = 'http://cow.fl0at.live';
    const href = "https://discord.com/api/oauth2/authorize?client_id=927087840171524146&redirect_uri=http%3A%2F%2Fcow.fl0at.live&response_type=token&scope=identify"

    useEffect(() => {
        // check if user is saved in localStorage
        const maybeFullUser = localStorage.getItem('user');
        if (maybeFullUser) {
            setUser(JSON.parse(maybeFullUser));
            return;
        }

        // there is no saved user, so identify
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

        if (!accessToken) {
            return;
        }

        (async () => {
            // get user deets
            const res = await fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${tokenType} ${accessToken}`,
                },
            });
            const fullUser = await res.json();
            localStorage.setItem('user', JSON.stringify(fullUser));
            setUser(fullUser);
        })();
    }, []);

    return (
        <a href={href}><button id="login" className={mainstyles["discord-button"]}>Link Account</button></a>
    );
};

export default Home;
