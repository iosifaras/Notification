var Notify = require('./models/notify');

function getNotifications(res) {
    Notify.find( function (err, notifications) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(notifications); // return all notifications in JSON format
        //console.log(notifications);
    });
};


function getInbox(res) {
    Notify.find({ isArchive : false }, function (err, inbox) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(inbox); // return all notifications in JSON format
        //console.log(notifications);
    });
};

function getArchived(res) {
    Notify.find( { isArchive : true }, function (err, archived) {
        if (err) {
            res.send(err);
        }
        res.json(archived);
    });
};

function updateRead(res) {
    Notify.updateOne(
        { _id : req.params.notification_id },
        { $set: { "isRead": true } },
         function (err, read) {
        if (err) {
            res.send(err);
        }
        res.json(read);
    });
};



module.exports = function (app) {

	// api ---------------------------------------------------------------------
    app.get('/api/notifications', function (req, res) {
        // use mongoose to get all notifications in the database
        getNotifications(res);
    });

    // get all unarchived notifications
    app.get('/api/inbox', function (req, res) {
        // use mongoose to get all unarchived notifications in the database
        getInbox(res);
    });

    // get all archived notifications
    app.get('/api/archive', function (req, res) {
        // use mongoose to get all archived notifications in the database
        getArchived(res);
    });

    // update read status on notification
    app.post('/api/notifications:notification_id', function (req, res) {
        // use mongoose to get all notifications in the database
        updateRead(res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};