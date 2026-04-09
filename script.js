const translations = {
    en: {
        overview: "Overview",
        dashboard: "Dashboard",
        athletes: "Athletes",
        coaches: "Coaches",
        aiEngine: "AI Engine",
        predictions: "Predictions",
        motion: "Motion Analysis",
        biometrics: "Biometrics",
        management: "Management",
        classes: "Classes",
        memberships: "Memberships",
        settings: "Settings",
        sensorsLive: 'Sensors: <strong class="text-success">Live (12)</strong>',
        searchPlaceholder: "Search athletes, metrics, or AI models...",
        adminName: "Faisal (Admin)",
        adminRole: "System Manager",
        pageTitle: "Live Session Overview",
        pageDesc: "Real-time AI analysis of the current training session.",
        fatigue: "Fatigue Level",
        fatigueInsight: '<i class="fa-solid fa-arrow-trend-up"></i> +12% from last session',
        injury: "Injury Risk",
        injuryInsight: '<i class="fa-solid fa-shield-halved"></i> Predictive Engine Active',
        calories: "Active Calories",
        caloriesInsight: '<i class="fa-solid fa-arrow-trend-up"></i> On track for target',
        energy: "Energy Prediction",
        energyVal: "High",
        energyInsight: '<i class="fa-solid fa-bed"></i> Based on 8h 12m sleep',
        chartTitle: "Real-time Biometrics (Sensor Data)",
        viewLogBtn: "View Log",
        alertsTitle: "AI Smart Alerts",
        alert1Title: "High HR Variance Detected",
        alert1Desc: "Athlete #43 (Omar) shows signs of overexertion. Recommendation: 5 min rest.",
        alert1Time: "Just now",
        alert2Title: "Posture Asymmetry",
        alert2Desc: "Motion analysis detects left knee strain during squats.",
        alert2Time: "12 mins ago",
        alert3Title: "Goal Reached",
        alert3Desc: "Daily step count target achieved (10,000 steps).",
        alert3Time: "45 mins ago",
        planTitle: "AI Generated Plan (Next Session)",
        planBadge: "Accuracy: 94.2%",
        plan1Title: "Training",
        plan1Desc: "Lower Intensity Cardio (45 mins). Avoid heavy leg press due to detected fatigue.",
        plan2Title: "Nutrition",
        plan2Desc: "High protein recovery shake within 30 mins. +500ml hydration required.",
        plan3Title: "Recovery",
        plan3Desc: "Recommend 8.5 hours of sleep. Focus on deep sleep phase.",
        modelTitle: "ML Model Status",
        modelTypeLabel: "Model Type",
        modelTypeVal: "Random Forest / LSTM",
        modelTrainedLabel: "Last Trained",
        modelTrainedVal: "Today, 04:00 AM",
        modelDelayLabel: "Prediction Delay",
        modelDelayVal: "12 ms (Real-time)",
        modelAccuracy: "Overall Accuracy",
        langBtnText: "عربي",
        predictionsPageTitle: "AI Predictive Engine",
        predictionsPageDesc: "Analyze historical data to forecast injury mapping and athlete lifecycle.",
        riskAnalysis: "Injury Risk Analysis",
        aiDiagnosis: "Smart Diagnosis",
        pred1Title: "Hamstring Vulnerability",
        pred1Desc: "72% probability of strain in next 7 days for Athlete #12.",
        pred2Title: "Dehydration Risk",
        pred2Desc: "Based on current sweat rate and temp.",
        motionPageTitle: "Computer Vision & Motion",
        motionPageDesc: "Live skeletal tracking and form correction alerts.",
        cameraLive: "Camera 04 - LIVE (Squat Rack)",
        trackingActive: "Tracking Active",
        formFeedback: "Form Feedback",
        motion1Title: "Depth Insufficient",
        motion1Desc: "Squat depth is 15° above parallel. Correct immediately.",
        motion2Title: "Knee Cave (Valgus)",
        motion2Desc: "Significant inward knee movement on upward phase.",
        bioPageTitle: "Deep Biometrics",
        bioPageDesc: "Comprehensive vital signs from all connected wearable sensors."
    },
    ar: {
        overview: "نظرة عامة",
        dashboard: "لوحة القيادة",
        athletes: "الرياضيون",
        coaches: "المدربون",
        aiEngine: "الذكاء الاصطناعي",
        predictions: "التنبؤات",
        motion: "تحليل الحركة",
        biometrics: "البيانات الحيوية",
        management: "الإدارة",
        classes: "الحصص",
        memberships: "العضويات",
        settings: "الإعدادات",
        sensorsLive: 'المستشعرات: <strong class="text-success">نشطة (12)</strong>',
        searchPlaceholder: "البحث عن الرياضيين، المؤشرات، أو النماذج...",
        adminName: "أحمد (مسؤول)",
        adminRole: "مدير النظام",
        pageTitle: "الجلسة المباشرة",
        pageDesc: "تحليل حي بالذكاء الاصطناعي لجلسة التدريب الحالية.",
        fatigue: "مستوى الإرهاق",
        fatigueInsight: '<i class="fa-solid fa-arrow-trend-up"></i> +12% عن الجلسة السابقة',
        injury: "خطر الإصابة",
        injuryInsight: '<i class="fa-solid fa-shield-halved"></i> محرك التنبؤ نشط',
        calories: "السعرات المحروقة",
        caloriesInsight: '<i class="fa-solid fa-arrow-trend-up"></i> في المسار الصحيح',
        energy: "توقع مستوى الطاقة",
        energyVal: "مرتفع",
        energyInsight: '<i class="fa-solid fa-bed"></i> بناءً على نوم 8 ساعات',
        chartTitle: "البيانات الحيوية المباشرة",
        viewLogBtn: "عرض السجل",
        alertsTitle: "تنبيهات ذكية للمدرب",
        alert1Title: "نبضات قلب مرتفعة",
        alert1Desc: "الرياضي #43 يعاني من إجهاد مفرط. ينصح باستراحة 5 دقيقة.",
        alert1Time: "الآن",
        alert2Title: "خلل في الحركة",
        alert2Desc: "التحليل يظهر ضغطاً على الركبة اليسرى أثناء السكوات.",
        alert2Time: "منذ 12 دقيقة",
        alert3Title: "تم تحقيق الهدف",
        alert3Desc: "اكتمل الهدف اليومي للمشي (10,000 خطوة).",
        alert3Time: "منذ 45 دقيقة",
        planTitle: "الأداء المتوقع وتوصيات الذكاء الاصطناعي",
        planBadge: "الدقة: 94.2%",
        plan1Title: "التدريب",
        plan1Desc: "كارديو خفيف (45 دقيقة). تجنب ضغط الساق بسبب الإرهاق.",
        plan2Title: "التغذية",
        plan2Desc: "مخفوق بروتين في 30 دقيقة. +500 مل ترطيب إضافي.",
        plan3Title: "الاستشفاء",
        plan3Desc: "يوصى بالنوم 8.5 ساعات. والتركيز على النوم العميق.",
        modelTitle: "حالة النماذج الذكية",
        modelTypeLabel: "نوع النموذج",
        modelTypeVal: "Random Forest / LSTM",
        modelTrainedLabel: "آخر تدريب",
        modelTrainedVal: "اليوم، 04:00 صباحاً",
        modelDelayLabel: "سرعة التنبؤ",
        modelDelayVal: "12 ملي ثانية (مباشر)",
        modelAccuracy: "الدقة الإجمالية",
        langBtnText: "English",
        predictionsPageTitle: "محرك التنبؤ الذكي",
        predictionsPageDesc: "تحليل البيانات التاريخية لتوقع الإصابات ودورة حياة الرياضي.",
        riskAnalysis: "تحليل مخاطر الإصابات",
        aiDiagnosis: "التشخيص الذكي",
        pred1Title: "ضعف العضلة الخلفية",
        pred1Desc: "احتمالية 72% للتمزق خلال الـ 7 أيام القادمة للرياضي #12.",
        pred2Title: "خطر الجفاف",
        pred2Desc: "بناءً على معدل التعرق ودرجة حرارة الجسم الحالية.",
        motionPageTitle: "الرؤية الحاسوبية وتحليل الحركة",
        motionPageDesc: "تتبع هيكلي مباشر وتنبيهات لتصحيح وضعية التمارين.",
        cameraLive: "كاميرا 04 - مباشر (منصة السكوات)",
        trackingActive: "التتبع نشط",
        formFeedback: "ملاحظات الأداء الحركي",
        motion1Title: "عمق غير كافٍ",
        motion1Desc: "عمق السكوات أعلى من التوازي بـ 15°. صحح فوراً.",
        motion2Title: "دخول الركبة للداخل",
        motion2Desc: "حركة ملحوظة للركبة للداخل أثناء مرحلة الصعود.",
        bioPageTitle: "البيانات الحيوية العميقة",
        bioPageDesc: "قراءات حيوية شاملة من جميع المستشعرات القابلة للارتداء."
    }
};

