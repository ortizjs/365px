export const fetchPhotos = data => (
    $.ajax({
        method: 'GET',
        url: '/api/photos',
        data
    })
);

export const fetchPhoto = id => (
    $.ajax({
        method: 'GET',
        url: `api/photos/${id}`
    })
);

export const createPhoto = photoForm => (
    $.ajax({
        method: 'POST',
        url: 'api/photos',
        data: photoForm
        // contentType: false,
        // processData: false
    })
);

// export const createReview = review => (
//     $.ajax({
//         method: 'POST',
//         url: 'api/reviews',
//         data: { review }
//     })
// );

