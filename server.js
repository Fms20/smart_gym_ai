const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// MySQL connection (Ensure db_schema.sql is executed first)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smart_gym'
});

db.connect((err) => {
    if (err) {
        console.warn('⚠️ Could not connect to MySQL. Continuing without DB for demo purposes.');
    } else {
        console.log('✅ Connected to MySQL database successfully!');
    }
});

// Mock user array for demo purposes if DB fails, allowing the app to run regardless.
const mockUsers = [
    { id: 1, name: 'فيصل', email: 'faisal@smartgym.ai', password: '1234', role: 'Admin' },
    { id: 2, name: 'محمد', email: 'mohammad@smartgym.ai', password: '1234', role: 'Coach' },
    { id: 3, name: 'نواف', email: 'nawaf@smartgym.ai', password: '1234', role: 'Athlete' }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// APIs

// Login API
app.post('/api/login', (req, res) => {
    const { name, password } = req.body;
    
    // Fallback if DB is not available
    if (db.state === 'disconnected' || !db.state) {
        const user = mockUsers.find(u => u.name === name && u.password === password);
        if (user) {
            return res.json({ success: true, user: { id: user.id, name: user.name, role: user.role } });
        }
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const query = 'SELECT id, name, role FROM Users WHERE name = ? AND password = ?';
    db.query(query, [name, password], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        
        if (results.length > 0) {
            res.json({ success: true, user: results[0] });
        } else {
            res.status(401).json({ success: false, error: 'Invalid credentials' });
        }
    });
});

// Get Sensor Data stream (Simulating wearable integration)
app.get('/api/sensors/live', (req, res) => {
    // Return dummy data for charts
    const hr = 70 + Math.floor(Math.random() * 80);
    const calories = 100 + Math.floor(Math.random() * 400);
    const steps = 1000 + Math.floor(Math.random() * 9000);
    res.json({ heart_rate: hr, calories, steps, timestamp: new Date() });
});

// Get AI Predictions
app.get('/api/ai/predictions/:userId', (req, res) => {
    // Dummy AI predictions
    res.json({
        fatigue_level: Math.floor(Math.random() * 40) + 30, // 30-70%
        injury_risk: Math.floor(Math.random() * 20) + 5,    // 5-25%
        energy_prediction: 'High',
        recommendations: [
            "Lower Intensity Cardio (45 mins).",
            "High protein recovery shake within 30 mins.",
            "Recommend 8.5 hours of sleep."
        ]
    });
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
