const defaultResult = {
    val() {
        return {
            restTime: 100,
            sets: 100
        }
    }
}

const user = {
    displayName: 'Roman',
    photoURL: 'https://pbs.twimg.com/profile_images/870699319183134720/IOqlC-IM_normal.jpg',
    uid: 'C2NO2n89PQOwRDs2o5u6HkeDl5v1'
}

const exercisesResult = {
    val() {
        return {
            sessionId: '',
            name: '',
            exercises: []
        }
    }
}

export const defaultsRef = {
    once(eventType, successCallback) {
        return new Promise(resolve => {
            successCallback(defaultResult)
            resolve(defaultResult)
        })
    },

    on(eventType, callback) {
        setTimeout(() => {
            callback({
                val() {
                    return {
                        restTime: 200,
                        sets: 200
                    }
                }
            })
        }, 500)
        return () => {
        }
    }
}

export const loginWith = () => {
    return new Promise(resolve => resolve({
        user
    }))
}

export const writeSessionResult = () => {
    return new Promise(resolve => resolve({
        ref: true
    }))
}

export const nextRef = {
    once(eventType, successCallback) {
        return new Promise(resolve => {
            successCallback(exercisesResult)
            resolve(exercisesResult)
        })
    }
}
