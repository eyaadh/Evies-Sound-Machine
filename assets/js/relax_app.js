$('.list-group-item').click(function(){
    new_src = $(this).data("audio");
    var audio = $("#audio_player"); 
    $('#audio_player').attr("src", new_src);
    audio[0].pause();
    audio[0].load();
    audio[0].oncanplaythrough = audio[0].play();
    var filename = new_src.replace(/^.*[\\\/]/, '')
    $('#now_playing_lable').html('Now Playing: ' + filename);
});
