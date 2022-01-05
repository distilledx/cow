import { useEffect, useState } from 'react';
import mainstyles from '../styles/mainstyles.module.css';

let countDownDate = new Date('Jan 5, 2022 22:28:49').getTime();

function change() {
    let now = new Date().getTime();
    let time = (countDownDate - now)/1000;
    let seconds = Math.floor(time);

    let width = 0;

    switch (seconds.toString().length) {
        case 7:
            width = 927.368;
            break;
        case 6:
            width = 797.3;
            break;
        case 5:
            width = 663.3;
            break;
        case 4:
            width = 527.3;
            break;
        case 3:
            width = 378.5;
            break;
        case 2:
            width = 251.534;
            break;
        case 1:
            width = 120;
            break;
    }

    if (seconds <= 0) {
        seconds = 'Happy Cow Day!!(づ ◕ヮ◕ )づ'
        width = 1380
    }

    return [seconds, `${100 * (window.innerWidth - width) / (2 * window.innerWidth)}vw`]
}

export default function TimeComponent() {
    const [seconds, setSeconds] = useState(0);
    const [paddingStr, setPaddingStr] = useState(0);


      const updatevals = () => {
          const [newSeconds, newPaddingStr] = change();
          setSeconds(newSeconds);
          setPaddingStr(newPaddingStr);
      }

      useEffect(updatevals, []);

      useEffect(() => {
          const timer = setInterval(updatevals, 1000)

          return () => clearInterval(timer);
      }, []);

    if (isNaN(seconds)) {
        return (<div style={{ paddingLeft: paddingStr }}><h6 className={mainstyles['main-thing-finish']}>{seconds}</h6></div>);
    }

    return (<div style={{ paddingLeft: paddingStr }}><h6 className={mainstyles['main-thing']}>{seconds}</h6></div>);
}
