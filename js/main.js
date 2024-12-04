document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500'];
    let currentColorIndex = 0;

    if (colorButton) {
        colorButton.addEventListener('click', function() {
            // Remove current color
            colors.forEach(color => {
                this.classList.remove(color);
            });

            // Add next color
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            this.classList.add(colors[currentColorIndex]);
        });
    }
});