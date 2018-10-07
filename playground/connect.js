
const {mongoose} 	= require('./../server/db/mongoose');
const {Todo}		= require('./../server/models/todo');

var id = "5bb907d4dea26458577d472c";

Todo.findOne({
	name: "Coding time"
}).then((todo) => {
	console.log(todo);
}, (e) => {
	console.log(e);
})