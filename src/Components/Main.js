import React from 'react'
import '../css/main/main.css';

export default function Main() {
    return (
        <main>
            <div className='grid grid1'>
                <h1>Transform your brand</h1>
                <p>We are full-service creative agency spesializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button>Learn More</button>
            </div>
            <div className='grid grid2'></div>
            <div className='grid grid3'></div>
            <div className='grid grid4'>
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <button>Learn More</button>
            </div>
            <div className='grid grid5'>
                <h1>Graphic design</h1>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
            <div className='grid grid6'>
                <h1>Photography</h1>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </main>
    )
}
