const hoverBrands = document.querySelectorAll(".brandBox");
const images = document.querySelectorAll(".backImage");

hoverBrands.forEach((brand, i) => {
    brand.addEventListener("mouseover", () => {
        const index = brand.dataset.index;

        // Primero, removemos la clase "active" de todas las imágenes
        images.forEach(image => image.classList.remove("active"));

        // Luego, activamos la imagen correspondiente
        const selectedImage = document.querySelector(`.backImage[data-index="${index}"]`);
        if (selectedImage) {
            selectedImage.classList.add("active");
        }
    });
    // Evento "mouseout" para ocultar todas las imágenes cuando el ratón sale del área de la marca
    brand.addEventListener("mouseout", () => {
        images.forEach(image => image.classList.remove("active"));
    });
});