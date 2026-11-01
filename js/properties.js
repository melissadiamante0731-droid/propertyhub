
document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("searchBtn");
    const locationInput = document.getElementById("locationSearch");
    const typeSelect = document.getElementById("propertyType");
    const cards = document.querySelectorAll(".property-card");
    const noResults = document.getElementById("noResults");
    const propertyCount = document.getElementById("propertyCount");

    function filterProperties() {

        const location = locationInput.value.toLowerCase().trim();
        const type = typeSelect.value;
        let count = 0;

        cards.forEach(function (card) {

            const cardLocation = card.dataset.location.toLowerCase();
            const cardName = card.dataset.name.toLowerCase();
            const cardType = card.dataset.type;

            const matchesLocation =
                cardLocation.includes(location) ||
                cardName.includes(location);

            const matchesType =
                type === "all" || cardType === type;

            const visible = matchesLocation && matchesType;

            card.style.display = visible ? "block" : "none";

            if (visible) count++;

        });

        noResults.hidden = count !== 0;
        propertyCount.textContent = "Showing " + count + " properties";

    }

    searchButton.addEventListener("click", filterProperties);
    typeSelect.addEventListener("change", filterProperties);

    locationInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") filterProperties();
    });

    filterProperties();

});
