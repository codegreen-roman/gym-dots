const functions = require('firebase-functions')
const admin = require('firebase-admin')
const R = require('ramda')

const { allCompletedExercisesList } = require('./index.helper')

admin.initializeApp(functions.config().firebase)

const nextRef = admin.database().ref('/next')

const transactionHandler = (error, committed, snapshot) => {
    if (error) {
        console.log('Transaction failed abnormally!', error)
    } else if (!committed) {
        console.log('We aborted the transaction')
    } else {
        console.log('weight is incremented')
    }
    console.log('new weight : ', snapshot.val())
}

exports.resultsForUser = functions.https.onRequest((req, res) => {
    const userKey = req.query.uid

    return admin.database().ref('/results').child(userKey)
        .once('value')
        .then(snap => snap.val())
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

exports.generateNext = functions.database.ref('/results/{userKey}/{pushId}/')
    .onWrite(event => {

        const incrementer = 5
        const results = event.data.val()
        const { userKey } = event.params


        const toTransactionPromise = (key) => nextRef
            .child(userKey)
            .child('exercises')
            .child(key)
            .child('weight')
            .transaction(
                R.add(incrementer),
                transactionHandler
            )

        const getPromisesFrom = R.compose(R.map(toTransactionPromise), allCompletedExercisesList)

        return Promise.all(getPromisesFrom(results))

    })
