class WuguiMessaging {
    constructor() {
        this.topics = [];
    }

    subscribe(topicName, callback) {
        if (typeof callback === 'function') {
            if (!Array.isArray(this.topics[topicName])) {
                this.topics[topicName] = [];
            }
            this.topics[topicName].push(callback);
        } else {
            throw ('callback function is NOT defined');
        }
    }

    publish(topicName) {
        let argsArray = Array.prototype.slice.call(arguments);
        argsArray.splice(0, 1); // remove topicName from the array to be left with just the callback arguments
        if (!Array.isArray(this.topics[topicName])) {
            for (var callback of this.topics[topicName]) {
                try {
                    callback.apply(this, argsArray); //invoke the callback function
                } catch (exc) {
                    console.log('Exception occurred in subscriber function for ' + topicName + ' message.');
                }
            }
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new WuguiMessaging();
        }

        return this.WuguiMessaging;
    }
}
const wuguiMessageQueue = WuguiMessaging.getInstance();

async function asyncUrlImport(url) {
    let response = await fetch (url);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    return await import(objectURL);;
}


export {
    wuguiMessageQueue,
    asyncUrlImport
};
