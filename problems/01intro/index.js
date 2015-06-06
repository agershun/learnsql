exports.problem = 'Let\'s run SQL on your Node.js.\n'
    + 'Use `$ADVENTURE_COMMAND verify YOUR_TEXT...` to make your sound.'
;

exports.verify = function (args, cb) {
    console.log('verify',arguments);
    cb(false);
};
