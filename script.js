// Приветствие при нажатии кнопки
document.getElementById('greetButton').addEventListener('click', function() {
    const greetings = [
        'Привет! Добро пожаловать!',
        'Здравствуйте! Рад вас видеть!',
        'Доброго времени суток!',
        'Приветствую вас на нашем сайте!',
        'Здравствуйте! Как ваши дела?'
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greeting').textContent = randomGreeting;
});

// Обработка формы контактов
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Простая валидация
    if (name && email && message) {
        document.getElementById('formMessage').textContent = 
            `Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами по адресу ${email}.`;
        document.getElementById('formMessage').style.color = '#27ae60';
        
        // Очистка формы
        this.reset();
        
        // Очистка сообщения через 5 секунд
        setTimeout(() => {
            document.getElementById('formMessage').textContent = '';
        }, 5000);
    } else {
        document.getElementById('formMessage').textContent = 
            'Пожалуйста, заполните все поля формы.';
        document.getElementById('formMessage').style.color = '#e74c3c';
    }
});

// Плавная прокрутка к секциям
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Анимация появления секций при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем анимацию ко всем секциям
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

console.log('Сайт загружен и готов к работе!');
