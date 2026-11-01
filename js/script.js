
// =====================================
// PROPERTYHUB - JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // PROPERTY SEARCH
    const searchButton = document.getElementById("searchBtn");
    const locationInput = document.getElementById("locationSearch");
    const propertyType = document.getElementById("propertyType");
    const propertyCards = document.querySelectorAll(".property-card");
    const noResults = document.getElementById("noResults");

    function searchProperties() {

        const locationValue = locationInput.value
            .toLowerCase()
            .trim();

        const typeValue = propertyType.value;

        let visibleCount = 0;

        propertyCards.forEach(function (card) {

            const cardLocation = card.dataset.location.toLowerCase();
            const cardName = card.dataset.name.toLowerCase();
            const cardType = card.dataset.type.toLowerCase();

            const matchesLocation =
                cardLocation.includes(locationValue) ||
                cardName.includes(locationValue);

            const matchesType =
                typeValue === "all" ||
                cardType === typeValue;

            if (matchesLocation && matchesType) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        // SHOW MESSAGE IF NO PROPERTY MATCHES
        if (visibleCount === 0) {
            noResults.hidden = false;
        } else {
            noResults.hidden = true;
        }

    }

    // SEARCH BUTTON
    searchButton.addEventListener("click", searchProperties);

    // SEARCH WHEN PRESSING ENTER
    locationInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProperties();
        }
    });

    // FILTER WHEN PROPERTY TYPE CHANGES
    propertyType.addEventListener("change", searchProperties);


    // HEADER NAVIGATION SMOOTH SCROLL
    const navigationLinks = document.querySelectorAll(
        '.navbar nav a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
