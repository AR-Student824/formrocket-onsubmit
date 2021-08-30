const app = require('express')()
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.post('/success', (req, res) => res.render('success.html', {req:req}))
app.use((_,res) => res.redirect('https://www.formrocket.me/#_'))
app.listen(3000, () => console.log('Listening on port 3000'))