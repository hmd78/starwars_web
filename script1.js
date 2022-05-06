var code = ''
const objs = []

function hide_first_page(episode){
    current_page = 1
    code = $('#rectangle').html()
    objJson = objs[episode]
    $('#rectangle').html('')
    let listing_page = '<h1 id="head2">STARSHIPS</h1><table id="listing_page" style="width: 250px"></table>' +
        '<span id="page"></span> ' +
        '<div id="pagination"><a id="btn_prev" class="btn" onclick="prevPage()">&laquo;</a>' +
        '<a id="go_back" class="btn" onclick="go_back_home()">GO BACK</a>' +
        '<a id="btn_next" class="btn" onclick="nextPage()">&raquo;</a></div>' +
        '<div id="detail"></div>';
    $('#rectangle').html(listing_page)
    changePage(1)

}
function go_back_home(){
    $('#rectangle').html('')
    $('#rectangle').html(`${code}`)
}
function starship_details(data_detail){
    let details = `<div id="details"><h2>${data_detail.name}</h2>`+
    `<table><tr><td>MODEL</td><td>${data_detail.model}</td></tr><tr><td>MANUFACTURER</td><td>${data_detail.manufacturer}</td></tr>`+
    `<tr><td>CREW</td><td>${data_detail.crew}</td></tr><tr><td>PASSENGERS</td><td>${data_detail.passengers}</td></tr>
    <tr><td>MOVIES</td><td id="films"></td></tr></table></div>`
    for (let i = 0; i < data_detail.films.length; i++){
        $.getJSON(data_detail.films[i], function(data){
            document.getElementById('films').innerHTML += data.title + '<br>'
        });
    }
    document.getElementById('detail').innerHTML = details
}
$.getJSON('https://swapi.dev/api/films/4/?format=json', function(data){
    $('#t1').text(`${data.title}`);
    $('#e1').text(`${data.episode_id}`);
    $('#d1').text(`${data.release_date}`)
    objs[0] = data;
});
$.getJSON('https://swapi.dev/api/films/5/?format=json', function(data){
    $('#t2').text(`${data.title}`);
    $('#e2').text(`${data.episode_id}`);
    $('#d2').text(`${data.release_date}`)
    objs[1] = data;
});
$.getJSON('https://swapi.dev/api/films/6/?format=json', function(data){
    $('#t3').text(`${data.title}`)
    $('#e3').text(`${data.episode_id}`)
    $('#d3').text(`${data.release_date}`)
    objs[2] = data;
});
$.getJSON('https://swapi.dev/api/films/1/?format=json', function(data){
    $('#t4').text(`${data.title}`)
    $('#e4').text(`${data.episode_id}`)
    $('#d4').text(`${data.release_date}`)
    objs[3] = data;
});
$.getJSON('https://swapi.dev/api/films/2/?format=json', function(data){
    $('#t5').text(`${data.title}`)
    $('#e5').text(`${data.episode_id}`)
    $('#d5').text(`${data.release_date}`)
    objs[4] = data;
});
$.getJSON('https://swapi.dev/api/films/3/?format=json', function(data){
    $('#t6').text(`${data.title}`)
    $('#e6').text(`${data.episode_id}`)
    $('#d6').text(`${data.release_date}`)
    objs[5] = data;
});

