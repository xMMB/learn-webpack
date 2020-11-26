export default class Post {

	constructor(data) {
		this.data = data || [];
	}

	add(data) {
		this.data.push(data);
	}

	remove(idx) {
		this.data.slice(idx, 1);
	}

	update(idx, data) {
		this.data[idx] = data;
	}

	view(idx) {
		return this.data[idx];
	}

}