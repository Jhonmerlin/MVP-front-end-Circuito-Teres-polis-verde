document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav_toggle');
    const navContent = document.getElementById('nav_content');
    
    if (navToggle && navContent) {
        navToggle.addEventListener('click', () => {
            navContent.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav_menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navContent) navContent.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
    
    // Controlar active nos links de navegação
    document.querySelectorAll('.nav_menu a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav_menu a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Sistema de login
document.addEventListener('click', function(e) {
    if (e.target && e.target.matches('.login_button')) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (loginAdmin(username, password)) {
            alert('Login realizado com sucesso!');
            toggleAdminLink();
            updateLoginInterface();
        } else {
            alert('Credenciais inválidas!');
        }
    }
});

// Prevenir submit do formulário
document.addEventListener('submit', function(e) {
    if (e.target && e.target.matches('#login-form')) {
        e.preventDefault();
    }
});
