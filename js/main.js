var elm = $('#element').get(0);
var lebar = "800";
var tinggi = "800";
var type = "png";
var filename = "htmltoimage";
$('#save').click(function () {
    html2canvas(elm).then(function (canvas) {
        var canWidth = canvas.width;
        var canHeight = canvas.height;
        var img = Canvas2Image.convertToImage(canvas, canWidth, canHeight);
        $('#preview').after(img);
        Canvas2Image.saveAsImage(canvas, lebar, tinggi, type, filename);
    })
})