let riskChartInstance = null;
let miniCharts = [];

document.addEventListener("DOMContentLoaded", () => {
    // Chart.js Configuration for Real-time Biometrics
    const ctx = document.getElementById('hrChart').getContext('2d');

    // Gradient for the chart line
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.5)'); // primary glow
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)'); // transparent

    // Initial Data
    let labels = Array.from({ length: 20 }, (_, i) => `T-${20 - i}s`);
    let dataHr = Array.from({ length: 20 }, () => Math.floor(Math.random() * (160 - 120 + 1) + 120));

    const hrChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: dataHr,
                borderColor: '#8B5CF6',
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#11111A',
                pointBorderColor: '#8B5CF6',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4 // Smooth curves
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 17, 26, 0.9)',
                    titleColor: '#A78BFA',
                    bodyColor: '#FFF',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return `${context.parsed.y} BPM`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.03)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            family: "'Outfit', sans-serif",
                            size: 11
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.03)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            family: "'Outfit', sans-serif",
                            size: 11
                        },
                        stepSize: 20
                    },
                    min: 60,
                    max: 200
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
        }
    });

    // Simulate real-time data streaming
    setInterval(() => {
        // Generate new HR value
        const lastVal = dataHr[dataHr.length - 1];
        let newVal = lastVal + (Math.random() * 10 - 5); // fluctuate by +/- 5

        // Keep within reasonable bounds
        if (newVal > 185) newVal = 180;
        if (newVal < 90) newVal = 95;

        // Shift arrays
        dataHr.push(Math.round(newVal));
        dataHr.shift();

        // Update chart
        hrChart.update('none'); // 'none' for smooth animation without redrawing everything
    }, 2000);

    // --- Sidebar Toggle Logic ---
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    // Default open on larger screens
    if (window.innerWidth >= 769) {
        sidebar.classList.add('active');
    }

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // --- Language Switcher Logic ---
    let currentLang = 'en';
    const langSwitchBtn = document.getElementById('langSwitchBtn');
    const langText = langSwitchBtn.querySelector('.lang-text');
    const searchInput = document.getElementById('searchInput');

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update texts based on data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update inputs and specific elements explicitly
        searchInput.placeholder = translations[lang].searchPlaceholder;
        langText.innerText = translations[lang].langBtnText;

        // Update Chart.js Font
        const fontFam = lang === 'ar' ? "'Tajawal', 'Outfit', sans-serif" : "'Outfit', sans-serif";
        hrChart.options.scales.x.ticks.font.family = fontFam;
        hrChart.options.scales.y.ticks.font.family = fontFam;
        hrChart.update('none');
    }

    // Toggle logic on click
    langSwitchBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(nextLang);
    });

    // Navigation Tab Switching Logic
    const contentSections = document.querySelectorAll('.content-section');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;

            // Remove active from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(sec => sec.classList.remove('active'));

            // Add active to clicked nav and corresponding section
            item.classList.add('active');
            const targetSec = document.getElementById(targetId);
            if (targetSec) targetSec.classList.add('active');

            // Initialize charts if predicting or biometrics
            if (targetId === 'predictionsSection' && !riskChartInstance) {
                initRiskChart();
            }
            if (targetId === 'biometricsSection' && miniCharts.length === 0) {
                initMiniCharts();
            }
        });
    });

    // --- Chart Initializations for New Sections ---
    function initRiskChart() {
        const ctxRisk = document.getElementById('riskChart').getContext('2d');
        riskChartInstance = new Chart(ctxRisk, {
            type: 'bar',
            data: {
                labels: ['Hamstring', 'Knee', 'Lower Back', 'Shoulder', 'Ankle'],
                datasets: [{
                    label: 'Risk Probability %',
                    data: [72, 45, 15, 30, 10],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)', // high risk
                        'rgba(245, 158, 11, 0.8)', // medium 
                        'rgba(16, 185, 129, 0.8)', // low
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(16, 185, 129, 0.8)'
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#9CA3AF' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#9CA3AF' }
                    }
                }
            }
        });
    }

    function initMiniCharts() {
        const createMiniChart = (id, color) => {
            const ctxM = document.getElementById(id).getContext('2d');
            const dataM = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40 + 100));
            return new Chart(ctxM, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 10 }, (_, i) => i),
                    datasets: [{
                        data: dataM,
                        borderColor: color,
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false, min: 80, max: 180 }
                    }
                }
            });
        };

        miniCharts.push(createMiniChart('miniChart1', '#EF4444'));
        miniCharts.push(createMiniChart('miniChart2', '#10B981'));
        miniCharts.push(createMiniChart('miniChart3', '#8B5CF6'));

        // Animate mini charts
        setInterval(() => {
            miniCharts.forEach(chart => {
                const dataArr = chart.data.datasets[0].data;
                const last = dataArr[dataArr.length - 1];
                let next = last + (Math.random() * 8 - 4);
                dataArr.push(next);
                dataArr.shift();
                chart.update('none');
            });
        }, 1500);
    }

    // --- Login Logic ---
    const loginForm = document.getElementById('loginForm');
    const loginScreen = document.getElementById('login-screen');
    const appScreen = document.getElementById('app-screen');
    
    if(loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('nameInput').value;
            const password = document.getElementById('passwordInput').value;
            
            let data = null;
            try {
                // Determine base URL depending on environment
                const baseUrl = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1') ? 'http://localhost:3000' : '';
                
                const response = await fetch(`${baseUrl}/api/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, password })
                });
                
                data = await response.json();
            } catch (err) {
                console.warn('Server not available, falling back to offline mode.');
                // Offline fallback logic
                const fallbackUsers = [
                    { id: 1, name: 'فيصل', password: '1234', role: 'Admin' },
                    { id: 2, name: 'محمد', password: '1234', role: 'Coach' },
                    { id: 3, name: 'نواف', password: '1234', role: 'Athlete' }
                ];
                
                const user = fallbackUsers.find(u => u.name === name && u.password === password);
                if (user) {
                    data = { success: true, user: user };
                } else {
                    data = { success: false, error: 'كلمة المرور أو الاسم غير صحيح' };
                }
            }
                
            if(data && data.success) {
                // Update UI based on role
                document.querySelector('.user-name').innerText = data.user.name;
                document.querySelector('.system-role').innerText = data.user.role;
                
                // Switch screens
                loginScreen.style.display = 'none';
                appScreen.style.display = 'flex'; 
                
                // Role based UI adjustments
                const navAthletes = document.getElementById('nav-athletes');
                const navCoaches = document.getElementById('nav-coaches');
                const navNotifications = document.getElementById('nav-notifications');
                const navGroupAi = document.getElementById('nav-group-ai');
                const navGroupMgmt = document.getElementById('nav-group-management');
                
                // Entity Separation Logic
                if (data.user.role === 'Athlete') {
                    if(navAthletes) navAthletes.style.display = 'none';
                    if(navCoaches) navCoaches.style.display = 'none';
                    if(navGroupMgmt) navGroupMgmt.style.display = 'none';
                    if(navNotifications) navNotifications.style.display = 'flex';
                } else if (data.user.role === 'Coach') {
                    if(navAthletes) navAthletes.style.display = 'flex';
                    if(navCoaches) navCoaches.style.display = 'none'; 
                    if(navGroupMgmt) navGroupMgmt.style.display = 'none';
                    if(navNotifications) navNotifications.style.display = 'none';
                } else if (data.user.role === 'Admin') {
                    if(navAthletes) navAthletes.style.display = 'flex';
                    if(navCoaches) navCoaches.style.display = 'flex';
                    if(navGroupMgmt) navGroupMgmt.style.display = 'flex';
                    if(navNotifications) navNotifications.style.display = 'none';
                }
                
                // Trigger reflow of charts as they're now visible
                setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
            } else {
                alert('فشل تسجيل الدخول: ' + (data ? data.error : 'خطأ غير معروف'));
            }
        });
    }
});
