import mainstyles from '../styles/mainstyles.module.css';
import StarComponent from "../components/stars.js";

export default function sea() {
	return (
    <>
        <svg>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                <feTurbulence id="sea-filter" numOctaves="10" seed="900" baseFrequency="0.02 0.05"></feTurbulence>
                <feDisplacementMap scale="5" in="SourceGraphic"></feDisplacementMap>
                <animate
                    xlinkHref="#sea-filter"
                    attributeName="baseFrequency"
                    dur="45s"
                    keyTimes="0;0.5;1"
                    values="0.02 0.06;0.04 0.08;0.02 0.06"
                    repeatCount="indefinite"
                />
            </filter>
        </svg>

		<div className={mainstyles['sea']}>
			<img alt='' src="/Images/backdrop7.png" className={mainstyles['backdrop']}/>
			<div className={mainstyles["shadow"]}>e</div>
			<StarComponent number={18000} class_={mainstyles['star-bottom']} n={1.25}/>
			<img alt='' src="/Images/clouds.png" className={mainstyles['clouds-cls']}/>
			<div style={{   display: 'flex', justifyContent: 'center' }}>
				<img alt='' src="/Images/moon.png" className={mainstyles['moon-cls']}/>
			</div>
			<img alt='' src="/Images/mountains.png" className={mainstyles['mountains-cls']}/>
		</div>
	</>
	);
}
