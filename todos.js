var express = require('express');

var router = express.Router();

var toDo = [
		 { id:1, desc:'foo' }
		,{ id:2, desc:'bar' }
		,{ id:3, desc:'baz' }
	],
	jsonData = {
		title: 'Express App'
		,items: toDo
	};

// Methods
function add(req, res){
	var newItem = req.body.newItem;
	toDo.push({
		id: toDo.length+1,
		desc: newItem
	});
	res.redirect('/');
}

function rootApp(req, res){
	res.render('index', jsonData);
}

//Routes
router.get('/', rootApp);
router.post('/add', add);

module.exports = router;