import popup from '../styles/popup.module.css';

export default function popUp({achievement, text, colour, img_link, onClick}) {
	return (
	<div onClick={onClick}>
		<div className={popup['black']}></div>
			<div className={popup["positioner"]}>
			    <span className={popup["side"]} style={{ left: 0}}>Click anywhere to continue</span><div className={popup["holder"]}>
			      <div>
			        <div className={popup["popup"]} style={{ borderColor: `${colour} ${colour} black ${colour}` }}>
			          <img className={popup["main-image"]} alt='' src={img_link}/>
			        </div>
			        <div className={popup["under"]} style={{ borderColor: `transparent ${colour} ${colour} ${colour}` }}>
			            <div className={popup["text"]}>{text}. Achievement: <span style={{ color: colour }}>{achievement}</span></div>
			        </div>
			      </div>
			    </div><span className={popup["side"]}style={{ right: 0}}>Click anywhere to continue</span>
		  </div>
	</div>

	)
}
