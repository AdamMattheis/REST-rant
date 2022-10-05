const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div class='main'>
                    <div>
                    <img  src="/images/french-toast.jpg" alt="French Toast" />
                        Photo by <a href="https://unsplash.com/@miracletwentyone">Joseph Gonzalez</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                  </div>
            </main>
        </Def>
    )
}

module.exports = home
