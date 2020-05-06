const mongoose=require('mongoose');
const Dishes=require('./models/dishes');

const url='mongodb://localhost:27017/conFusion'

const connect=mongoose.connect(url);
connect.then((db)=>{
	console.log('connect correctly to server');
	var newDish=Dishes({
		name:'uthapizza',
		description:'test'
	})
	newDish.save()
	.then((dish)=>{
		console.log(dish);
		return Dishes.find({}).exec();
	})
	.then((dishes)=>{
		console.log(dishes);
		return Dishes.remove();
	})
	.then(()=>{
		mongoose.connection.close();
	})
	.catch((err)=>{
		console.log(err);
	})
})