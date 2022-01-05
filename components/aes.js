import mainstyles from '../styles/mainstyles.module.css';
import StarComponent from "../components/stars.js";

export default function sky() {
	return (
		<div style={{ position: 'absolute', top: '150vh', width: '100vw', height: '100vh', zIndex: 10 }}>
			<img alt='' src="/Images/backdrop7.png" className={mainstyles['backdrop']}/>
			<div className={mainstyles["shadow"]}>e</div>
			<StarComponent number={18000} class_={mainstyles['star-bottom']} n={1.25}/>
			<img alt='' src="/Images/clouds.png" className={mainstyles['clouds-cls']}/>
			<div style={{   display: 'flex', justifyContent: 'center' }}>
				<img alt='' src="/Images/moon.png" className={mainstyles['moon-cls']}/>
			</div>
			<img alt='' src="/Images/mountains.png" className={mainstyles['mountains-cls']}/>
		</div>
	)
}
