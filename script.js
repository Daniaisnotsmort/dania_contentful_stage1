console.log("hello world");
var client = contentful.createClient({
  space: 'j1qsl0lnuvgn',
  accessToken: 'ONJyASb1esrdeoCq7_Ko8r2I3CyfCuukiYXrChMB1Oc',
});


var allProducts = document.getElementById('all-products');

client.getEntries({ content_type: 'homePage', }).then(function (entries) {
  entries.items.forEach(function (entry) {

    var productDiv = document.createElement('div');
    var name = document.createElement('h2');
    name.innerHTML = entry.fields.name;
    productDiv.append(name);
    allProducts.append(productDiv);



    console.log(entry.fields.mainImage.fields.file.url);
    var mainImage = document.createElement('img');
    mainImage.classList.add('main-image');
    if (entry.fields.mainImage) {
      mainImage.src = entry.fields.mainImage.fields.file.url;
      productDiv.append(mainImage);
    }


  });
});

var productDescriptions = document.getElementById('product-descriptions');

client.getEntries({ content_type: 'homePage', }).then(function (entries) {
  entries.items.forEach(function (entry) {

    var productDiv = document.createElement('div');
    var description = document.createElement('h3');
    description.innerHTML = entry.fields.description;
    productDiv.append(description);
    productDescriptions.append(productDiv);
  });
});

var productPrices = document.getElementById('product-prices');

client.getEntries({ content_type: 'homePage', }).then(function (entries) {
  entries.items.forEach(function (entry) {

    var productDiv = document.createElement('div');
    var price = document.createElement('h3');
    price.innerHTML = entry.fields.price;
    productDiv.append(price);
    productPrices.append(productDiv);
  });
});
