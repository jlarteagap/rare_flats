const testimonial = new Splide( '.testimonial', {
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

const venda = new Splide('.venda', {
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

const alugar = new Splide('#alugar', {
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