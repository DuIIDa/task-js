const classes = () => {
    console.log('6. Классы и паттерны\n\n')
    console.log('6.1. Singleton [просто]')
    class Singleton {
        constructor (name) {
            if (typeof Singleton.instance === 'object') {
                return Singleton.instance
            }
            this.name = name
            Singleton.instance = this
            return Singleton.instance
        }

        getInstance () {
            return Singleton.instance
        }
    }

    const o1 = new Singleton()
    const o2 = new Singleton()
    console.log(o1 === o2) // true
    o1.name = 'Singleton'
    console.log(o2.name) // ‘Singleton’
    console.log('6.1 END')

    console.log('6.2. Расширение String [просто]')
    // eslint-disable-next-line no-extend-native
    String.prototype.customUpperCase = function () {
        return this
            .split('')
            .map(item => {
                if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
                    return String.fromCharCode(item.charCodeAt() - 32)
                } else {
                    return item
                }
            })
            .join('')
    }
    console.log('abc'.customUpperCase())
    console.log('6.2 END')
}

export default classes
