const sliderTrack = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn && sliderTrack) {
        // Scroll the slider left by a certain amount
        prevBtn.addEventListener('click', () => {
            sliderTrack.scrollBy({ left: -300, behavior: 'smooth' });
        });

        // Scroll the slider right by a certain amount
        nextBtn.addEventListener('click', () => {
            sliderTrack.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if(window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
        function scrollToGuide() {
            document.getElementById('guide').scrollIntoView({ behavior: 'smooth' });
        }

        // Smooth scroll to guide
        const form = document.getElementById('styleForm');
    const recommendations = document.getElementById('recommendations');

    const recommendationData = {
        beach: {
            title: "Beach Day Essentials",
            desc: "Flowy outfits, swimwear, and comfortable looks perfect for a day at the beach.",
            link: "https://www.example.com/beach-style"
        },
        wedding: {
            title: "Wedding Day Glam",
            desc: "Elegant dresses, suits, and accessories to make you shine on the special day.",
            link: "https://www.example.com/wedding-style"
        },
        sangeet: {
            title: "Sangeet Night Fun",
            desc: "Festive and bold outfits with sequins and vibrant patterns to dance the night away.",
            link: "https://www.example.com/sangeet-style"
        },
        fresher: {
            title: "Fresher Party Look",
            desc: "Trendy, youthful styles to keep you confident and comfortable.",
            link: "https://www.example.com/fresher-style"
        },
        convocation: {
            title: "Convocation Ceremony",
            desc: "Classic and polished outfits for an elegant appearance during milestone events.",
            link: "https://www.example.com/convocation-style"
        },
        office: {
            title: "Office Fit",
            desc: "Structured and professional looks to keep you sharp and stylish at work.",
            link: "https://www.example.com/office-style"
        }
    };

    const images = {
        event: {
            wedding: 'https://img.faballey.com/images/Product/XLH05420Z/d3.jpg',
            beach: 'https://img.faballey.com/images/Product/XLH05420Z/d3.jpg',
            sangeet: 'https://img.faballey.com/images/Product/XLH05420Z/d3.jpg',
            fresher: 'https://img.faballey.com/images/Product/XLH05420Z/d3.jpg',
            convocation: 'https://img.faballey.com/images/Product/XLH05420Z/d3.jpg',
            office: 'https://img.faballey.com/images/Product/XLH05420Z/d3.jpg'
        },
        bodytype: {
            slim: 'https://media-api.xogrp.com/images/d8aeb707-1cdc-493d-ae55-4b409d3d7837~rs_768.h-cr_0.36.1600.2169',
            average: 'https://media-api.xogrp.com/images/d8aeb707-1cdc-493d-ae55-4b409d3d7837~rs_768.h-cr_0.36.1600.2169',
            curvy: 'https://media-api.xogrp.com/images/d8aeb707-1cdc-493d-ae55-4b409d3d7837~rs_768.h-cr_0.36.1600.2169s'
        },
        skintone: {
            fair: 'https://mortantra.com/cdn/shop/articles/Main_banner.png?v=1746859003&width=1000',
            medium: 'https://mortantra.com/cdn/shop/articles/Main_banner.png?v=1746859003&width=1000',
            dark: 'https://mortantra.com/cdn/shop/articles/Main_banner.png?v=1746859003&width=1000'
        }
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const event = document.getElementById('event').value;
        const category = document.getElementById('category').value;
        const bodytype = document.getElementById('bodytype').value;
        const skintone = document.getElementById('skintone').value;

        if (!event || !category || !bodytype || !skintone) {
            alert('Please fill in all fields.');
            return;
        }

        const eventData = recommendationData[event];
        const eventImgSrc = images.event[event];
        const bodyTypeImgSrc = images.bodytype[bodytype];
        const skinToneImgSrc = images.skintone[skintone];

recommendations.innerHTML = `
                <div class="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div class="card-image-container">
                        <img src="${eventImgSrc}" alt="${event} style" class="card-image">
                    </div>
                    <h3 class="font-semibold text-xl mb-2">${eventData.title}</h3>
                    <p class="text-sm mb-3">${eventData.desc}</p>
                    <a href="${eventData.link}" target="_blank" class="text-yellow-500 hover:underline">Shop Now</a>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div class="card-image-container">
                        <img src="${bodyTypeImgSrc}" alt="body type ${bodytype}" class="card-image">
                    </div>
                    <h3 class="font-semibold text-xl mb-2">Body Type: ${bodytype.charAt(0).toUpperCase() + bodytype.slice(1)}</h3>
                    <p class="text-sm mb-3">Outfits tailored for your body type for the best fit and comfort.</p>
                    <a href="https://www.example.com/body-${bodytype}" target="_blank" class="text-yellow-500 hover:underline">Explore Styles</a>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div class="card-image-container">
                        <img src="${skinToneImgSrc}" alt="skin tone ${skintone}" class="card-image">
                    </div>
                    <h3 class="font-semibold text-xl mb-2">Skin Tone: ${skintone.charAt(0).toUpperCase() + skintone.slice(1)}</h3>
                    <p class="text-sm mb-3">Color palettes and accessories that complement your skin tone beautifully.</p>
                    <a href="https://www.example.com/skin-${skintone}" target="_blank" class="text-yellow-500 hover:underline">See Recommendations</a>
                </div>
            `;
            recommendations.classList.remove('hidden');
        });

