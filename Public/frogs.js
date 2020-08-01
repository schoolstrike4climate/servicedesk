// var random_images_array = ["1.jpg", "2.jpg"];

// function getRandomImage(imgAr, path) {
  //  path = path || 'images/'; // default path here
//    var num = Math.floor( Math.random() * imgAr.length );
  //  var img = imgAr[ num ];
  //  var imgStr = '<img src="' + path + img + '" alt = "frog">';
  //  document.write(imgStr); document.close();
// }
function changeImage()
{
element=document.getElementById('example')
if (element.src.match("frogs"))
  {
  element.src="/Logo.png";
  }
else
  {
  element.src="frogs/1.jpg";
  }
}
