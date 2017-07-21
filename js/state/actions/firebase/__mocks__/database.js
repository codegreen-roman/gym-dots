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
    uid: 'zzzzxxxxyyyy'
}

export const defaultsRef = {
    once(eventType, successCallback) {

        return new Promise((resolve) => {
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
    return new Promise(resolve => resolve(user))
}
