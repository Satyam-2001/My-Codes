class Connector {
    constructor() {
        this.storage = {}
    }
    litsen(id,cmd,callback) {
        if (cmd in this.storage) {
            this.storage[cmd][id] = callback
        }
        else {
            this.storage[cmd] = { id : callback}
        }
        console.log(id,cmd,callback);
    }
    broadcast(cmd,...values) {
        console.log(this.storage[cmd]);
        for(const id in this.storage[cmd]) {
            console.log(id);
            this.storage[cmd][id](...values)
        }
        console.log(cmd,...values);
    }
    remove(id,cmd) {
        if (this.storage?.[cmd]?.[id]) {
            delete this.storage[cmd][id]
        }
        console.log(id,cmd);
    }
}

export default Connector