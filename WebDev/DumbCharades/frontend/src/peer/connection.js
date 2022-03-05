import Peer from 'simple-peer'

class Connection {

    constructor(socket) {
        this.peers = []
        this.socket = socket
        this.stream = null
    }

    setStream(stream) {
        this.stream = stream
    }

    addPeer(incomingSignal, callerID) {

        const peer = new Peer({
            initiator: false,
            trickle: false,
            // stream: this.stream
        })

        peer.on('signal', signal => {
            this.socket.emit('returning signal', callerID, signal)
        })

        peer.signal(incomingSignal);

        this.peers.push({ id: callerID, peer })

        return peer
    }

    createPeer(user, team, callerID) {
        
        const peer = new Peer({
            initiator: true,
            trickle: false,
            // stream: this.stream
        });

        peer.on('signal', signal => {
            this.socket.emit('sending signal', user, team, callerID, signal)
        })

        this.peers.push({ id: callerID, peer })

        return peer
    }

    getPeerByID(id) {
        const item = this.peers.find(p => p.id === id);
        return item
    }

    addStream(stream) {
        // this.stream = stream
        this.peers.forEach(({peer}) => {
            peer.addStream(stream)
        })
    }
};

export default Connection