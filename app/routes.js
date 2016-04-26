var Notify = require('./models/notify');

function getNotifications(res) {
    Notify.find(function (err, notifications) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(notifications); // return all notifications in JSON format
        //console.log(notifications);
    });
};

module.exports = function (app) {

	// api ---------------------------------------------------------------------
    // get all notifications
    app.get('/api/notifications', function (req, res) {
        // use mongoose to get all notifications in the database
        getNotifications(res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};