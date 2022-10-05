const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div className='main'>
                    <div>
                    <img  src="/images/french-toast.jpg" alt="French Toast" />
                        Photo by <a href="https://unsplash.com/@miracletwentyone">Joseph Gonzalez</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>   
            </main>
        </Def>
    )
}

module.exports = home
