document.getElementById('convertButton').addEventListener('click', function () {
    var imageInput = document.getElementById('imageInput');
    var formatSelect = document.getElementById('formatSelect').value;
    var downloadLink = document.getElementById('downloadLink');
    var outputCanvas = document.getElementById('outputCanvas');
    var context = outputCanvas.getContext('2d');

    if (imageInput.files && imageInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            var img = new Image();
            img.onload = function () {
                outputCanvas.width = img.width;
                outputCanvas.height = img.height;
                context.drawImage(img, 0, 0);

                var dataURL = outputCanvas.toDataURL(formatSelect);
                downloadLink.href = dataURL;
                downloadLink.download = 'converted_image.' + formatSelect.split('/')[1];
                downloadLink.style.display = 'inline-block';
            }
            img.src = e.target.result;
        }
        fileReader.readAsDataURL(imageInput.files[0]);
    } else {
        alert("Por favor, selecione uma imagem para converter.");
    }
});
