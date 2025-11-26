// Credenciais de administrador
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Função para verificar login de admin
function authenticateAdmin(username, password) {
    return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

// Função para verificar se admin está logado
function isAdminLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Função para fazer login
function loginAdmin(username, password) {
    if (authenticateAdmin(username, password)) {
        localStorage.setItem('adminLoggedIn', 'true');
        return true;
    }
    return false;
}

// Função para fazer logout
function logoutAdmin() {
    localStorage.removeItem('adminLoggedIn');
    toggleAdminLink();
    updateLoginInterface();
}

// Função para mostrar/ocultar link do admin
function toggleAdminLink() {
    const adminLink = document.getElementById('admin-link');
    if (adminLink) {
        adminLink.style.display = isAdminLoggedIn() ? 'block' : 'none';
    }
}

// Função para atualizar interface de login
function updateLoginInterface() {
    const navLogin = document.querySelector('.nav_login');
    if (navLogin) {
        if (isAdminLoggedIn()) {
            navLogin.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, rgba(56, 161, 105, 0.15), rgba(167, 243, 208, 0.1)); padding: 8px 16px; border-radius: 25px; border: 1px solid rgba(167, 243, 208, 0.3);">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 6px #10b981;"></div>
                        <span style="color: #a7f3d0; font-weight: 700; font-size: 0.9rem;">Administrador</span>
                    </div>
                    <button onclick="logoutAdmin()" style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; border: none; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 8px rgba(239, 68, 68, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(239, 68, 68, 0.3)'">Sair</button>
                </div>
            `;
        } else {
            navLogin.innerHTML = `
                <form class="login_form" id="login-form">
                    <input type="text" placeholder="Login" class="login_input" id="username">
                    <input type="password" placeholder="Senha" class="login_input" id="password">
                    <button type="submit" class="login_button">Entrar</button>
                </form>
            `;
        }
    }
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    toggleAdminLink();
    updateLoginInterface();
});