const functions = require('firebase-functions')
const admin = require('firebase-admin')
const R = require('ramda')

const { allCompletedExercisesList } = require('./index.helper')

admin.initializeApp(functions.config().firebase)

const nextRef = admin.database().ref('/next')
const resultsRef = admin.database().ref('/results')

const transactionHandler = (error, committed, snapshot) => {

    if (error) {
        return console.error('Transaction failed abnormally!', error)
    } else if (!committed) {
        return console.log('We aborted the transaction')
    }

    return console.log(`weight is incremented and now it is ${snapshot.val()}`)
}

exports.resultsForUser = functions.https.onRequest((req, res) => {

    const { uid: userKey } = req.query

    return resultsRef.child(userKey)
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


        const toTransactionPromise = (key) => nextRef.child(userKey).child('exercises').child(key).child('weight')
            .transaction(
                R.add(incrementer),
                transactionHandler
            )

        const getPromisesFrom = R.compose(R.map(toTransactionPromise), allCompletedExercisesList)

        return Promise.all(getPromisesFrom(results))
            .then(() => console.log('All transactions done'))

    })
