function changecolor(){
    const colors = ['#ffcc00', '#00aaff', '#ff66b2', '#99ff99', '#ff9999'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.getElementById('drawingArea').style.backgroundColor = colors[randomIndex];
}