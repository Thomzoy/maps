(function () {
  "use strict";

  const TOPO_URL =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

  const FR = {
    "Afghanistan": "Afghanistan",
    "Albania": "Albanie",
    "Algeria": "Algérie",
    "Andorra": "Andorre",
    "Angola": "Angola",
    "Argentina": "Argentine",
    "Australia": "Australie",
    "Austria": "Autriche",
    "Azerbaijan": "Azerbaïdjan",
    "Bahamas": "Bahamas",
    "Bahrain": "Bahreïn",
    "Bangladesh": "Bangladesh",
    "Barbados": "Barbade",
    "Belarus": "Biélorussie",
    "Belgium": "Belgique",
    "Belize": "Belize",
    "Benin": "Bénin",
    "Bhutan": "Bhoutan",
    "Bolivia": "Bolivie",
    "Bosnia and Herz.": "Bosnie-Herzégovine",
    "Botswana": "Botswana",
    "Brazil": "Brésil",
    "Brunei": "Brunei",
    "Bulgaria": "Bulgarie",
    "Burkina Faso": "Burkina Faso",
    "Burundi": "Burundi",
    "Cabo Verde": "Cap-Vert",
    "Cambodia": "Cambodge",
    "Cameroon": "Cameroun",
    "Canada": "Canada",
    "Central African Rep.": "Rép. centrafricaine",
    "Chad": "Tchad",
    "Chile": "Chili",
    "China": "Chine",
    "Colombia": "Colombie",
    "Comoros": "Comores",
    "Congo": "Congo",
    "Costa Rica": "Costa Rica",
    "Croatia": "Croatie",
    "Cuba": "Cuba",
    "Cyprus": "Chypre",
    "Czechia": "Tchéquie",
    "Côte d'Ivoire": "Côte d'Ivoire",
    "Dem. Rep. Congo": "Rép. dém. du Congo",
    "Denmark": "Danemark",
    "Djibouti": "Djibouti",
    "Dominican Rep.": "Rép. dominicaine",
    "Ecuador": "Équateur",
    "Egypt": "Égypte",
    "El Salvador": "Salvador",
    "Eq. Guinea": "Guinée équatoriale",
    "Eritrea": "Érythrée",
    "Estonia": "Estonie",
    "Ethiopia": "Éthiopie",
    "eSwatini": "Eswatini",
    "Falkland Is.": "Îles Malouines",
    "Fiji": "Fidji",
    "Finland": "Finlande",
    "France": "France",
    "Gabon": "Gabon",
    "Gambia": "Gambie",
    "Georgia": "Géorgie",
    "Germany": "Allemagne",
    "Ghana": "Ghana",
    "Greece": "Grèce",
    "Greenland": "Groenland",
    "Guatemala": "Guatemala",
    "Guinea": "Guinée",
    "Guinea-Bissau": "Guinée-Bissau",
    "Guyana": "Guyana",
    "Haiti": "Haïti",
    "Honduras": "Honduras",
    "Hungary": "Hongrie",
    "Iceland": "Islande",
    "India": "Inde",
    "Indonesia": "Indonésie",
    "Iran": "Iran",
    "Iraq": "Irak",
    "Ireland": "Irlande",
    "Israel": "Israël",
    "Italy": "Italie",
    "Jamaica": "Jamaïque",
    "Japan": "Japon",
    "Jordan": "Jordanie",
    "Kazakhstan": "Kazakhstan",
    "Kenya": "Kenya",
    "Kosovo": "Kosovo",
    "Kuwait": "Koweït",
    "Kyrgyzstan": "Kirghizistan",
    "Laos": "Laos",
    "Latvia": "Lettonie",
    "Lebanon": "Liban",
    "Lesotho": "Lesotho",
    "Liberia": "Libéria",
    "Libya": "Libye",
    "Liechtenstein": "Liechtenstein",
    "Lithuania": "Lituanie",
    "Luxembourg": "Luxembourg",
    "Macedonia": "Macédoine du Nord",
    "Madagascar": "Madagascar",
    "Malawi": "Malawi",
    "Malaysia": "Malaisie",
    "Mali": "Mali",
    "Malta": "Malte",
    "Mauritania": "Mauritanie",
    "Mexico": "Mexique",
    "Moldova": "Moldavie",
    "Monaco": "Monaco",
    "Mongolia": "Mongolie",
    "Montenegro": "Monténégro",
    "Morocco": "Maroc",
    "Mozambique": "Mozambique",
    "Myanmar": "Myanmar",
    "Namibia": "Namibie",
    "Nepal": "Népal",
    "Netherlands": "Pays-Bas",
    "New Caledonia": "Nouvelle-Calédonie",
    "New Zealand": "Nouvelle-Zélande",
    "Nicaragua": "Nicaragua",
    "Niger": "Niger",
    "Nigeria": "Nigéria",
    "North Korea": "Corée du Nord",
    "Norway": "Norvège",
    "Oman": "Oman",
    "Pakistan": "Pakistan",
    "Palestine": "Palestine",
    "Panama": "Panama",
    "Papua New Guinea": "Papouasie-Nouvelle-Guinée",
    "Paraguay": "Paraguay",
    "Peru": "Pérou",
    "Philippines": "Philippines",
    "Poland": "Pologne",
    "Portugal": "Portugal",
    "Puerto Rico": "Porto Rico",
    "Qatar": "Qatar",
    "Romania": "Roumanie",
    "Russia": "Russie",
    "Rwanda": "Rwanda",
    "S. Sudan": "Soudan du Sud",
    "San Marino": "Saint-Marin",
    "Saudi Arabia": "Arabie saoudite",
    "Senegal": "Sénégal",
    "Serbia": "Serbie",
    "Sierra Leone": "Sierra Leone",
    "Slovakia": "Slovaquie",
    "Slovenia": "Slovénie",
    "Solomon Is.": "Îles Salomon",
    "Somalia": "Somalie",
    "Somaliland": "Somaliland",
    "South Africa": "Afrique du Sud",
    "South Korea": "Corée du Sud",
    "Spain": "Espagne",
    "Sri Lanka": "Sri Lanka",
    "Sudan": "Soudan",
    "Suriname": "Suriname",
    "Sweden": "Suède",
    "Switzerland": "Suisse",
    "Syria": "Syrie",
    "Taiwan": "Taïwan",
    "Tajikistan": "Tadjikistan",
    "Tanzania": "Tanzanie",
    "Thailand": "Thaïlande",
    "Timor-Leste": "Timor oriental",
    "Togo": "Togo",
    "Trinidad and Tobago": "Trinité-et-Tobago",
    "Tunisia": "Tunisie",
    "Turkey": "Turquie",
    "Turkmenistan": "Turkménistan",
    "Uganda": "Ouganda",
    "Ukraine": "Ukraine",
    "United Arab Emirates": "Émirats arabes unis",
    "United Kingdom": "Royaume-Uni",
    "United States of America": "États-Unis",
    "Uruguay": "Uruguay",
    "Uzbekistan": "Ouzbékistan",
    "Vanuatu": "Vanuatu",
    "Venezuela": "Venezuela",
    "Vietnam": "Viêt Nam",
    "W. Sahara": "Sahara occidental",
    "Yemen": "Yémen",
    "Zambia": "Zambie",
    "Zimbabwe": "Zimbabwe",
  };

  function fr(name) {
    return FR[name] || name;
  }

  const REGIONS = {
    europe: {
      label: "Europe",
      bounds: [[-28, 34], [50, 72]],
      countries: [
        "Albania", "Andorra", "Austria", "Belarus", "Belgium",
        "Bosnia and Herz.", "Bulgaria", "Croatia", "Czechia", "Denmark",
        "Estonia", "Finland", "France", "Germany", "Greece",
        "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
        "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta",
        "Moldova", "Monaco", "Montenegro", "Netherlands", "Macedonia",
        "Norway", "Poland", "Portugal", "Romania", "Russia",
        "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain",
        "Sweden", "Switzerland", "Ukraine", "United Kingdom",
      ],
    },
    africa: {
      label: "Afrique",
      bounds: [[-20, -37], [53, 38]],
      countries: [
        "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cameroon", "Central African Rep.", "Chad",
        "Comoros", "Congo", "Côte d'Ivoire", "Dem. Rep. Congo", "Djibouti",
        "Egypt", "Eq. Guinea", "Eritrea", "eSwatini", "Ethiopia",
        "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau",
        "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar",
        "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique",
        "Namibia", "Niger", "Nigeria", "Rwanda", "Senegal",
        "Sierra Leone", "Somalia", "Somaliland", "South Africa", "S. Sudan",
        "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
        "W. Sahara", "Zambia", "Zimbabwe",
      ],
    },
    middleEast: {
      label: "Moyen-Orient",
      bounds: [[24, 11], [64, 43]],
      countries: [
        "Bahrain", "Cyprus", "Egypt", "Iran", "Iraq",
        "Israel", "Jordan", "Kuwait", "Lebanon", "Oman",
        "Palestine", "Qatar", "Saudi Arabia", "Syria", "Turkey",
        "United Arab Emirates", "Yemen",
      ],
    },
    centralAsia: {
      label: "Asie centrale",
      bounds: [[46, 34], [88, 56]],
      countries: [
        "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Uzbekistan",
      ],
    },
    eastAsia: {
      label: "Asie de l'Est",
      bounds: [[72, 17], [150, 55]],
      countries: [
        "China", "Japan", "Mongolia", "North Korea", "South Korea", "Taiwan",
      ],
    },
    southSoutheastAsia: {
      label: "Asie du Sud-Est",
      bounds: [[60, -12], [142, 38]],
      countries: [
        "Afghanistan", "Bangladesh", "Bhutan", "Brunei", "Cambodia",
        "India", "Indonesia", "Laos", "Malaysia", "Myanmar",
        "Nepal", "Pakistan", "Philippines", "Sri Lanka", "Thailand",
        "Timor-Leste", "Vietnam",
      ],
    },
    northAmerica: {
      label: "Amérique du Nord",
      bounds: [[-170, 7], [-50, 84]],
      countries: [
        "Canada", "Greenland", "Mexico", "United States of America",
      ],
    },
    centralAmericaCaribbean: {
      label: "Amérique centrale & Caraïbes",
      bounds: [[-93, 6], [-58, 25]],
      countries: [
        "Belize", "Costa Rica", "Cuba", "Dominican Rep.", "El Salvador",
        "Guatemala", "Haiti", "Honduras", "Jamaica", "Nicaragua",
        "Panama", "Puerto Rico", "Trinidad and Tobago",
      ],
    },
    southAmerica: {
      label: "Amérique du Sud",
      bounds: [[-83, -57], [-33, 14]],
      countries: [
        "Argentina", "Bolivia", "Brazil", "Chile", "Colombia",
        "Ecuador", "Falkland Is.", "Guyana", "Paraguay", "Peru",
        "Suriname", "Uruguay", "Venezuela",
      ],
    },
    oceania: {
      label: "Océanie",
      bounds: [[108, -48], [182, 2]],
      countries: [
        "Australia", "Fiji", "New Caledonia", "New Zealand",
        "Papua New Guinea", "Solomon Is.", "Vanuatu",
      ],
    },
  };

  const timerEl = document.getElementById("timer");
  const promptText = document.getElementById("prompt-text");
  const scoreEl = document.getElementById("score");
  const regionSelector = document.getElementById("region-selector");
  const regionButtonsEl = document.getElementById("region-buttons");
  const overlay = document.getElementById("overlay");
  const overlayTitle = document.getElementById("overlay-title");
  const overlayMessage = document.getElementById("overlay-message");
  const overlayButton = document.getElementById("overlay-button");

  let worldFeatures = null;
  let gameState = "loading";
  let currentRegionKey = null;
  let remaining = [];
  let totalCount = 0;
  let found = new Set();
  let currentTarget = null;
  let elapsedSeconds = 0;
  let timerInterval = null;

  const svg = d3.select("#map");
  let projection, pathGenerator;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatTime(secs) {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  async function loadData() {
    promptText.textContent = "Chargement\u2026";
    try {
      const resp = await fetch(TOPO_URL);
      const topo = await resp.json();
      worldFeatures = topojson.feature(topo, topo.objects.countries).features;
      showMenu();
    } catch (err) {
      promptText.textContent = "Erreur de chargement. Rafraîchis la page.";
      console.error(err);
    }
  }

  function showMenu() {
    gameState = "menu";
    promptText.textContent = "Choisis une région";
    scoreEl.textContent = "";
    timerEl.textContent = "00:00";
    timerEl.classList.remove("running");
    clearInterval(timerInterval);

    const availableNames = new Set(worldFeatures.map((f) => f.properties.name));

    regionButtonsEl.innerHTML = "";
    for (const [key, region] of Object.entries(REGIONS)) {
      const count = region.countries.filter((c) => availableNames.has(c)).length;
      const btn = document.createElement("button");
      btn.textContent = `${region.label} (${count})`;
      btn.addEventListener("click", () => startGame(key));
      regionButtonsEl.appendChild(btn);
    }

    regionSelector.classList.remove("hidden");
    overlay.classList.add("hidden");
    svg.selectAll("*").remove();
  }

  function startGame(regionKey) {
    currentRegionKey = regionKey;
    const region = REGIONS[regionKey];

    const availableNames = new Set(worldFeatures.map((f) => f.properties.name));
    const validCountries = region.countries.filter((c) => availableNames.has(c));

    remaining = shuffle([...validCountries]);
    totalCount = remaining.length;
    found = new Set();
    currentTarget = null;
    elapsedSeconds = 0;
    clearInterval(timerInterval);

    regionSelector.classList.add("hidden");
    overlay.classList.add("hidden");

    renderMap(regionKey);
    nextCountry();
    startTimer();
  }

  function renderMap(regionKey) {
    const region = REGIONS[regionKey];
    const regionSet = new Set(region.countries);

    const container = document.getElementById("map-container");
    const width = container.clientWidth;
    const height = container.clientHeight;

    svg.attr("viewBox", `0 0 ${width} ${height}`);
    svg.selectAll("*").remove();

    const [[w, s], [e, n]] = region.bounds;
    const bbox = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[w, s], [e, s], [e, n], [w, n], [w, s]]],
      },
    };

    projection = d3.geoMercator().fitExtent(
      [[20, 20], [width - 20, height - 20]],
      bbox
    );
    pathGenerator = d3.geoPath(projection);

    svg
      .selectAll("path.country")
      .data(worldFeatures)
      .join("path")
      .attr("class", (d) =>
        regionSet.has(d.properties.name) ? "country" : "country inactive"
      )
      .attr("d", pathGenerator)
      .on("click", (_event, d) => handleClick(d));
  }

  function handleClick(feature) {
    if (gameState !== "playing") return;

    const name = feature.properties.name;
    const regionSet = new Set(REGIONS[currentRegionKey].countries);

    if (!regionSet.has(name)) return;
    if (found.has(name)) return;

    if (name === currentTarget) {
      found.add(name);
      svg
        .selectAll("path.country")
        .filter((d) => d.properties.name === name)
        .classed("found", true);

      updateScore();

      if (remaining.length === 0) {
        victory();
      } else {
        nextCountry();
      }
    } else {
      gameOver(name);
    }
  }

  function nextCountry() {
    gameState = "playing";
    currentTarget = remaining.pop();
    promptText.innerHTML =
      'Trouve : <span class="country-name">' + fr(currentTarget) + "</span>";
    updateScore();
  }

  function updateScore() {
    scoreEl.textContent = `${found.size} / ${totalCount}`;
  }

  function startTimer() {
    timerEl.classList.add("running");
    timerEl.textContent = "00:00";
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      timerEl.textContent = formatTime(elapsedSeconds);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerEl.classList.remove("running");
  }

  function gameOver(clickedName) {
    gameState = "gameover";
    stopTimer();

    svg
      .selectAll("path.country")
      .filter((d) => d.properties.name === clickedName)
      .classed("wrong", true);

    svg
      .selectAll("path.country")
      .filter((d) => d.properties.name === currentTarget)
      .classed("correct-reveal", true);

    overlayTitle.textContent = "Perdu !";
    overlayTitle.className = "defeat";
    overlayMessage.innerHTML =
      "Tu as cliqué sur <strong>" +
      fr(clickedName) +
      "</strong> au lieu de <strong>" +
      fr(currentTarget) +
      "</strong>.<br>" +
      "Score : " +
      found.size +
      " / " +
      totalCount +
      " en " +
      formatTime(elapsedSeconds);
    overlayButton.textContent = "Réessayer";
    overlay.classList.remove("hidden");
  }

  function victory() {
    gameState = "victory";
    stopTimer();

    overlayTitle.textContent = "Victoire !";
    overlayTitle.className = "victory";
    overlayMessage.innerHTML =
      "Tu as trouvé les " +
      totalCount +
      " pays en <strong>" +
      formatTime(elapsedSeconds) +
      "</strong> !";
    overlayButton.textContent = "Rejouer";
    overlay.classList.remove("hidden");
  }

  overlayButton.addEventListener("click", showMenu);

  window.addEventListener("resize", () => {
    if (gameState === "playing" && currentRegionKey) {
      const region = REGIONS[currentRegionKey];

      const container = document.getElementById("map-container");
      const width = container.clientWidth;
      const height = container.clientHeight;

      svg.attr("viewBox", `0 0 ${width} ${height}`);

      const [[w, s], [e, n]] = region.bounds;
      const bbox = {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [[[w, s], [e, s], [e, n], [w, n], [w, s]]],
        },
      };

      projection = d3.geoMercator().fitExtent(
        [[20, 20], [width - 20, height - 20]],
        bbox
      );
      pathGenerator = d3.geoPath(projection);

      svg.selectAll("path.country").attr("d", pathGenerator);
    }
  });

  loadData();
})();
