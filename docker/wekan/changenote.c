Add wekan and run it well.
1. use docker method but fail.

Error: EACCES: permission denied, mkdir '/home/wekan/app/.meteor/local'
    at Object.fs.mkdirSync (fs.js:885:18)
    at Object.wrapper [as mkdir] (/tools/fs/files.js:1558:35)
    at Object.files.mkdir_p (/tools/fs/files.js:422:11)
    at Object.writeFileAtomically (/tools/fs/files.js:1013:11)
    at ProjectContext._saveResolverResultCache (/tools/project-context.js:597:11)
    at /tools/project-context.js:572:14
    at /tools/utils/buildmessage.js:359:18
    at exports.EnvironmentVariable.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:352:34
    at exports.EnvironmentVariable.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:350:23
    at exports.EnvironmentVariable.withValue (/tools/utils/fiber-helpers.js:89:14)

2. try to use sandstorm


