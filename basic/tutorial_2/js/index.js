let map = L.map('map').setView([25.034901941322673, 121.56486045169927], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//增加點位，讓使用者可以點擊查看

let infoDiv=document.getElementById("info");


var marker = L.marker([25.033964, 121.564468]).addTo(map)
                .bindPopup('這裡是台北 101!');
                //.openPopup();

var marker2 = L.marker([25.02628220891764, 121.52756985187678]).addTo(map)
                .bindPopup('這裡是師大!');
                //.openPopup();

var marker3 = L.marker([25.030501726030145, 121.50588154639394]).addTo(map)
                .bindPopup('這裡是南機場夜市!');
               // .openPopup();


marker.on('click', function () {
    console.log("Click 1");
    infoDiv.textContent = "101介紹";
    //infoDiv.textContent = '你點擊了: 台北 101 ';
    map.panTo([25.033964, 121.564468]); // 平移到台北 101
});

marker2.on('click', function () {
    console.log("Click 2");
    infoDiv.textContent = "師大介紹";
    //infoDiv.textContent = '你點擊了: 台北 101 ';
    map.panTo([25.033964, 121.564468]); // 平移到台北 101
});

marker3.on('click', function () {
    console.log("Click 3");
    infoDiv.textContent = "南機場夜市介紹";
    //infoDiv.textContent = '你點擊了: 台北 101 ';
    map.panTo([25.033964, 121.564468]); // 平移到台北 101
});

  
  function goPage(){
      window.location.href = "https://mira-ar.n010.app/show/YV0yoI";
  }
  
   







