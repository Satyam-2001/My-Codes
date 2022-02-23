class Connector {
    constructor(callback = null) {
        this.callback = callback
    }
    Consumer(callback) {
        this.callback = callback
    }
    Provider(...data) {
        if (this.callback) {
            this.callback(...data)
        }
    }
}

export default Connector