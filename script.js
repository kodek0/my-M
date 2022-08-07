function swapImage() {
    const imageDisplayed = document.getElementById('display-image');

    if (imageDisplayed.src.match('obrazy/daria.png')) {
        imageDisplayed.src = 'obrazy/baletnica.png';
    } else {
        imageDisplayed.src = "obrazy/daria.png";
    }
}
