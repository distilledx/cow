import mainstyles from '../styles/mainstyles.module.css';
import TimeComponent from "../components/timing.js"
import Sky from "../components/aes.js"
import StarComponent from "../components/stars.js"
import Sea from "../components/sea.js"
import PopUp from "../components/fishing_ui.js"
import Buttons from "../components/fishing.js"
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Readex+Pro"/>
        <title>牛の日 ー やったー!!</title>
      </Head>
      <StarComponent number={5000} class_={mainstyles['star-top']} n={0.85}/>
      <TimeComponent/>
      <Sky/>
      <Sea/>
      <Buttons/>
      <img alt='' src="/Images/slime.png" className={mainstyles['slime-cls']}/>
    </div>
  )
}
