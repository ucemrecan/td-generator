var data = ["Samet Aybaba","Yılmaz Vural","Ümit Özat",
"Kemal Özdeş","Fuat Çapa","İrfan Buz","Bülent Utgun",
"Sumudica","Metin Diyadin","Christoph Daum",
"Mustafa Reşit Akçay","Hamza Hamzaoğlu",
"İsmail Kartal","Mehmet Özdilek","Robert Prosinecki",
"Tamer Tuna", "Mehmet Altıparmak","Mesut Bakkal",
"Bülent Korkmaz","Erol Bulut","Aykut Kocaman"]


$(".btn").click(function() {

  var randomNumber = Math.floor(Math.random() * 21);
  var randomImg = "images/" + (randomNumber + 1) + ".jpg";
  $(".headImg").attr("src",randomImg);
  $("p").text(data[randomNumber]);

});