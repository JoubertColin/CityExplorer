/* ==========================================================================
   City Explorer - Shared Application Logic
   Dynamic Filters and Modal Viewer
   Reused by every city page — each city only supplies its own data.js
   (window.CITY_NAME + window.CITY_DATA) loaded before this script.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. City Data (supplied by this page's data.js)
     ------------------------------------------------------------------------ */
  const SPOTS = window.CITY_DATA || [];
  const CITY_NAME = window.CITY_NAME || '';

  /* Category metadata: label -> visual class + dot class.
     Keeping this centralized means each city's data.js only needs to name
     a category (e.g. "Natureza"); the color/badge is derived from here. */
  const CATEGORY_META = {
    'Natureza':       { cls: 'nature',  dot: 'nature-dot' },
    'Cultura':        { cls: 'culture', dot: 'culture-dot' },
    'Mirante':        { cls: 'view',    dot: 'view-dot' },
    'Gastronomia':    { cls: 'food',    dot: 'food-dot' },
    'Compras':        { cls: 'shop',    dot: 'shop-dot' },
    'Entretenimento': { cls: 'fun',     dot: 'fun-dot' },
    'Natal':          { cls: 'holiday', dot: 'holiday-dot' },
  };

  function getCategoryClass(category) {
    return (CATEGORY_META[category] || {}).cls || '';
  }

  /* ------------------------------------------------------------------------
     2. Application State Variables
     ------------------------------------------------------------------------ */
  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'route';
  let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

  /* DOM Element References */
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryFilters = document.getElementById('categoryFilters');
  const categoryMenu = document.getElementById('categoryMenu');
  const categoryMenuBtn = document.getElementById('categoryMenuBtn');
  const categoryMenuLabel = document.getElementById('categoryMenuLabel');
  const citiesMenu = document.getElementById('citiesMenu');
  const citiesMenuBtn = document.getElementById('citiesMenuBtn');
  const sortSelect = document.getElementById('sortSelect');
  const spotsList = document.getElementById('spotsList');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // Modal elements
  const detailModal = document.getElementById('detailModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalRating = document.getElementById('modalRating');
  const modalHours = document.getElementById('modalHours');
  const modalAddress = document.getElementById('modalAddress');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const modalTip = document.getElementById('modalTip');
  const modalExternalMapBtn = document.getElementById('modalExternalMapBtn');
  let activeModalSpotId = null;

  /* ------------------------------------------------------------------------
     3. Category Filter Pills (built from the data, so counts/categories
        always match whatever this city's data.js actually contains)
     ------------------------------------------------------------------------ */
  function renderCategoryPills() {
    const counts = {};
    SPOTS.forEach(spot => {
      counts[spot.category] = (counts[spot.category] || 0) + 1;
    });

    let html = `
      <button class="pill active" data-category="all">
        <span class="pill-dot all-dot"></span>
        <span>Todos</span>
        <span class="pill-count">${SPOTS.length}</span>
      </button>
    `;

    Object.keys(CATEGORY_META).forEach(category => {
      if (!counts[category]) return;
      const meta = CATEGORY_META[category];
      html += `
        <button class="pill" data-category="${category}">
          <span class="pill-dot ${meta.dot}"></span>
          <span>${category}</span>
          <span class="pill-count">${counts[category]}</span>
        </button>
      `;
    });

    categoryFilters.innerHTML = html;
  }

  /* ------------------------------------------------------------------------
     4. Render Cards & Filter Engine
     ------------------------------------------------------------------------ */
  /* Builds a search URL for an external site with info about the spot
     (there's no curated official-site field in the dataset, so a search
     query is the safest option that always resolves to something useful). */
  function getExternalInfoUrl(spot) {
    const query = encodeURIComponent(`${spot.name} ${spot.city || CITY_NAME}`);
    return `https://www.google.com/search?q=${query}`;
  }

  function getFilteredSpots() {
    return SPOTS.filter(spot => {
      const matchesCategory = (currentCategory === 'all') || (spot.category === currentCategory);
      const matchesSearch = searchQuery === '' ||
        spot.name.toLowerCase().includes(searchQuery) ||
        spot.category.toLowerCase().includes(searchQuery) ||
        spot.address.toLowerCase().includes(searchQuery) ||
        spot.summary.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (currentSort === 'popular') return a.popularRank - b.popularRank;
      if (currentSort === 'name') return a.name.localeCompare(b.name);
      if (currentSort === 'category') return a.category.localeCompare(b.category);
      return a.route - b.route; // default 'route'

    });
  }

  function renderSpots() {
    const filtered = getFilteredSpots();
    spotsList.innerHTML = '';

    if (filtered.length === 0) {
      spotsList.innerHTML = `
        <div class="empty-state">
          <p>Nenhum ponto turístico encontrado com esses critérios.</p>
          <small>Tente alterar o termo de busca ou limpar os filtros de categoria.</small>
        </div>
      `;
      return;
    }

    filtered.forEach(spot => {
      const categoryClass = getCategoryClass(spot.category);
      const card = document.createElement('article');
      card.className = 'spot-card';
      card.dataset.id = spot.id;

      card.innerHTML = `
        <div class="card-media">
          <img src="${spot.image}" alt="${spot.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1596489310860-264b38d3876e?w=800'">
          <span class="card-badge-category ${categoryClass}">${spot.category}</span>
        </div>
        <div class="card-content">
          <div class="card-title-row">
            <h3 class="card-title">${spot.name}</h3>
            <span class="card-rating">${spot.rating}</span>
          </div>
          <p class="card-summary">${spot.summary}</p>
          <div class="card-footer">
            <span class="card-address">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              ${spot.address.includes(' - ') ? spot.address.split(' - ').pop() : spot.address}
            </span>
            <div class="card-actions">
              <a class="btn-card-action" href="${getExternalInfoUrl(spot)}" target="_blank" rel="noopener noreferrer">
                Saiba+
              </a>
              <button class="btn-card-action" data-action="detail" data-id="${spot.id}">
                Detalhes
              </button>
            </div>
          </div>
        </div>
      `;

      // Click card to open the detail modal
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-card-action')) return; // handled by button
        openDetailModal(spot.id);
      });

      spotsList.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------------
     5. Category Pills & Search Input Listeners
     ------------------------------------------------------------------------ */
  categoryFilters.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentCategory = pill.dataset.category;
    if (categoryMenuLabel) {
      categoryMenuLabel.textContent = pill.dataset.category === 'all'
        ? 'Todos'
        : pill.dataset.category;
    }
    renderSpots();
    closeCategoryMenu();
  });

  /* ------------------------------------------------------------------------
     Hamburger Category Menu (open/close behavior)
     ------------------------------------------------------------------------ */
  function openCategoryMenu() {
    categoryMenu.classList.add('open');
    categoryMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeCategoryMenu() {
    categoryMenu.classList.remove('open');
    categoryMenuBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleCategoryMenu() {
    if (categoryMenu.classList.contains('open')) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  }

  if (categoryMenuBtn) {
    categoryMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCategoryMenu();
    });
  }

  // Close the menu when clicking anywhere outside of it
  document.addEventListener('click', (e) => {
    if (!categoryMenu.classList.contains('open')) return;
    if (categoryMenu.contains(e.target)) return;
    closeCategoryMenu();
  });

  // Close the menu with the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCategoryMenu();
  });

  /* ------------------------------------------------------------------------
     Hamburger "Cidades" Menu (open/close behavior — mobile only, see CSS)
     ------------------------------------------------------------------------ */
  function openCitiesMenu() {
    citiesMenu.classList.add('open');
    citiesMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeCitiesMenu() {
    citiesMenu.classList.remove('open');
    citiesMenuBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleCitiesMenu() {
    if (citiesMenu.classList.contains('open')) {
      closeCitiesMenu();
    } else {
      openCitiesMenu();
    }
  }

  if (citiesMenuBtn) {
    citiesMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCitiesMenu();
    });
  }

  // Close the menu when clicking anywhere outside of it
  document.addEventListener('click', (e) => {
    if (!citiesMenu || !citiesMenu.classList.contains('open')) return;
    if (citiesMenu.contains(e.target)) return;
    closeCitiesMenu();
  });

  // Close the menu with the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && citiesMenu) closeCitiesMenu();
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle('hidden', searchQuery === '');
    renderSpots();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderSpots();
  });

  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderSpots();
  });

  /* Handle Card Action Buttons via Event Delegation */
  spotsList.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('[data-action="detail"]');
    if (!actionBtn) return;
    openDetailModal(actionBtn.dataset.id);
  });

  // Global scope helper binding used by the modal's inline onclick-free flow
  window.openDetailModal = openDetailModal;

  /* ------------------------------------------------------------------------
     6. Location Detail Modal Engine
     ------------------------------------------------------------------------ */
  function openDetailModal(spotId) {
    const spot = SPOTS.find(s => s.id === spotId);
    if (!spot) return;

    activeModalSpotId = spotId;
    modalImage.src = spot.image;
    modalCategory.textContent = spot.category;
    modalCategory.className = `badge-category ${getCategoryClass(spot.category)}`;
    modalTitle.textContent = spot.name;
    modalRating.textContent = spot.rating;
    modalHours.textContent = spot.hours;
    modalAddress.textContent = spot.address;
    modalPrice.textContent = spot.price;
    modalDescription.textContent = spot.description;
    modalTip.textContent = spot.tip;

    // Google Maps link
    const query = encodeURIComponent(`${spot.name} ${spot.city || CITY_NAME}`);
    modalExternalMapBtn.href = `https://www.google.com/maps/search/?api=1&query=${query}`;

    detailModal.classList.remove('hidden');
    detailModal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    detailModal.classList.add('hidden');
    detailModal.setAttribute('aria-hidden', 'true');
    activeModalSpotId = null;
  }

  closeModalBtn.addEventListener('click', closeModal);

  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
  });

  /* ------------------------------------------------------------------------
     7. Theme Switcher (Dark / Light Glassmorphism Mode)
     ------------------------------------------------------------------------ */
  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
  });

  /* ------------------------------------------------------------------------
     8. Initial App Bootstrap
     ------------------------------------------------------------------------ */
  renderCategoryPills();
  renderSpots();
});
