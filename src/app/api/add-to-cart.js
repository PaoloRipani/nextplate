export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Add authentication check here if needed
        const response = await fetch('https://your-woocommerce-store.com/wp-json/wc/v3/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.WOOCOMMERCE_API_KEY}`
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
