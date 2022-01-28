(function(){
  //map Option
    var option = {
        center: {
            lat: 40.840243,
            lng: -73.937762
        },
        zoom: 17,
        disableDeaultUI: true,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 18,
        minZoom: 15
    };
    
    var indicator =  new google.maps.Marker({
        position: {
            lat: 40.840243,
            lng: -73.937762
        },
        icon: "images/panoramicview.png",
        title: "My Hotel"
 
    });
    //map
    var element = document.getElementById("hotelMap");
    map = new google.maps.Map(element, option);
    indicator.setMap(map);
}())
