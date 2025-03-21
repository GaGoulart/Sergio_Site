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

    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("5tKA6SuxQvdKu1p4A"); // Substitua pelo seu User ID do EmailJS
    
        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Evita o recarregamento da página
    
            const params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                message: document.getElementById("message").value,
            };
    
            emailjs.send("service_q7q3itf", "template_temh7vf", params)
                .then(function (response) {
                    alert("Mensagem enviada com sucesso!");
                    document.getElementById("contact-form").reset(); // Limpa o formulário
                }, function (error) {
                    alert("Erro ao enviar a mensagem. Tente novamente.");
                    console.log("Erro:", error);
                });
        });
    });
