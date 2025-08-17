window.onload = function() {
  var one = document.getElementById("appear");

  one.onclick = function() {
    window.open('https://forms.gle/PEcH7xNMfJYcyEk96', '_blank');
  }
  var giftsButton = document.getElementById("gifts-button");
  if (giftsButton) {
    giftsButton.onclick = function() {
      window.location.href = 'presentes.html';
    }
  }
}
