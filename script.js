document.addEventListener('DOMContentLoaded', () => {
    
    // Botão para alternar entre o modo Claro e Escuro
    const wrapper = document.createElement('div');
    wrapper.className = 'theme-switch-wrapper';
    
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.setAttribute('aria-label', 'Alternar modo claro e escuro');
    button.innerText = "🌓 Modo Escuro";
    
    // Colocamos o botão dentro da div e a div dentro do body
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);

    // Onde irá ficar gravado a opção de escolha entre os modos Claro e Escuro
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    const updateButtonText = () => {
        button.innerText = body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    };

    // Aplicar o tema salvo ao carregar uma página
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

    // Validação de formulário
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Impede o envio padrão para validar antes
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim(); //.value.trim()remove espaços vazios no início ou fim do texto
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples de segurança (se o nome tem menos de 3 letras, se o e-mail possui @, se a mensagem tem menos de 10 caracteres))
            if (nome.length < 3 || !email.includes('@') || mensagem.length < 10) {
                alert('Por favor, preencha todos os campos corretamente para sua segurança.');
                return;
            }

            // O site não possui um banco de dados vinculado, então esse código simula o envio bem-sucedido do formulário
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso para a Soft Accounting.`);
            contactForm.reset();// após o envio o formulário será resetado para um novo uso
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
