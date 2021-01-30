const s01 = {
  date : new Date("2021-01-23T07:30:00+07:00"), 
  url : 'https://zoom.us/j/94026267565?pwd=OU1OSTY3WGtiU3hqYW1xUW5wYWd0QT09', //change this to zoom url later
  title : 'Pemuda Muslim Produktif dan Kontributif', 
  speaker : 'Ustadz Elvandi Lc, MA',
  description : 'Pada sesi ini Ustadz Elvandi akan membahas mengenai : \n 1. Visi Global Islam \n 2. Sistem Nilai Islam \n 3. Rencana Kontribusi Unggulan'
}
const s02 = {
  date : new Date("2021-01-24T09:00:00+07:00"), 
  url : 'https://zoom.us/j/99831938703?pwd=UEdvWW1YL0UxTU1Sa0xvMnZtTVQxZz09', //change this to zoom url
  title : 'Kolaborasi Mewujudkan Indonesia Berdaulat Teknologi',
  speaker : 'Dr.Ir. Syarif Hidayat, MT',
  description : 'Pada sesi ini Dr. Syarif Hidayat akan membahas mengenai : \n1. Perjuangan dalam mengembangkan Ventilator-I (Ventilator Portabel Indonesia) \n2. Peluang dan tantangan untuk pemuda Muslim di Indonesia khususnya dari bidang elektro dan informatika dalam mewujudkan Indonesia berdaulat teknologi untuk kemaslahatan umat manusia \n3. Urgensi berjejaring dan berkolaborasi'
}

const s03 = {
  date : new Date("2021-01-24T13:00:00+07:00"), 
  url : 'https://zoom.us/j/94806780693?pwd=dUptWWg4cHpLSWp3dUxrWlJocCs3QT09', //change this to zoom url
  title : 'Research and Development Collaboration on Islamic IT Projects',
  speaker : 'Prof. M Zaki Khedr',
  description : 'Prof Dr. Zaki Khedher will thoroughly cover topics on :\n 1. The role of collaboration on RnD for Islamic IT project\n 2. Brief about IMAN Conference (introduction, paper criteria, who can submit, how to submit, paper from Indonesia, etc)\n 3. Introduction to IJASAT Journal\n 4. Opportunity for computer science students or graduates in Indonesia to join the IMAN Conference and being an IJASAT contributor\n  *Webinar ini berlangsung dengan bahasa Inggris'
}

const s04 = {
  date : new Date("2021-01-31T13:00:00+07:00"), 
  url : 'https://zoom.us/j/91770527493?pwd=UG1ZV3BKUUxhd0s0OUo2VXM4aitJdz09',
  title : 'Talkshow Kawal Covid19',
  speaker : 'Ainun Najib & Zain Fathoni',
  description : 'Talkshow bersama tim KawalCOVID19 bersama Ainun Najib (Inisiator) dan Zain Fathoni (Ketua Tim Teknologi). Kita akan membahas : \n1. Pengenalan gerakan Kawal Covid-19\n2.Proses membangun tim dan menjalankan gerakan\n3.Kolaborasi tim Kawal Covid-19 dalam menjalankan gerakan\n4.Suka duka dalam dalam menjalankan Kawal Covid-19\n5.Rencana kedepannya dan peluang peserta seminar untuk ikut andil\n6.Project keumatan lainnya yang pernah dikerjakan selain Kawal Covid\n7.Pesan untuk pemuda Muslim khususnya di sektor teknologi'
}

const od = {
  date : new Date("2021-01-10T09:00:00+07:00"), 
  url : 'https://zoom.us/j/97865260973?pwd=Wm10MytKMnlqVVhYaHBVS0tkVlhldz09',
  title : 'Open Source Online Discussion',
  speaker : 'Anggi Renaldy, Dimas Yoga, Faiz Ghifari Haznitrama, Rahmi Yuwan, Galih Fajar',
  description : 'Open Source Online Discussion merupakan sebuah acara diskusi dalam rangka menciptakan ekosistem kolaborasi yang positif diantara inventor Muslim dan umat Islam yang tertarik dengan teknologi.\n Dalam acara ini, akan dipaparkan proyek/penelitian berbasis keumatan dari masing-masing founder untuk kemudian dibuka peluang kontribusi dari inovator-inovator Muslim yang ingin berpartisipasi aktif terhadap proyek/penelitian tersebut. Kemudian akan dipaparkan juga mengenai ide-ide potensial yang bisa dikembangkan lebih lanjut. \nProjek yang dipaparkan antara lain:\n<ul> <li>Platform Katalog Desain Masjid Terverifikasi</li><li>Pencarian ayat Al Quran berdasar Dokumen Bahasa Indonesia</li><li>Asisten Belajar Quran berbasis AI Pengenal Ucapan</li><li>MosQu: Mosque Integrated Digital Platform</li></ul>'
}
var calendarCopy = 'Assalamualaykum wr wb. \n\n Topik \n{topic} \n\nVirtual seminar ini akan diadakan via Zoom pada \nHari/Tanggal: {day} , {date} \nJam: {time} - selesai \nGRATIS, kuota terbatas. \n\nLink zoom: \n{url}\n\nWassalamualaykum wr wb\nMuslim Hackfest by OpenUmma'

