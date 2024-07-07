var locations = {
    'home': {
        coords: [-7.820680, 110.426558],
        name: "Ludang ( Pembuat Proyek Ini)",
        image: "assets/img/admin.jpg"
    },
    'friend1': {
        coords: [-7.818056, 110.392439],
        name: "Rohmat cahyo susilo",
        image: "assets/img/rohmad.jpg"
    },
    'friend2': {
        coords: [-2.461111, 106.131780],
        name: "Yoga saputra",
        image: "assets/img/yoga.jpg"
    },
    'friend3': {
        coords: [-5.512911, 122.595906],
        name: "Muhammad Fadrian Samhar",
        image: "assets/img/Fadrian.jpg"
    },
    'friend4': {
        coords: [-7.793475, 110.408455],
        name: "Kasildo trio",
        image: "assets/img/trio.png"
    },
    'friend5': {
        coords: [-7.793663, 110.400068],
        name: "Panggaluh riskiKhinanti",
        image: "assets/img/riski.jpg"
    }
};

var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = {};

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function showLocation(locationKey) {
    // Clear existing markers
    clearMarkers();
    var location = locations[locationKey];
    var popupContent = '<b>' + location.name + '</b><br />Ini adalah ' + location.name + '.<br /><img src="' + location.image + '" alt="' + location.name + '" width="100" height="100">';
    markers[locationKey] = L.marker(location.coords).addTo(map)
        .bindPopup(popupContent)
        .openPopup();
    map.setView(location.coords, 13);
    closeNav();
}

function showAllLocations() {
    // Clear existing markers
    clearMarkers();
    var bounds = [];
    for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
            var location = locations[key];
            var popupContent = '<b>' + location.name + '</b><br />Ini adalah ' + location.name + '.<br /><img src="' + location.image + '" alt="' + location.name + '" width="100" height="100">';
            markers[key] = L.marker(location.coords).addTo(map)
                .bindPopup(popupContent);
            bounds.push(location.coords);
        }
    }
    map.fitBounds(bounds);
    closeNav();
}

function clearMarkers() {
    for (var key in markers) {
        if (markers.hasOwnProperty(key)) {
            map.removeLayer(markers[key]);
        }
    }
    markers = {};
}