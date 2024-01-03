export default async function handler(req, res) {
    const response = await fetch('https://external-api.com/data', {
        headers: {
            'Authorization': `Bearer ${process.env.SECRET_API_KEY}`
        }
    });
    const data = await response.json();
    res.status(200).json(data);
}
