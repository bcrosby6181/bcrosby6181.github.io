/*global $  _   */ //<-- lets IDE know that the global var is ok  */

$(document).ready(function() {
    $('#dropdown').change(function() {
        var value = $(this).val();
        console.log(value);
        // prints the title next to the dropdown box
         
 

        //$('label').text(value);
    });
});

$(document).on('ready', function(event) {
    $.getJSON('data/products.json', function(products) {
            // console.log(products);
            //initView();
            renderProducts(products);
            createTypeList(products);
            
            
        })
        .fail(function() {
            console.log('getJSON on product data failed!');
        });
});

function initView(products) {
    //$('#dropdown').val();
    //var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    var phones = _.filter(products, function(num){ return num["type"] === "phone"; });
    createTypeList();
    
    
    
    console.log(phones);
    return phones;
    
    // filter out types of products, then create the filter dropdown
    // add event listeners to view //
}


function renderProducts(products) {
    $('#section-products')
        .empty()
        .append(createProductList(products));
   
    // clear view
    // create all necessary view structure, ie, list of products
    // add list of products to the dom
}

function createProductList(products) {
    return $('<ul>')
        .addClass('list-products')
        .append(products.map(function(product) {

            return $('<li>')
                .data('product', product)
                .append(createImageDiv(product.image))
                .append($('<div>').text(product.desc + " "))
                .append($('<div>').text(' Price:  $' + product.price))
                .append($('<div>').text(' In Stock: ' + product.stock));
            //.css({'display': 'flex'});
        }));
}

function createTypeList(arr) {
    var results = _.pluck(arr, 'type');
    results = _.uniq(results);
    //console.log(arr);
    results = _.map(results, function(value) {
        return $('<option>').text(value);
    });
    $('#dropdown').append(results);
}




function search(collection, target) {
    // create something to hold objects in which target is found 
    var arr = [];
    // iterate collection //
    _.each(collection, function(arg) {
        //      isString?
        if (typeof arg === 'string') {
            //          if String > is target within String
            if (_.includes(arg, target)) {
                //              push whole object into some output
                arr.push(arg);
            }
        }
        //      isCollection()?
        if (isCollection(arg)) {
            //          if search(value).length
            if (search(arg).length) {
                //              push whole object into some output
                arr.push(arg);
            }
        }
    });
    // return output
    return arr;
    //
}

function isCollection(value) {
    // weeds out false positives for objects, and returns true if 
    if (value === null) {
        return false;
    }
    if (value === undefined) {
        return false;
    }
    if (value instanceof Date) {
        return false;
    }
    if (typeof value === 'object') {
        return true;
    }
    // value is Array or Object intended as collection //
}

function createImageDiv(url) {
    return $('<div>').append($('<img>').attr('src', 'img/product/thumbs/' + url));
}
