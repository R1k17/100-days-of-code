// API functionality
const quoteUrl = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

function getDataFromApi(callback){
    $.getJSON(quoteUrl, callback);
  }

function displayQuoteData(data){
    $('.quote-result').html(`<p>${data}</p>`);
    $('.twitter-share-button').attr('href', `https://twitter.com/intent/tweet?text=${data} - Ron Swanson`);
}

function watchSubmit(){
    getDataFromApi(displayQuoteData);
    $('.js-search-form').submit(function(e){
        e.preventDefault();
        getDataFromApi(displayQuoteData);
    })
}

$(watchSubmit);