const fileName = location.pathname.split("/").slice(-1)[0];

switch(fileName) {
  case 's-01.html' :
    eventSingle = s01;
    posterImage = 'poster.jpg';
    break;
  case 's-02.html' :
    eventSingle = s02;
    posterImage = 'poster.jpg';
    break;
  case 's-03.html' :
    eventSingle = s03;
    posterImage = 'poster.jpg';
    break;
  case 's-04.html' :
    eventSingle = s04;
    posterImage = 'poster.jpg';
    break;
  case 'od.html' :
    eventSingle = od;
    posterImage = 'osd.png';
    break;
  default : eventSingle = s01;
}
const yourDateToGo = eventSingle.date.getTime();
const yourDate = eventSingle.date;

// yourDateToGo.setDate(yourDateToGo.getDate() + 1); //your're setting date in this object 1 day more from now
//you can change number of days to go by putting any number in place of 1

var timing = setInterval( // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
    function () {

    var currentDate = new Date().getTime(); //same thing as above
    var timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
    if (days < 10) days="0"+days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
    if (hours < 10) hours="0"+hours;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
    if (minutes < 10) minutes="0"+minutes;
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
    if (seconds < 10) seconds="0"+seconds;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes; // putting number of days, hours, minutes and seconds in div, 
    document.getElementById("seconds").innerHTML = seconds;
    //which id is countdown

    if (timeLeft <= (5*1000*60) ) { //less than 5 minutes  
      clearInterval(timing);
      window.location.href = eventSingle.url;
      document.getElementById("countdown").innerHTML = "It's over"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now) 
      //and you see "It's over" instead of time left
    }
    }, 1000);

function pad(n){return n<10 ? '0'+n : n};
function ISODateString(d){
  return d.getUTCFullYear()
        + pad(d.getUTCMonth()+1)
        + pad(d.getUTCDate())+'T'
        + pad(d.getUTCHours())
        + pad(d.getUTCMinutes())
        + pad(d.getUTCSeconds())+'Z'
}
function toHari(i){
  switch (i){
    case 0 :
      return 'Minggu'; 
    case 1 :
      return 'Senin'; 
    case 2 :
      return 'Selasa'; 
    case 3 :
      return 'Rabu'; 
    case 4 :
      return 'Kamis';
    case 5 :
      return 'Jumat';
    case 6 :
      return 'Sabtu';
  }
}

window.onload = function () {
  /*Render content based on data*/
  let endDate = new Date(yourDateToGo + (2*60*60*1000)); //shift 2 hours
  endDate = ISODateString(endDate);
  const startDate = ISODateString(yourDate);
  var calendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE&text={title}&dates={startDate}/{endDate}&details={details}';
  calendarCopy = calendarCopy.replace(/{topic}/g,eventSingle.description);
  calendarCopy = calendarCopy.replace(/{day}/g,toHari(yourDate.getDay()));
  calendarCopy = calendarCopy.replace(/{date}/g,(yourDate.getUTCDate().toString()) + ' Januari 2021');
  calendarCopy = calendarCopy.replace(/{time}/g,( pad(yourDate.getUTCHours()+7) + '.'+ pad(yourDate.getMinutes().toString())));
  calendarCopy = calendarCopy.replace(/{url}/g,'https://muslim-hackfest.openumma.org/seminar/'+fileName);
  calendarUrl = calendarUrl.replace(/{title}/g,'Muslim Hackfest : '+eventSingle.title);
  calendarUrl = calendarUrl.replace(/{startDate}/g,startDate);
  calendarUrl = calendarUrl.replace(/{endDate}/g,endDate);
  calendarUrl = calendarUrl.replace(/{details}/g,calendarCopy);
  calendarUrl= encodeURI(calendarUrl);

  $('.poster').append('<img src=../assets/img/poster/'+posterImage+' alt='+eventSingle.title+'>');
  $('.seminar-title').append(eventSingle.title);
  var eventTopic = eventSingle.description.replace(/\n/g,"<br>");
  $('.seminar-topic').append('<p>'+eventTopic+'</p>');
  $('#addToCalendarBtn').attr('href',calendarUrl);
}