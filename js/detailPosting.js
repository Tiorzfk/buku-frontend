var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function(){
  $.ajax({
    url: `http://localhost:3000/api/v1/postings/detail/${getUrlParameter('id')}`,
    method: "GET"
  }).done(function(result) {
    console.log(result);
     if (result.status == 200) {
       $("#bgImg").attr('style',`background-image: url('http://localhost:3000/images/${result.result.gambar}')`);
       $("#judul").text(result.result.judul);
       $("#info").html(`Posted by
         <a href="#">${result.result.id_user.nama}</a>
         on ${result.result.tanggal}`);
      $("#isi").html(result.result.deskripsi);
     }else{
       console.log(error);
     }
  });

});
