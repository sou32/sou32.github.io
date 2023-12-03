document.getElementById('agreementButton').addEventListener('click', function() {
    document.getElementById('agreement').style.display = 'block';
	document.getElementById('agreementbutton').style.display='block';
});

function showLetter() {
	var agree1 = document.getElementById('agree1').checked;
	var agree2 = document.getElementById('agree2').checked;
	var agree3 = document.getElementById('agree3').checked;
    if (agree1 && agree2 && agree3) {
        document.getElementById('letter').style.display = 'block';
		letter.style.display = 'block';
        letter.style.top = '-100%'; // 画面の上からスタート
        setTimeout(function() {
            letter.style.top = '50%'; // ゆっくりと中央に移動
        }, 100);
    } else {
        alert("同意する必要があります。");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('doorLeft').style.transform = 'translateX(-100%)';
        document.getElementById('doorRight').style.transform = 'translateX(100%)';
    }, 1000); // 少し遅延を持たせる
});
function closeLetter(){
	document.getElementById('letter').style.display = 'none';
}

