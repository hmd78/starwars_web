var current_page = 1;
var records_per_page = 2;
let detailJson = []
var objJson

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listing_page");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";
    document.getElementById('detail').innerHTML = "";

    for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.starships.length; i++) {
        $.getJSON(objJson.starships[i], function(data){
            listing_table.innerHTML +=  `<tr><td><a onclick="starship_details(detailJson[`+ i%records_per_page +`])">${data.name}</a></td></tr>` ;
            detailJson[i%records_per_page] = data
        });
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.starships.length / records_per_page);
}
