import * as JsStore from 'jsstore'
const Worker = require('../../node_modules/jsstore/dist/jsstore.worker')

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
export const idbCon = new JsStore.Instance(new Worker())
