function getLocation() {
    const output = document.getElementById("output");
    if (navigator.geoLocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.Latitude;
                const lon = position.coords.Longitude;
                output.textContent = `Широта: ${lat}, Долгота: ${lon}`;
            },
            () => {
                output.textContent = "Не удалось получилось координаты";
            }
        );
    }
    else {
        output.textContent = "Геолокачия не поддерживается вашим браузером";
    }
}