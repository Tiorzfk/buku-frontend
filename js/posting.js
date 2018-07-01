$(document).ready(function(){
  $.ajax({
    url: `http://localhost:3000/api/v1/postings`,
    method: "GET"
  }).done(function(result) {
      var dataPosting = "";
      for (var i = 0; i < result.result.length; i++) {
        dataPosting +=
        `<div class="post-preview">
          <a href="post.html?id=${result.result[i]._id}">
            <h2 class="post-title">
              ${result.result[i].judul}
            </h2>
            <h3 class="post-subtitle">
              ${result.result[i].deskripsi.substr(0,100)}...
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#">${result.result[i].id_user.nama}</a>
            on ${result.result[i].tanggal}</p>
        </div>
        <hr>`;
      }
      $("#listPosting").html(dataPosting);

  });
});
