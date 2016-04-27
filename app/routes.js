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

function updateArchive(res){
    var bool = Notify.find({ _id : req.params.notification_id })
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

    app.put('/api/notifications/:id', function(req, res) {
        Notify.findById(req.params.id, function(err, notif) {
            if (err)
                res.send(err);
            // set the notifications properties (comes from the request)
            notif.isRead = "true";
            // save the data received
            notif.save(function(err) {
                if (err)
                    res.send(err);
                // give some success message
                res.json({ message: 'notification successfully updated!'});
            });
        });
    });
    
    app.put('/api/getarchived/:id', function(req, res) {
        Notify.findById(req.params.id, function(err, notif) {
            if (err)
                res.send(err);
            // set the notifications properties (comes from the request)
            notif.isArchive = req.body.isArchive;
            // save the data received
            notif.save(function(err) {
                if (err)
                    res.send(err);
                // give some success message
                res.json({ message: 'notification successfully updated!'});
            });
        });
    });
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};