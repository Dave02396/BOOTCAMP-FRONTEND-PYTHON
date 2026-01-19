const API_BASE_URL = 'https://dragonball-api.com/api/characters';
const FAVORITES_KEY = 'dragonball_favorites';


class DragonBallApp {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 1;
        this.characters = [];
        this.favorites = this.loadFavorites();
        this.init();
    }

    async init() {
        await this.fetchCharacters(this.currentPage);
        this.updateFavoritesCounter();
    }

    /**
     * Carga los favoritos desde localStorage
     * @returns {Array} 
     */
    loadFavorites() {
        const saved = localStorage.getItem(FAVORITES_KEY);
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites));
    }

    /**
     * Verifica si un personaje es favorito
     * @param {number} id - ID del personaje
     * @returns {boolean}
     */
    isFavorite(id) {
        return this.favorites.includes(id);
    }

    /**
     * Alterna el estado de favorito de un personaje
     * @param {number} id - ID del personaje
     */
    toggleFavorite(id) {
        const character = this.characters.find(char => char.id === id);
        const characterName = character ? character.name : 'Personaje';
        
        if (this.isFavorite(id)) {
            this.favorites = this.favorites.filter(fav => fav !== id);
            this.showNotification(`${characterName} removido de favoritos`, 'removed');
        } else {
            this.favorites.push(id);
            this.showNotification(`¡${characterName} agregado a favoritos!`, 'success');
        }
        this.saveFavorites();
        this.updateFavoritesCounter();
        this.render();
    }

    /**
     * Obtiene personajes desde la API
     * @param {number} page - Número de página a obtener
     */
    async fetchCharacters(page) {
        const app = document.getElementById('app');
        app.innerHTML = '<div class="loading">Cargando personajes...</div>';

        try {
            const response = await fetch(`${API_BASE_URL}?page=${page}&limit=12`);
            
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }

            const data = await response.json();
            
            this.characters = data.items;
            this.currentPage = data.meta.currentPage;
            this.totalPages = data.meta.totalPages;
            
            this.render();
        } catch (error) {
            app.innerHTML = `
                <div class="error">
                    <h2>Error al cargar los personajes</h2>
                    <p>${error.message}</p>
                    <button onclick="location.reload()" style="margin-top: 15px; padding: 10px 20px; background: white; color: #ff6b6b; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Reintentar</button>
                </div>
            `;
        }
    }
    
    render() {
        const app = document.getElementById('app');
        
        app.innerHTML = `
            <div class="characters-grid">
                ${this.characters.map(char => this.renderCharacterCard(char)).join('')}
            </div>
            ${this.renderPagination()}
        `;

        this.attachEventListeners();
    }

    /**
     * Renderiza una tarjeta de personaje
     * @param {Object} character - Datos del personaje
     * @returns {string} HTML de la tarjeta
     */
    renderCharacterCard(character) {
        const isFav = this.isFavorite(character.id);
        const heartIcon = isFav ? '❤️' : '🤍';
        
        return `
            <div class="character-card">
                <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${character.id}">
                    ${heartIcon}
                </button>
                <img src="${character.image}" alt="${character.name}" class="character-image" onerror="this.src='https://via.placeholder.com/300x300?text=Sin+Imagen'">
                <div class="character-info">
                    <div class="character-name">${character.name}</div>
                    <div class="character-detail">
                        <span>Raza:</span>
                        <span>${character.race}</span>
                    </div>
                    <div class="character-detail">
                        <span>Género:</span>
                        <span>${character.gender}</span>
                    </div>
                    <div class="character-detail">
                        <span>Afiliación:</span>
                        <span>${character.affiliation}</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Renderiza los controles de paginación
     * @returns {string} HTML de la paginación
     */
    renderPagination() {
        return `
            <div class="pagination">
                <div class="pagination-buttons">
                    <button onclick="app.goToPage(1)" ${this.currentPage === 1 ? 'disabled' : ''}>
                        ⏮️ Primera
                    </button>
                    <button onclick="app.goToPage(${this.currentPage - 1})" ${this.currentPage === 1 ? 'disabled' : ''}>
                        ◀️ Anterior
                    </button>
                </div>
                
                <div class="page-info">
                    Página ${this.currentPage} de ${this.totalPages}
                </div>
                
                <div class="pagination-buttons">
                    <button onclick="app.goToPage(${this.currentPage + 1})" ${this.currentPage === this.totalPages ? 'disabled' : ''}>
                        Siguiente ▶️
                    </button>
                    <button onclick="app.goToPage(${this.totalPages})" ${this.currentPage === this.totalPages ? 'disabled' : ''}>
                        Última ⏭️
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Adjunta event listeners a los botones de favoritos
     */
    attachEventListeners() {
        const favoriteButtons = document.querySelectorAll('.favorite-btn');
        favoriteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                this.toggleFavorite(id);
            });
        });
    }

    /**
     * Navega a una página específica
     * @param {number} page - Número de página
     */
    async goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            await this.fetchCharacters(page);
        }
    }

    /**
     * Actualiza el contador de favoritos
     */
    updateFavoritesCounter() {
        const counterElement = document.getElementById('favorites-count');
        if (counterElement) {
            counterElement.textContent = this.favorites.length;
            
            // Animación al actualizar
            counterElement.style.transform = 'scale(1.3)';
            setTimeout(() => {
                counterElement.style.transform = 'scale(1)';
            }, 200);
        }
    }

    /**
     * Muestra una notificación temporal
     * @param {string} message - Mensaje a mostrar
     * @param {string} type - Tipo de notificación (success, removed)
     */
    showNotification(message, type = 'success') {
        const container = document.getElementById('notification-container');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = type === 'success' ? '❤️' : '💔';
        
        notification.innerHTML = `
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
        `;

        container.appendChild(notification);

        // Remover la notificación después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.4s ease';
            setTimeout(() => {
                container.removeChild(notification);
            }, 400);
        }, 3000);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
const app = new DragonBallApp();