import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import  {HeroContainer , HeroBg , VideoBg , HeroContent , HeroH1 , HeroP , HeroBtnWrapper, ArrowForward , ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg playsInline autoplay loop muted src = {Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>ISTE</HeroH1>
                <HeroP>
                    Indian Society for Technical Education
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter = {onHover} onMouseLeave = {onHover} primary="true" dark="true">
                        Student Portal {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                <a href="#about"><div class="arrow"></div></a>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
