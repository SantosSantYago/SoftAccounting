document.addEventListener('DOMContentLoaded', () => {
    
    // --- PASSO 1: CRIAR O BOTÃO DINAMICAMENTE ---
    // Criamos a estrutura que antes ficava no HTML
    const wrapper = document.createElement('div');
    wrapper.className = 'theme-switch-wrapper';
    
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.setAttribute('aria-label', 'Alternar modo claro e escuro');
    button.innerText = "🌓 Modo Escuro";
    
    // Colocamos o botão dentro da div e a div dentro do body
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);

    // --- PASSO 2: LÓGICA DE PERSISTÊNCIA ---
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    // Função para atualizar o texto do botão
    const updateButtonText = () => {
        button.innerText = body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    };

    // Aplica o tema salvo ao carregar
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateButtonText();
    }

    // --- PASSO 3: EVENTO DE CLIQUE ---
    button.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateButtonText();
    });
});

    // --- 2. VALIDAÇÃO DE FORMULÁRIO SEGURA ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Impede o envio padrão para validar antes
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples de segurança (Anti-spam/vazio)
            if (nome.length < 3 || !email.includes('@') || mensagem.length < 10) {
                alert('Por favor, preencha todos os campos corretamente para sua segurança.');
                return;
            }

            // Simulação de envio bem-sucedido
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso para a Soft Accounting.`);
            contactForm.reset();
        });
    }

    // --- 3. MANIPULAÇÃO DE LINKS ATIVOS (DOM) ---
    // Identifica em qual página o usuário está e marca no menu
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.style.fontWeight = 'bold';
            link.style.color = 'var(--accent-color)';
        }
    });
