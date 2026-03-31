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