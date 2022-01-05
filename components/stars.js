import mainstyles from '../styles/mainstyles.module.css';
import { useEffect, useState } from 'react';

export default function StarGenerator({number, class_, n}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        for (let i = Math.random()*2000 + number; i > 0; i -= 1) {
            setList(l => [
                ...l,
                { rad: `${Math.random()/7}vh`, pos_x: `${Math.random()*Math.random()*100}%`, pos_y: `${Math.random()*100}%`, opacity: `${Math.random()*n}` },
            ]);
        }
    }, []);

    return (
        <div className={class_}>
            {list.map(({ rad, pos_x, pos_y, opacity }, i) => (
                <span
                    key={i}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        height: rad,
                        width: rad,
                        position: 'absolute',
                        top: pos_x,
                        left: pos_y,
                        opacity: opacity,
                    }}
                ></span>
            ))}
        </div>
    );
}
