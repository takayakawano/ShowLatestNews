$(function () {

    var Key = ''; // Please replace your API code
    var q = parent.Xrm.Page.getAttribute("customerid").getValue()[0].name; // The user's search query string
    var mkt = 'en-us'; // The market where the results come from.
    var count = '10'; // The number of news results to return in the response. 
    var safeSearch = 'Off'; // A filter used to filter results for adult content.
    var url = 'https://api.cognitive.microsoft.com/bing/v7.0/news/search?q="' + q + '"&count=' + count + '&mkt=' + mkt + '&safeSearch=' + safeSearch;

    // Initialize a table of HTML
    $("#site-box").html("");

    // Create a table of HTML
    $.ajax({
        type: 'get',
        url: url,
        headers: { 'Ocp-Apim-Subscription-Key': Key },
        success: function (data) {

            // Success
            //alert("success");
            //alert(JSON.stringify(data));
            for (var index in data.value) {
                if ('image' in data.value[index]) {
                    if (parseInt(index) % 2 == 0)
                    {
                        $('<tr>' +
  '<td id="image-box-even"><img src="' + data.value[index].image.thumbnail.contentUrl + '" alt="" role="presentation"> </div>' +
  '<td id="link-box-even"><a href="' + data.value[index].url + '" target="_blank">' + data.value[index].name + '</a><br/><a>' + data.value[index].description + '</a></div>' +
'</tr>').appendTo("#site-box");
                    }
                    else {
                        $('<tr>' +
  '<td id="image-box"><img src="' + data.value[index].image.thumbnail.contentUrl + '" alt="" role="presentation"> </div>' +
  '<td id="link-box"><a href="' + data.value[index].url + '" target="_blank">' + data.value[index].name + '</a><br/><a>' + data.value[index].description + '</a></div>' +
'</tr>').appendTo("#site-box");
                    }
                }
            }
        },
        error: function (data) {
            // Error
            alert("error");
            alert(JSON.stringify(data));
            $("#site-box").html(JSON.stringify(data));
        }
    });
});
