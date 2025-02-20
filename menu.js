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



        //Imagens Cada Pagina
        const images = ["imagens/123.jpg", "imagens/432.jpg", "imagens/Predio_exemplo.jpg"];
    let currentIndex = 0;

    function updateImage() {
        const imgElement = document.getElementById("gallery-img");
        imgElement.src = images[currentIndex];
    }

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });


    //Seção sobre cada imovel

    document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("show-more");
        const extraInfo = document.getElementById("extra-info");

        // Esconde a seção extra no carregamento da página
        extraInfo.style.display = "none";

        button.addEventListener("click", function () {
            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
                button.textContent = "Ver Menos";
            } else {
                extraInfo.style.display = "none";
                button.textContent = "Ver Mais";
            }
        });
    });

    //Formulario
    document.addEventListener("DOMContentLoaded", function () {
        const phoneInput = document.getElementById("phone");
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("email-error");

        // Formatação do telefone
        phoneInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

            if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

            // Aplica a máscara (XX) XXXXX-XXXX
            if (value.length > 6) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            } else if (value.length > 2) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length > 0) {
                e.target.value = `(${value}`;
            }
        });

        // Validação do e-mail
        emailInput.addEventListener("input", function () {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mail
            if (!emailPattern.test(emailInput.value)) {
                emailError.style.display = "block";
            } else {
                emailError.style.display = "none";
            }
        });
    });