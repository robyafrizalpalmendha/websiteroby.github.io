// // event pd saat link di klik
// $(".page-scroll").on("click",function(e){
//     // ambil isi href
//     var tujuan = $(this).attr("href");
//     // tangkap elemen ybs
//     var elTujuan = $(tujuan);

//     // menjalankan fungsi perpindahan scroll
//     $("body").animate({
//         scrollTop : elTujuan.offset().top-50
//     });

//     // untuk menonaktifkan fungsi link pd href
//     e.preventDefault();
// });

// Efek Parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $(".jumbotron").css({
        "tranform": "translate(0px, '+ wScroll+'px)"
    });
});