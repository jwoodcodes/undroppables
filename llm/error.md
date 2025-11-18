MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
   [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
   [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
   Generating static pages (0/11) ...
(node:495) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:495) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Database error: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
   Generating static pages (2/11) 
Error fetching data from MongoDB: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
Error fetching data from MongoDB: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
     code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
   Generating static pages (5/11) 
MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9)
    MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
    at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9)
SyntaxError: "undefined" is not valid JSON
    at JSON.parse (<anonymous>)
    at y (/vercel/path0/.next/server/app/tools/projectionsBuilder/page.js:1:150241)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '1167441978'
}
SyntaxError: "undefined" is not valid JSON
    at JSON.parse (<anonymous>)
    at y (/vercel/path0/.next/server/app/tools/projectionsBuilder/page.js:1:150241)
     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '1167441978'
}
SyntaxError: "undefined" is not valid JSON
    at JSON.parse (<anonymous>)
    at y (/vercel/path0/.next/server/app/tools/projectionsBuilder/page.js:1:150241)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '1167441978'
}
Error occurred prerendering page "/tools/projectionsBuilder". Read more: https://nextjs.org/docs/messages/prerender-error
SyntaxError: "undefined" is not valid JSON
    at JSON.parse (<anonymous>)
    at y (/vercel/path0/.next/server/app/tools/projectionsBuilder/page.js:1:150241)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
   Generating static pages (8/11) 
Error fetching data from MongoDB: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
      at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
Error fetching data from MongoDB: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:297:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/vercel/path0/node_modules/mongodb/lib/cmap/connection.js:325:26)
     at async continueScramConversation (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/vercel/path0/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:101:13)
    at async connect (/vercel/path0/node_modules/mongodb/lib/cmap/connect.js:19:9) {
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  [Symbol(errorLabels)]: Set(2) { 'HandshakeError', 'ResetPool' }
}
 ✓ Generating static pages (11/11)
> Export encountered errors on following paths:
	/tools/projectionsBuilder/page: /tools/projectionsBuilder
    Error: Command "npm run build" exited with 1