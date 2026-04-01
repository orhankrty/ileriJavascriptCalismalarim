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

//getElementByClassName kullanımı ile class seçici içerik gösterme
let sinif = document.getElementsByClassName('baslik');
console.log(sinif);


//Event Nesnesi ve Özellikleri Çalışması
let button = document.getElementById("dinle");

button.addEventListener("click", function(Event)
 {
    console.log("Olayın Türü: " + event.type);
    console.log("Tıklanan Eleman: " + event.target);
    console.log("Dinleme Zamanı: " + event.currentTarget);
    console.log("Olay Zamanı: " + event.timeStamp);
    console.log("Kayma Durumu: " + event.bubbles);

    console.log("Mouse X: " + event.clientX);
    console.log("Mouse Y: " + event.clientY);
    console.log("Hangi Zaman: " + event.button);
    console.log("CTRL:" + event.ctrlkey);
    console.log("SHIFT:" + event.shiftkey);
 }
);


function Tıklandı()
{
    alert("Tıklandı");
}


// onclick
function tiklandi()
{
    alert("Butona Tıklandı");
}

// onmouseover
function uzerineGel()
{
    document.getElementById("kutu").style.backgroundColor = "orange";
}

// onkeydown
function tusBasildi(e)
{
    console.log("Basılan Tuş: " , e.key);
}

function secimDegisti(select) 
{
   alert("Seçilen değer: " + select.value);
}

function formKontrol(event) 
{
event.preventDefault();
let ad = document.getElementById("ad").value;

if(ad === "") 
{
alert("Ad alanı boş bırakılamaz!"); 
} 
else 
{
alert("Form başarıyla gönderildi!");
}
}



//BOM

//Window Nesnesi
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.name);
console.log(window.closed);




