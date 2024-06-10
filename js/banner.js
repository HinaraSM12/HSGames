// Llamar a la función buscarOfertas cuando sea necesario
document.addEventListener('DOMContentLoaded', () => {
    const bannerMessages = [
        {
            text: "¡Aprovecha nuestras ofertas exclusivas!",
            subtext: "Descuentos de hasta el 50% en productos seleccionados.",
            image: "https://www.algoritmolegal.com/wp-content/uploads/2022/01/Guia-legal-de-los-videojuegos.jpg"
        },
        {
            text: "Nuevos productos disponibles",
            subtext: "Explora nuestra nueva colección.",
            image: "https://png.pngtree.com/background/20230519/original/pngtree-display-of-old-games-and-consoles-picture-image_2652598.jpg"
        },
        {
            text: "Ofertas de verano",
            subtext: "Precios calientes para productos geniales.",
            image: "https://acloserlisten.com/wp-content/uploads/2020/01/games-banner-1140x400-1.png"
        }
    ]

    let currentIndex = 0;

    function updateBanner() {
        const banner = document.getElementById('banner');
        const bannerContent = document.querySelector('.banner-content');
        
        banner.style.backgroundImage = `url(${bannerMessages[currentIndex].image})`;
        bannerContent.querySelector('h2').textContent = bannerMessages[currentIndex].text;
        bannerContent.querySelector('p').textContent = bannerMessages[currentIndex].subtext;

        currentIndex = (currentIndex + 1) % bannerMessages.length;
    }

    setInterval(updateBanner, 5000); // Cambia el banner cada 5 segundos




    const verOfertasButton = document.getElementById('banner-button');

    verOfertasButton.addEventListener('click', () => {
            window.location.href = '../pages/ofertas.html';
    });

});

