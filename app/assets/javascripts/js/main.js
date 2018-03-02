$('document').ready(function() {

  // initialize stuff when you first hit the page
  function init() {
    $(".artist-data.mini, #artist-bio, #artist-photo").removeClass("show");
    var thisArtist = "TIAAN";
    getArtistData(thisArtist);
    // handle slide animation
    $(".artist-data.slide").addClass("animate");
    setTimeout(function(){ $(".artist-data.mini, #artist-bio, #artist-photo").addClass("show"); }, 3000);
    setTimeout(function(){ $(".artist-data.slide").removeClass("animate"); }, 2300);
  }

  setTimeout(function(){ init(); }, 1500);


  var clicked = false;
  function clickToggle(){
    clicked = !clicked;
    return clicked;
  }

  //Change styles of Viz
  $(".style1").on('click', function(){
    $(".visual").toggleClass("css1");
    clickToggle();
    visualizer("rgb(0, 168, 219)","rgb(255, 255, 255)");
  });

  $(".style2").on('click', function(){
    $(".visual").toggleClass("css2");
    clickToggle();
    visualizer("rgb(8, 112, 84)","rgb(240, 0, 2)");
  });

  // initialize plyr.js player
  var jsPlayer = plyr.setup();
  // grab HTML5 audio element for visualization
  var audio = document.getElementById('main-player');

  //Load artist info and track on click
  $( ".artist-track" ).each(function(index) {
    $(this).on("click", function(){
      jsPlayer[0].stop();
      $(".artist-data.mini, #artist-bio").removeClass("show");
      var thisArtist = $(this).text();
      getArtistData(thisArtist);
      // handle slide animation
      $(".artist-data.slide").addClass("animate");
      setTimeout(function(){ $(".artist-data.mini, #artist-bio").addClass("show"); }, 3000);
      setTimeout(function(){ $(".artist-data.slide").removeClass("animate"); }, 2300);
    });
  });

  function getArtistData(thisArtist) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: window.location.origin  + "/artists.json"
      }).done(function(response){
        for(var i = 0; i < response.length; i++){
          if(response[i].name === thisArtist){
            // update player with new song
            audio.src = 'audios/' + response[i].audio_id;
            // update artist info to be shown
            $('#artist-photo').attr('src', 'images/' +response[i].photo_url);
            $('.artist-name').text(response[i].name);
            $('.artist-song').text(response[i].song);
            $('.artist-album').text(response[i].album);
            $('#artist-bio').text(response[i].bio);
            // delay audio and viz for "cool" UX
            setTimeout(function(){ visualizer(); jsPlayer[0].play(); }, 1000);
          }
        }
      });
  }



////////
////////VISUALIZATION
////////

  //prep canvas for visualization
  var canvas = document.getElementById('canvas');
  var canvasContext = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  //create new audio context
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();
  var analyser = audioContext.createAnalyser();
  var source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  function visualizer(val1, val2) {
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    //create oscilloscope visual
    var drawVisual = requestAnimationFrame(visualizer);
    canvasContext.clearRect(0, 0, width, height);
    canvasContext.lineWidth = 2;
    if (clicked === true) {
    canvasContext.strokeStyle = val1;
    } else {
    canvasContext.strokeStyle = 'rgb(0, 0, 0)';
    }
    canvasContext.beginPath();

    var sliceWidth = width / bufferLength;
    var x = 0;
      for(var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = v * height/2;
        if(i === 0) {
          canvasContext.moveTo(x, y);
        } else {
          canvasContext.lineTo(x, y);
        }
        x += sliceWidth;
      }
    canvasContext.lineTo(width, height/2);
    canvasContext.stroke();

    //create frequency bars visual
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    var barWidth = (width / bufferLength);
    var barHeight;
    var x = 0;
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        if (clicked === true) {
        canvasContext.fillStyle = val2;
        } else {
        canvasContext.fillStyle = 'rgb(' + (barHeight+100) + ', 100, 50)';
        }
        canvasContext.fillRect(x, height-barHeight/2, barWidth, barHeight);
        x += barWidth + 1;
    }
  }
});
