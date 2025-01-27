const btnMenu = document.getElementById("btn-menu");
        const btnFechar = document.getElementById("btn-fechar");
        const menuMobile = document.getElementById("menu-mobile");
        const overlayMenu = document.getElementById("overlay-menu");

        // Função para abrir o menu
        function abrirMenu() {
            menuMobile.style.transform = "translateX(0)";  // Move o menu para a posição visível
            overlayMenu.style.display = "block";  // Exibe a sobreposição
        }

        // Função para fechar o menu
        function fecharMenu() {
            menuMobile.style.transform = "translateX(100%)";  // Move o menu para fora da tela
            overlayMenu.style.display = "none";  // Oculta a sobreposição
        }

        // Eventos de clique
        btnMenu.addEventListener("click", abrirMenu);  // Abre o menu ao clicar no ícone
        btnFechar.addEventListener("click", fecharMenu);  // Fecha o menu ao clicar no "X"
        overlayMenu.addEventListener("click", fecharMenu);  // Fecha o menu ao clicar na sobreposição


        

