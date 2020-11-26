import Post from "./components/post.js"
import '../css/index.css'

const productPost = new Post([{
	id: 1,
	title: "Some post title",
	description: "Some post description",
	price: 1000
}]);

productPost.add({
	id: 2,
	title: "Some post title 2",
	description: "Some post description 2233223",
	price: 2356
});

console.log(productPost);