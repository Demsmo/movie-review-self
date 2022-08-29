import React from 'react'
import bgimg from '../assets/img/no-time-to-die-poster.png'
import button from '../assets/img/watch-trailer-button.svg'
import Header from './Header'

export default function Cover() {
    return (
        <>
            <Header />
            <section class="banner-section">
                <img class="banner" src={bgimg} alt="" />
                <div class="banner-overlay">
                    <div class="watch-trailer-div">
                        <button class="watch-trailer" >
                                <a href="https://www.youtube.com/watch?v=vw2FOYjCz38"><img class="watch-trailer-featured" src={button} alt="watch trailer" /></a>
                        </button>
                        <div class="in-cinemas">
                            <h3>October 1st</h3>
                            <p>In Cinemas</p>
                        </div>
                    </div>
                    <p class="banner-description">
                        James Bond has left active service. His peace is short-lived when Felix Leiter, <br />
                        an old friend from the CIA, turns up asking for help, leading Bond onto <br />
                        the trail of a mysterious villain armed with dangerous new technology.
                    </p>
                </div>
            </section>

        
        </>
    )
}
