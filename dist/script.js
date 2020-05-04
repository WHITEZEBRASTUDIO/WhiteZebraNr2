let data = {
  photo: 'images/photo1.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
};

$('#photo').attr('src', data.photo);
// ...

let currentPhoto = 0;
let imagesData = [...];
$('#photo').attr('src', imagesData[currentPhoto].photo);
// ...