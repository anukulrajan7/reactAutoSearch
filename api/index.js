import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const data = [
	{
		productName: 'Apple iPhone 14 Pro',
		productImage: 'https://example.com/images/iphone14pro.jpg',
		price: {
			currency: 'USD',
			amount: 999,
		},
		category: 'electronics',
		quantity: 10,
		image: 'https://example.com/images/iphone14pro.jpg',
	},
	{
		productName: 'Samsung Galaxy S23 Ultra',
		productImage: 'https://example.com/images/galaxys23ultra.jpg',
		price: {
			currency: 'USD',
			amount: 1199,
		},
		category: 'electronics',
		quantity: 5,
		image: 'https://example.com/images/galaxys23ultra.jpg',
	},
	{
		productName: 'Nike Air Force 1',
		productImage: 'https://example.com/images/nikeairforce1.jpg',
		price: {
			currency: 'USD',
			amount: 100,
		},
		category: 'shoes',
		quantity: 20,
		image: 'https://example.com/images/nikeairforce1.jpg',
	},
	{
		productName: 'LEGO Star Wars Millennium Falcon',
		productImage: 'https://example.com/images/legostarwarsmillenniumfalcon.jpg',
		price: {
			currency: 'USD',
			amount: 800,
		},
		category: 'toys',
		quantity: 3,
		image: 'https://example.com/images/legostarwarsmillenniumfalcon.jpg',
	},
	{
		productName: 'Sony PlayStation 5',
		productImage: 'https://example.com/images/playstation5.jpg',
		price: {
			currency: 'USD',
			amount: 500,
		},
		category: 'electronics',
		quantity: 0,
		image: 'https://example.com/images/playstation5.jpg',
	},
];

app.get('/api/products', (req, res) => {
	if (req.query.search) {
		const products = data.filter((item) => {
			return item.category.includes(req.query.search);
		});
		res.send(products);
		return;
	}

	res.send(data);
	return;
});
app.listen(port, () => {
	console.log('we listen on port ' + port);
});
