const demoArtists = [
    {
        id: 1,
        name: "Alex Morgan",
        category: "Photography",
        location: "Bengaluru",
        rating: 4.9,
        reviews: 124,
        price: 5000,
        verified: true,
        image: "assets/images/unique_24.webp"
    },
    {
        id: 2,
        name: "David Chen",
        category: "Music",
        location: "Mumbai",
        rating: 5.0,
        reviews: 89,
        price: 8000,
        verified: true,
        image: "assets/images/unique_25.webp"
    },
    {
        id: 3,
        name: "Priya Singh",
        category: "Art",
        location: "Delhi",
        rating: 4.7,
        reviews: 45,
        price: 3000,
        verified: false,
        image: "assets/images/unique_26.webp"
    },
    {
        id: 4,
        name: "Sarah Johnson",
        category: "Events",
        location: "Pune",
        rating: 4.8,
        reviews: 210,
        price: 15000,
        verified: true,
        image: "assets/images/unique_27.webp"
    },
    {
        id: 5,
        name: "Rahul Verma",
        category: "Photography",
        location: "Hyderabad",
        rating: 4.6,
        reviews: 56,
        price: 4000,
        verified: true,
        image: "assets/images/unique_28.webp"
    },
    {
        id: 6,
        name: "DJ Maxx",
        category: "Music",
        location: "Goa",
        rating: 4.9,
        reviews: 178,
        price: 12000,
        verified: true,
        image: "assets/images/hero-dj.webp"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const artistGrid = document.getElementById('artistGrid');
    
    if (artistGrid) {
        renderArtists(demoArtists);
        
        // Setup filters
        const searchInput = document.getElementById('artistSearch');
        const catFilters = document.querySelectorAll('.cat-filter');
        const sortFilter = document.getElementById('sortFilter');
        
        const applyFilters = () => {
            let filtered = [...demoArtists];
            
            // Search
            const term = searchInput.value.toLowerCase();
            if (term) {
                filtered = filtered.filter(a => a.name.toLowerCase().includes(term) || a.category.toLowerCase().includes(term));
            }
            
            // Categories
            const checkedCats = Array.from(catFilters).filter(c => c.checked).map(c => c.value);
            if (checkedCats.length > 0) {
                filtered = filtered.filter(a => checkedCats.includes(a.category));
            }
            
            // Sort
            const sortVal = sortFilter.value;
            if (sortVal === 'topRated') {
                filtered.sort((a, b) => b.rating - a.rating);
            } else if (sortVal === 'priceLow') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortVal === 'priceHigh') {
                filtered.sort((a, b) => b.price - a.price);
            }
            
            renderArtists(filtered);
        };
        
        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (sortFilter) sortFilter.addEventListener('change', applyFilters);
        catFilters.forEach(cf => cf.addEventListener('change', applyFilters));
    }
});

function renderArtists(artists) {
    const grid = document.getElementById('artistGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (artists.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px;">No artists found matching your criteria.</div>';
        return;
    }
    
    artists.forEach(artist => {
        const verifiedBadge = artist.verified ? '<div class="verified-badge"><i class="fa-solid fa-circle-check"></i> Verified</div>' : '';
        const fallbackImg = `https://via.placeholder.com/300x220?text=${artist.name.replace(' ', '+')}`;
        
        const cardHtml = `
            <div class="artist-card fade-up">
                <div class="artist-img">
                    <img src="${artist.image}" alt="${artist.name}" onerror="this.src='${fallbackImg}'">
                    ${verifiedBadge}
                </div>
                <div class="artist-info">
                    <h3>${artist.name}</h3>
                    <div class="artist-category">${artist.category} • ${artist.location}</div>
                    <div class="artist-stats">
                        <span style="color: #F59E0B;"><i class="fa-solid fa-star"></i> ${artist.rating} (${artist.reviews})</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; border-top:1px solid #eee; padding-top:15px;">
                        <div><span style="font-size:0.8rem;color:#666;">Starting at</span><br><span class="artist-price">₹${artist.price.toLocaleString()}</span></div>
                        <a href="404.html" class="btn btn-outline" style="padding: 8px 16px;">View</a>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}
