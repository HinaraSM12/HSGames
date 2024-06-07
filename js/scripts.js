document.addEventListener('DOMContentLoaded', () => {
    const bannerMessages = [
        {
            text: "¡Aprovecha nuestras ofertas exclusivas!",
            subtext: "Descuentos de hasta el 50% en productos seleccionados.",
            image: "/img/farcry.jpg"
        },
        {
            text: "Nuevos productos disponibles",
            subtext: "Explora nuestra nueva colección.",
            image: "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/09/Banner-facebook030919.jpg"
        },
        {
            text: "Ofertas de verano",
            subtext: "Precios calientes para productos geniales.",
            image: "/img/gtavicecity.jpg"
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
});

