// const places = require('../models/places')
// //const router = require('express').Router()

// //index
// router.get('/', (req, res) => {
//     res.render('places/index', {places})
// })



// //new
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// //edit
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })


//  //show 
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
  
//   }
// })




// //edit page
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id], id })
   
//   }
// })





// //delete
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })


// //create place
// router.post('/', (req, res) => {
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// module.exports = router


const router = require('express').Router()
const db = require('../models')


//index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//new post
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      
      // Todo: Find all validation errors
  
      res.render('places/new', { message })
      }
      else {
      res.render('error404')
      }
  })
})



//new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//places put
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//delete
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//edit
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//rant post
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//rant delete
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})



module.exports = router
