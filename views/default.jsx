const React = require('react')
const Def = require('./default')

function defa (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
      


module.exports = defa