const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <a>
              <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"/>
            </a>
          </main>
      </Def>
    )
  }
  

module.exports = error404
