const SmeeClient = require('smee-client')

const smeeStar = ()=> {

    const smee = new SmeeClient({
        source: 'https://smee.io/TDckB0c9vfal9Etm',
        target: 'http://localhost:3000/events',
        logger: console
    })

    const events = smee.start()
    
}

smeeStar();
// Stop forwarding events
