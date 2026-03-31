const express = require('express');
const router = express.Router();
const auth = require('../Controller/auth');
const hotels = require('../Controller/hotels');
// const verifyUser = require('../utils/verifyToken')
// const verifyAdmin = require('../utils/verifyToken');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const Room = require('../Controller/rooms');

//Authentication Routes
router.post('/register', auth.register);
router.post('/login', auth.login);
router.post("/logout", auth.logout);
router.get('/users/:id', auth.getUser);
router.get('/users', auth.getUsers);
router.put('/users/:id', auth.UpdateUser);
router.delete('/users/:id', auth.deleteUser);

//Hotel CRUD Operations
router.post('/addhotels', hotels.addhotel); // add hotel

router.get('/allhotels', hotels.getHotels); // get all hotels
router.get('/hotels/:id', hotels.getHotel); // get single hotel

router.put('/hotels/:id', verifyAdmin, hotels.updatehotel); // update hotel
router.delete('/hotels/:id', hotels.deletehotel); // delete hotel

router.get('/hotels/countByCity', hotels.getHotelByCity); // count by city
router.get('/hotels/countByType', hotels.getHotelByType); // count by type

//Rooms ROuter
router.post('/addroom/:id' , Room.CreatRoom)
router.put('/updateroom/:id',verifyAdmin, Room.updateRoom);
router.put('/availability/:id', Room.updateRoomAvail)
router.delete('/deleteroom/:id', verifyAdmin , Room.deleteRoom)
router.get('/getRoom/:id', verifyUser ,Room.getRoom);
router.get('/rooms'  , Room.getRooms)
router.get('/room/:id',Room.getroom)
router.get('/reserved/:id',Room.getReserved)

module.exports = router;