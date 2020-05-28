var Product = require("../models/product");
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/shopping", {useNewUrlParser: true} )

var products =[
     new Product({
        imagePath: "https://previews.123rf.com/images/sn333g/sn333g1704/sn333g170400198/76960406-education-and-chemistry-colorful-symbol.jpg",
        title: "chemist",
        description: "this jacket going to be amazing!!!!!!!!",
        price: 15
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1495012379376-194a416fcc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        title: "dope",
        description: "this Shirt going to be amazing!!!!!!!!",
        price: 50
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1492998680170-81f8863d8d2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        title: "japan",
        description: "this pants going to be amazing!!!!!!!!",
        price: 30
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        title: "coder",
        description: "this jacket going to be amazing!!!!!!!!",
        price: 25
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1555680206-9bc5064689db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        title: "Geek",
        description: "this jacket going to be amazing!!!!!!!!",
        price: 30
    }),

    
]
var done = 0;

for (let i = 0; i < products.length; i++) {
    products[i].save( function(err, result){
        done++;
        if (done === products.length) {
            quit();
        }

    });
    
}
function quit() {
mongoose.disconnect()
    
}