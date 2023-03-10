import { useState } from 'react';
import { useEffect } from 'react';
import Login from '../components/login.js';
import mainstyles from '../styles/mainstyles.module.css';
import PopUp from '../components/fishing_ui.js';
import list from '../pins.json';

export default function Clicked() {
    const [displaying, changeDisplay] = useState(0);
    const [fishText, changeText] = useState('Fish');
    const [disabled, disable] = useState(false);

    let [chosenRole, setChosenRole] = useState({
        achievement: 'OwO (13%)',
        role_id: '927429712450555944',
        color: '#f4c2c2',
    });

    const onButtonClick = () => {
        let chance = Math.random();
        if (chance <= 0.01) {
            setChosenRole({
                achievement: 'OwO (87%)',
                role_id: '927429886732271656',
                color: '#5865F2',
            });
        } else if (chance <= 0.35) {
            setChosenRole({
                achievement: 'OwO (55%)',
                role_id: '927429786849136650',
                color: '#cc004e',
            });
        } else {
            setChosenRole({
                achievement: 'OwO (13%)',
                role_id: '927429712450555944',
                color: '#f4c2c2',
            });
        }
    };

    useEffect(() => {
        addRole(chosenRole.role_id);
    }, [chosenRole]);

    const keys = Object.keys(list[chosenRole.role_id]);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    return displaying ? (
        <PopUp onClick={() => nowai(changeDisplay, changeText, disable)} achievement={chosenRole.achievement} text={list[chosenRole.role_id][randomKey]['caption']} img_link={list[chosenRole.role_id][randomKey]['url']} colour={chosenRole.color} />
    ) : (
        <>
            <button
                disabled={disabled}
                className={mainstyles['fish-button']}
                onClick={() =>
                    ohyeah(changeDisplay, changeText, disable, () => {
                        onButtonClick();
                    })
                }
            >
                {fishText}
            </button>
            <Login disabled={!disabled} />
        </>
    );
}
function ohyeah(func1, func2, func3, func4) {
    func4();
    func2('Fishing');
    setTimeout(() => {
        func1(1);
    }, 5000);
    func3(true);
}

function nowai(func1, func2, func3) {
    func2('Fish');
    func1(0);
    func3(false);
}

async function addRole(roleId) {
    let maybeFullUser = localStorage.getItem('user');
    if (!maybeFullUser) {
        return;
    }
    maybeFullUser = JSON.parse(maybeFullUser);
    const res = await fetch('https://lookatthose.rocks/cow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'addRole',
            body: {
                user: `${maybeFullUser.id}`,
                guild: '796060146048041020',
                role: `${roleId}`,
            },
        }),
    });
    const response = await res.json();
    return response;
}
