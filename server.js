const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// إعدادات أساسية
app.use(cors());
app.use(express.json()); // لتمكين الخادم من استقبال بيانات بصيغة JSON

// هذا السطر مهم جداً! يجعل الخادم يعرض ملفات (HTML, CSS, JS) الموجودة في نفس المجلد
app.use(express.static(__dirname));

// إعداد الاتصال بقاعدة بيانات MySQL
// 🌟 يرجى تعديل هذه البيانات لتطابق قاعدة البيانات الخاصة بك
const db = mysql.createConnection({
    host: 'localhost',      // الخادم (غالباً localhost)
    user: 'root',           // اسم المستخدم لقاعدة البيانات
    password: '',           // كلمة المرور (غالباً فارغة محلياً)
    database: 'smart_gym'   // اسم قاعدة بياناتك
});

// فحص الاتصال بقاعدة البيانات عند تشغيل الخادم
db.connect((err) => {
    if (err) {
        console.error('❌ خطأ في الاتصال بقاعدة البيانات: ', err.message);
    } else {
        console.log('✅ تم الاتصال بقاعدة بيانات MySQL بنجاح!');
    }
});

// مسار افتراضي لتقديم صفحة الموقع الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// -----------------------------------------------------
// 🌟 مسارات (APIs) للتواصل مع قاعدة البيانات 🌟
// يمكنك إضافة دوال الجلب والإرسال هنا
// -----------------------------------------------------

// مثال 1: جلب بيانات من قاعدة البيانات (مثلاً جدول المستخدمين)
app.get('/api/users', (req, res) => {
    // قم بتغيير 'users' إلى اسم الجدول الموجود في قاعدة بياناتك
    const query = 'SELECT * FROM users LIMIT 10';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'حدث خطأ في جلب البيانات' });
            return;
        }
        res.json(results); // إرسال النتائج إلى موقعك
    });
});

// مثال 2: إرسال بيانات جديدة إلى قاعدة البيانات
app.post('/api/add_user', (req, res) => {
    const { name, email } = req.body; // استلام البيانات من الموقع
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    db.query(query, [name, email], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'حدث خطأ أثناء الإضافة' });
            return;
        }
        res.json({ message: 'تمت إضافة البيانات بنجاح!', id: results.insertId });
    });
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`🚀 يعمل الخادم بنجاح على الرابط: http://localhost:${port}`);
});
