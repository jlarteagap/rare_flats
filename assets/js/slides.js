new Splide( '.testimonial', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    autoplay: true,
    rewind: true,
    breakpoints: {
        480: {
            perPage: 1
        },
        640: {
            perPage: 2
        },
        860:{
            perPage: 2
        }
    }

}).mount();

new Splide('.alugar', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    rewind: true,
    breakpoints: {
        480: {
            perPage: 1
        },
        640: {
            perPage: 2
        },
        860:{
            perPage: 3
        }
    }
    
}).mount();
new Splide('.venda', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    rewind: true,
    breakpoints: {
        480: {
            perPage: 1
        },
        640: {
            perPage: 2,
        },
        860:{
            perPage: 3
        }
}
}).mount();

new Splide('.related', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    rewind: true,
    breakpoints: {
        480: {
            perPage: 1
        },
        640: {
            perPage: 2,
        },
        860:{
            perPage: 3
        }
}
}).mount();
