const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.resultsForUser = functions.https.onRequest((req, res) => {
    const userKey = req.query.uid

    return admin.database().ref('/results').child(userKey)
        .once('value')
        .then(snap => snap.val())
        .then(data => res.json(data))
        .catch(err => res.json(err))
})
