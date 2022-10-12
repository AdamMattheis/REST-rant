const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}
            <h1>{ data.place.name }</h1>
            <img src={`${data.place.pic}`}/>
            <h2 className='main'>
                { data.place.cuisines }
            </h2>
            <h4 className='main'>
                Located in { data.place.city }, { data.place.state }
            </h4>
            <h5 className='main'>
                Rating
                <input className="form-control" id="rating"/>
            </h5>
            <h5 className='main'>
                Comments
                <input className="form-control" id="comments"/>
                {comments}
            </h5>
            <h3 className='main'>
                {data.place.showEstablished()}
            </h3>
            <h4 className='main'>
                Serving {data.place.cuisines}
            </h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
                </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
  
          </main>
        </Def>
    )
}

module.exports = show





    
   