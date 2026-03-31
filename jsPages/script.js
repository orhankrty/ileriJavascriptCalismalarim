console.log(document);
console.log(document.title);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.forms);
console.log(document.scripts);


// getElementById Uygulaması
document.getElementById('degisim').onclick = () =>
{
    let baslik = document.getElementById('baslik');
    baslik.textContent = "Değişti";
};

//getElementByClassName Uygulaması
document.getElementById('degistir').onclick = () =>
{
    let metin = document.getElementsByClassName('metin');
    for(let i = 0; i < metin.length; i++)
    {
        metin[i].textContent = "Yazılar Değişti";
    }
};

// getElementByTagName Uygulaması
document.getElementById('degis').onclick  = () =>
{
    let liste = document.getElementsByTagName('li');
    for(i = 0; liste.length; i++)
    {
        liste[i].textContent = "Listeler Değişti";
    }
};

//QuerySelector
document.getElementById('yenile').onclick = () =>
{
    let yeni = document.querySelector('.yeni');
    yeni.textContent = "Yenilendi"
};

//QuerySelectorAll
document.getElementById('hepsi').onclick = () =>
{
    let all = document.querySelectorAll('#all');
    all.forEach(all =>
     {
        all.textContent = "Hepsi Yenilendi";
     }
    );
};

//QuerySelector kullanımı ile tag seçici içerik gösterme
let goster = document.querySelector('h2');
console.log(goster);

//innerHTML ile içerik değişimi
goster.innerHTML = "Cristiano Ronaldo";
console.log(goster);

//getElementById kullanımı ile id seçici içerik gösterme
let bak = document.getElementById('baslik2');
console.log(bak);




