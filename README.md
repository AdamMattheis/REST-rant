# Project REST-Rant

REST-Rant is an app where users can review restaurants.


Method      Path                        Purpose


GET         /                           Home page

GET         /places                     Places index page

POST        /places                     Create new place

GET         /places/new                 Form page for creating a new place

GET         /places/:id                 Details about a particular place

PUT         /places/:id                 Update a particular place

GET         /places/:id/edit            Form page for editing an existing place

DELETE      /places/:id                 Delete a particular place

POST        /places/:id/rant            Create a rant (comment) about a particular place

DELETE      /places/:id/rant/:rantId    Delete a rant (comment) about a particular place

GET         *                           404 page (matches any route not defined above)



Places [name (string), city (string), state (string), cuisines (string) and a pic (string)]

Chick-fil-A         Raleigh         NC      Fast-food       https://static.cfacdn.com/photos/restaurants/01851/large.jpg

SoCo                Greenville      NC      Dine-in         https://bloximages.chicago2.vip.townnews.com/piratemedia1.com/content/tncms/assets/v3/editorial/59b59b5c1de-f7a3-11ea-a399-af72f347c6dc/5f61412662fdb.image.jpg?resize=1200%2C900

Dan'l Boone Inn     Boone           NC      Dine-in         https://i.pinimg.com/originals/77/c4/85/77c485cf47809d15e0ed8f7fdd7588b3.jpg
