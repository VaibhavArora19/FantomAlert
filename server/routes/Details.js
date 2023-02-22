const express = require('express');
const channelController = require("../controllers/Channels");
const router = express.Router();

router.get('/channels', channelController.getAllChannels);

router.get('/channel/:id', channelController.getSingleChannel);

router.get('/subscribedChannels/:address', channelController.getSubscribedChannels);

router.get('/notification/:address', channelController.getNotification);

router.get('/singleNotification/:id', channelController.getSingleNotification);

module.exports = router;