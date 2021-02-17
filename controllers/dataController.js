module.exports.home = (req, res, next) => res.sendFile('public/app.html', { root: '.' });
