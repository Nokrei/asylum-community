import React from 'react'
import { useSpring, animated, config } from "react-spring";
import './App.scss'
import './About.scss'

const About = () => {
    const fadeIn = useSpring({
        from:{
            opacity:0
        },
        to:{
            opacity:1
        },
        config: {
            duration: 5000,
          },
    })


    return <animated.div className='about white-font' id='about' >
<h1>We are Asylum 669 Server Boost Level 3 </h1>
<br/><br/>
COMMUNITY GAMING FRIENDSHIP MOVIES GIVEAWAYS E-GIRLS NSFW CUSTOM EMOJIS?
<br/><br/>
There should only be one thing that comes to mind when you hear those in succession... 
<br/><br/>
Hello, Greetings and Welcome to the Asylum 669 where all your gaming needs are supplemented and joys are fulfilled, in this 18+ Discord we hang, chill and get up to mischief as a fun, crazy coop of patients.
<br/><br/>
Like a phoenix we rise from the ashes! 
<br/><br/>
Join us for an active gaming community where there will always be someone to play Overwatch with you. Do you play other games too? Bored and looking for a chat? Wanna watch movies with friends? Join any voice channel and a gorgeous e girl is guaranteed to join you! 
<br/><br/>
Just don't click the VSFW channel. Seriously. Don't. 
<br/><br/>
Although before you apply you must match the below checklist first:
<ul>
    <li>18+</li>
    <li>Twisted sense of humour</li>
    <li>Loves food, like REALLY loves food</li>
    <li>Alottle of crazy</li>
    <li>Extremely weird</li>
</ul>
<br/>
If you ticked all of the above...
<br/><br/>
So, come on in, sign yourself up and get strapped in for a mental time
<br/><br/>
Apply through discord.gg/asylum669
<br/><br/>
See you soon crazies
    </animated.div>
}

export default About