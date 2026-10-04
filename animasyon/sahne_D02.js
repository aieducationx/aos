/* XX10 · Hafta 1 · Ders 1B — Vaat ile Kanıt Arasında.  Kaynak: h01_kitap.txt (1.4–1.5) */
window.XXA_DERS = {
id: 'D02', baslik: '1B · Vaat ile Kanıt Arasında', kunye: 'XX10 · Hafta 1 · Ders 1B',
soyleyis: {"1A’da": "ilk derste", "1926’da": "bin dokuz yüz yirmi altıda", "1960’larda": "bin dokuz yüz altmışlarda", "1970’lerde": "bin dokuz yüz yetmişlerde", "1970’te": "bin dokuz yüz yetmişte", "1982’den": "bin dokuz yüz seksen ikiden", "2 sigma": "iki sigma", "2007 ile 2018": "iki bin yedi ile iki bin on sekiz", "Pressey": "Presi", "Skinner": "Skinır", "PLATO": "Pleyto", "TICCIT": "Tikit", "SCHOLAR": "Skolar", "Bloom": "Blum", "Chicago": "Şikago", "VanLehn": "Van Leyn", "Fletcher": "Fleçır", "Wang": "Vang", "Zawacki-Richter": "Zavatski Rihter", "GPT Base": "Ci Pi Ti Beyz", "GPT Tutor": "Ci Pi Ti Tutır", "Kestin": "Kestin", "Harvard": "Harvırd", "Molenaar": "Molenar", "Holmes": "Holmz"},
sahneler: [

/* 0 — açılış */
{tema: 'koyu', html: `
<div class="ab" style="left:130px;top:230px;width:1500px">
  <div class="kick" data-b="-1" data-fx="fade">Yetişkin Eğitiminde Akıllı ve Uyarlanabilir Öğrenme Sistemleri</div>
  <div class="rule" data-b="-1" data-fx="grow" data-d="0.2" style="width:220px;margin:34px 0 40px"></div>
  <div class="h1" data-b="0" data-fx="up">Vaat ile Kanıt Arasında</div>
  <div class="lead mute" data-b="0" data-fx="up" data-d="0.5" style="margin-top:28px">Hafta 1 · Ders 1B</div>
  <div class="h3 gold" data-b="0" data-fx="up" data-d="5" style="margin-top:60px;font-style:italic;font-weight:500">“Bu sistem işe yarıyor” cümlesini kurmak için elimizde en az ne olmalı?</div>
  <div class="row" style="margin-top:56px;gap:18px">
    <span class="chip" data-b="1" data-fx="pop" data-d="2">1 · Altmış yılın vaatleri</span>
    <span class="chip" data-b="1" data-fx="pop" data-d="3.5">2 · Etkililik bulguları</span>
    <span class="chip" data-b="1" data-fx="pop" data-d="5.5">3 · Denetim, riskler, eleştirel okuma</span>
  </div>
</div>`,
b: [
 'Merhaba. Birinci haftanın ikinci dersindeyiz. 1A’da bir sisteme ne zaman akıllı diyebileceğimizi konuştuk. Şimdi ikinci soruya geçiyoruz: Bu sistem işe yarıyor cümlesini kurmak için elimizde en az ne olmalı?',
 'Üç adımda ilerleyeceğiz. Önce alanın altmış yıllık vaatlerine, sonra etkililik bulgularına, en sonunda da kararı kimin verdiğine ve bir çalışmayı nasıl eleştirel okuyacağımıza bakacağız.'
]},

/* 1 — dalgalar */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.4 · Teknoloji dalgaları ve yeniden üretilen vaat</div>
<svg class="ab" style="left:0;top:0" width="1920" height="1080" viewBox="0 0 1920 1080"><path d="M150 470 H1790" stroke="#1F2A33" stroke-width="3" pathLength="1" data-b="0" data-fx="draw" data-du="1.6"/></svg>
${[['1926','Öğretme makineleri','Pressey · Skinner','Kendi hızında ilerleme',0,0.8],['1960–70’ler','Bilgisayar destekli öğretim','PLATO · TICCIT','Yanıta göre dallanan yol',1,0],['1970','SCHOLAR','Sokratik diyalog','Konusunu “bilen” öğretmen',2,0],['1982–95','Zeki öğretim sistemleri','2. dönem','Bire bir öğretim düzeyi',2,6],['1990–2000’ler','Uyarlanabilir hiper ortamlar','','Kişisel içerik ve yol',3,0],['2010’lar','Öğrenme analitiği','EDM','Erken uyarı',3,1.2],['2020’ler','Üretken YZ','','Ölçekli doğal dil desteği',3,2.4]].map(function(r,i){var x=140+i*250;return '<div class="ab" style="left:'+(x-8)+'px;top:456px;width:28px;height:28px;border-radius:50%;background:var(--acc);border:5px solid var(--cream)" data-b="'+r[4]+'" data-fx="pop" data-d="'+r[5]+'"></div><div class="ab" style="left:'+(x-10)+'px;top:'+(i%2?510:250)+'px;width:225px" data-b="'+r[4]+'" data-fx="'+(i%2?'up':'down')+'" data-d="'+r[5]+'"><div class="t22 b acc">'+r[0]+'</div><div class="h3" style="font-size:28px;margin-top:6px">'+r[1]+'</div><div class="t22 mute">'+r[2]+'</div><div class="t22" style="margin-top:8px;font-style:italic">“'+r[3]+'”</div></div>'}).join('')}
<div class="ab" style="left:130px;top:800px;width:1660px;text-align:center" data-b="3" data-fx="up" data-d="5"><div class="h2">Her dalga aynı vaadi yeniden üretti: <span class="mark">bireysel öğretmen</span></div></div>
<div class="ab cite" style="left:130px;top:910px" data-b="0" data-fx="fade">McCalla, 2023, s. 10–14</div>`,
b: [
 'Öğrenmeyi otomasyonla destekleme düşüncesi bilgisayardan eskidir. Pressey 1926’da, doğru yanıt verilmeden bir sonraki soruya geçilmesine izin vermeyen makineler tasarladı. Skinner da bu çalışmayı davranışçı kuramla birleştirip öğretme makinelerini savundu.',
 '1960’larda bilgisayar destekli öğretim, 1970’lerde PLATO ve TICCIT gibi platformlar geldi. Öğrenciyi yanıtına göre dallandırıyorlardı; ama her olası yanıtın tasarımcı tarafından önceden öngörülmesi gerekiyordu.',
 '1970’te geliştirilen SCHOLAR, Güney Amerika coğrafyası üzerine Sokratik diyalog yürütüyordu ve konusunu belli ölçüde biliyordu. 1982’den sonraki dönemde hedef açıkça konmuştu: bire bir insan öğretiminin etkililiğine ulaşmak.',
 'Ardından uyarlanabilir hiper ortamlar, öğrenme analitiği ve bugün üretken yapay zekâ geldi. Dikkat edin: Her dalga aynı vaadi yeniden üretti. Kişiye göre ilerleyen, bire bir bir öğretmen.'
]},

/* 2 — Bloom 2 sigma */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.4 · Bloom ve “2 sigma problemi”</div>
<svg class="ab" style="left:0;top:0" width="1920" height="1080" viewBox="0 0 1920 1080">
  <line x1="160" y1="760" x2="1300" y2="760" stroke="rgba(255,255,255,.35)" stroke-width="2"/>
  ${(function(){function bell(mu){var d='';for(var x=-3.2;x<=3.21;x+=0.1){var X=mu+x*120,Y=760-330*Math.exp(-x*x/2);d+=(d?' L':'M')+X.toFixed(1)+' '+Y.toFixed(1)}return d}
   return '<path d="'+bell(560)+'" fill="none" stroke="#A9B2B9" stroke-width="5" pathLength="1" data-b="0" data-fx="draw" data-du="1.8" data-d="2"/>'+
   '<path d="'+bell(800)+'" fill="none" stroke="#D9A441" stroke-width="6" pathLength="1" data-b="1" data-fx="draw" data-du="1.8" data-d="1"/>'+
   '<line x1="560" y1="420" x2="560" y2="770" stroke="#A9B2B9" stroke-dasharray="6 8" stroke-width="2" data-b="1" data-fx="fade" data-d="3"/>'+
   '<line x1="800" y1="420" x2="800" y2="770" stroke="#D9A441" stroke-dasharray="6 8" stroke-width="2" data-b="1" data-fx="fade" data-d="3"/>'+
   '<path d="M565 400 H795" stroke="#fff" stroke-width="3" pathLength="1" data-b="1" data-fx="draw" data-d="4"/><path d="M780 390 L797 400 L780 410" fill="none" stroke="#fff" stroke-width="3" data-b="1" data-fx="fade" data-d="5"/>'})()}
</svg>
<div class="ab t26 mute" style="left:400px;top:790px;width:320px;text-align:center" data-b="0" data-fx="fade" data-d="3">Geleneksel sınıf</div>
<div class="ab t26 gold b" style="left:640px;top:790px;width:320px;text-align:center" data-b="1" data-fx="fade" data-d="2">Bire bir öğretim</div>
<div class="ab h2" style="left:590px;top:320px;width:200px;text-align:center" data-b="1" data-fx="pop" data-d="5">≈ 2 SS</div>
<div class="ab col" style="left:1380px;top:220px;width:410px">
  <div class="card" data-b="0" data-fx="right"><div class="kt">Bloom, 1984, s. 4</div><div class="t26">Chicago Üniversitesi’nde iki doktora çalışması: geleneksel sınıf, tam öğrenme, bire bir öğretim.</div></div>
  <div class="card" data-b="2" data-fx="right"><div class="kt">2 sigma problemi</div><div class="t26">Grup öğretiminde bire bir öğretim kadar etkili yöntemler nasıl bulunur?</div></div>
</div>`,
b: [
 'Bire bir öğretim hedefinin arkasında güçlü bir iddia var. Bloom, Chicago Üniversitesi’nde yapılan iki doktora çalışmasında geleneksel sınıf, tam öğrenme ve bire bir öğretim koşullarını karşılaştırdı.',
 'Bulgu şuydu: İyi bir öğretmenle bire bir çalışan ortalama öğrenci, geleneksel sınıftaki ortalama öğrenciden yaklaşık iki standart sapma daha başarılıydı.',
 '2 sigma problemi adını buradan alır: Grup öğretiminde bire bir öğretim kadar etkili yöntemleri nasıl bulabiliriz? Zeki öğretim sistemleri uzun süre bu sorunun cevabı olarak görüldü.'
]},

/* 3 — VanLehn */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.4 · Yaygın kanı ve bulgu</div>
<div class="ab" style="left:130px;top:160px;width:1100px;height:640px">
  <div class="ab" style="left:0;top:560px;width:1100px;height:3px;background:#1F2A33"></div>
  ${[['Yanıt temelli sistem',0.3,null],['Adım temelli ZÖS',1.0,0.76],['İnsan öğretmen',2.0,0.79]].map(function(r,i){var x=60+i*350,h=240;return '<div class="bar" style="left:'+x+'px;bottom:80px;width:110px;height:'+(r[1]*h)+'px;background:repeating-linear-gradient(45deg,#E4DCCD 0 10px,#F4EFE5 10px 20px);border:2px dashed #B9AE9A" data-b="0" data-fx="growy" data-d="'+(3+i*1.6)+'"></div><div class="ab t22 mute" style="left:'+(x-10)+'px;top:'+(560-r[1]*h-60)+'px;width:130px;text-align:center" data-b="0" data-fx="fade" data-d="'+(3.5+i*1.6)+'">kanı: '+String(r[1].toFixed(1)).replace('.',',')+'</div>'+(r[2]?'<div class="bar" style="left:'+(x+130)+'px;bottom:80px;width:110px;height:'+(r[2]*h)+'px;background:var(--acc)" data-b="1" data-fx="growy" data-d="'+(i===2?1.5:4.5)+'"></div><div class="ab h3 acc" style="left:'+(x+120)+'px;top:'+(560-r[2]*h-62)+'px;width:130px;text-align:center" data-b="1" data-fx="fade" data-d="'+(i===2?2.3:5.3)+'">'+String(r[2].toFixed(2)).replace('.',',')+'</div>':'')+'<div class="ab t22 b" style="left:'+(x-20)+'px;top:580px;width:300px">'+r[0]+'</div>'}).join('')}
</div>
<div class="ab col" style="left:1290px;top:200px;width:500px">
  <div class="card" data-b="0" data-fx="right"><div class="kt">VanLehn, 2011, s. 197</div><div class="t26">Karşılaştırma: <b>hiç öğretim almayan</b> koşul.</div></div>
  <div class="card" data-b="2" data-fx="right" style="border:2px solid var(--acc)"><div class="t26">ZÖS insan öğretmene beklenenden <b>çok daha yakın</b>; insan öğretmen de beklenenden <b>çok daha az</b> etkili.</div></div>
</div>`,
b: [
 'Sonraki sentezler bu iddiayı aynı büyüklükte doğrulamadı. VanLehn alandaki yaygın bir kanıyı sınadı: Hiç öğretim almayan koşula göre yanıt temelli sistemlerin etkisi sıfır virgül üç, zeki öğretim sistemlerininki bir, insan öğretmeninki iki.',
 'Bulduğu değerler başkaydı: İnsan öğretiminin etki büyüklüğü sıfır virgül yetmiş dokuz, adım temelli zeki öğretim sistemlerininki sıfır virgül yetmiş altı.',
 'Bu bulgu iki yönlüdür. Zeki öğretim sistemleri insan öğretmene beklenenden çok daha yakındır; ama insan öğretmen de beklenenden çok daha az etkilidir.'
]},

/* 4 — Kulik ve Wang */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.4 · Ne kadar arttı? Önce: neyle ölçüldü?</div>
<div class="ab card" style="left:130px;top:160px;width:760px" data-b="0" data-fx="left">
  <div class="kt">Kulik ve Fletcher, 2016 · 50 değerlendirme</div>
  <div class="row" style="align-items:baseline;gap:20px"><span class="num acc" style="font-size:96px" data-b="0" data-cnt="0.66" data-dec="2" data-fx="none" data-d="1">0</span><span class="t26">SS ortanca etki</span></div>
  <div style="position:relative;height:70px;margin-top:20px">
    <div class="ab" style="left:0;right:0;top:30px;height:6px;background:#E4DCCD;border-radius:3px"></div>
    <div class="ab" style="left:50%;top:18px;width:30px;height:30px;margin-left:-15px;border-radius:50%;background:#9AA5AD"></div>
    <div class="ab" style="left:50%;top:30px;width:25%;height:6px;background:var(--acc);border-radius:3px" data-b="0" data-fx="grow" data-d="4"></div>
    <div class="ab" style="left:75%;top:18px;width:30px;height:30px;margin-left:-15px;border-radius:50%;background:var(--acc)" data-b="0" data-fx="pop" data-d="5"></div>
  </div>
  <div class="row t22 mute" style="justify-content:space-between"><span>0</span><span style="margin-left:40px">50. yüzdelik</span><span class="acc b">75. yüzdelik</span><span>100</span></div>
</div>
<div class="ab card" style="left:950px;top:160px;width:840px;height:430px" data-b="1" data-fx="right">
  <div class="kt">Ortalama etki ölçme aracına göre</div>
  <div class="ab bar" style="left:120px;bottom:80px;width:200px;height:${0.73*290}px;background:var(--acc)" data-b="1" data-fx="growy" data-d="2.5"></div>
  <div class="ab bar" style="left:480px;bottom:80px;width:200px;height:${0.13*290}px;background:var(--navy)" data-b="1" data-fx="growy" data-d="5.5"></div>
  <div class="ab h3 acc" style="left:120px;top:${430-80-0.73*290-60}px;width:200px;text-align:center" data-b="1" data-fx="fade" data-d="3.3">0,73</div>
  <div class="ab h3 nvy" style="left:480px;top:${430-80-0.13*290-60}px;width:200px;text-align:center" data-b="1" data-fx="fade" data-d="6.3">0,13</div>
  <div class="ab t22 b" style="left:90px;top:365px;width:260px;text-align:center">Yerel testler</div>
  <div class="ab t22 b" style="left:450px;top:365px;width:260px;text-align:center">Standart testler</div>
</div>
<div class="ab t26" style="left:950px;top:610px;width:840px" data-b="2" data-fx="up">Kendi problem türleriyle ölçülen etki, <b>işyerine ya da sertifika sınavına</b> taşınmayabilir.</div>
<div class="ab card" style="left:130px;top:560px;width:760px" data-b="3" data-fx="up"><div class="kt">Wang vd., 2024, s. 1348 · 45 çalışma</div><div class="t26"><b>g = 0,70</b> · YZ destekli uyarlanabilir sistemler, uyarlanabilir olmayan müdahalelere göre; etki öğrenen düzeyi, süre ve desene göre değişiyor.</div></div>
<div class="ab" style="left:130px;top:790px;width:1660px;text-align:center" data-b="4" data-fx="up"><div class="h3">Bu sayılar birbiriyle karşılaştırılamaz. İlk soru: <span class="mark">neye göre ve neyle ölçülerek?</span></div></div>`,
b: [
 'Kulik ve Fletcher, zeki öğretim sistemlerine ilişkin elli kontrollü değerlendirmeyi inceledi. Ortanca etki sıfır virgül altmış altı standart sapmaydı. Bu, test puanlarını ellinci yüzdelikten yetmiş beşinci yüzdeliğe çıkarmak demek.',
 'Ama etkinin büyüklüğü neyle ölçüldüğüne büyük ölçüde bağlıydı. Yerel olarak geliştirilmiş testlerde ortalama etki sıfır virgül yetmiş üç; standart testlerde ise yalnızca sıfır virgül on üç.',
 'Yetişkin eğitimi açısından bu çok öğreticidir. Bir sistem kendi öğrettiği problem türleriyle ölçüldüğünde çok etkili görünebilir; ama öğrenenin işyerinde ya da bir sertifika sınavında karşılaşacağı farklı sorularda aynı etkiyi göstermeyebilir.',
 'Daha yeni bir meta-analizde Wang ve arkadaşları, kırk beş çalışmada yapay zekâ destekli uyarlanabilir sistemlerin etkisini g eşittir sıfır virgül yetmiş buldu; etki öğrenen düzeyine, süreye ve desene göre değişiyordu.',
 'Bu sayılar birbiriyle doğrudan karşılaştırılamaz; farklı karşılaştırma koşullarından ve farklı ölçme araçlarından gelirler. Bir etki büyüklüğünü okurken ilk soru büyüklük değil, neye göre ve neyle ölçülerek bulunduğudur.'
]},

/* 5 — Zawacki-Richter */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.4 · Araştırmaların yönelimi</div>
<div class="ab" style="left:130px;top:170px;width:600px" data-b="0" data-fx="left">
  <div class="num gold" data-b="0" data-cnt="146" data-fx="none" data-d="1">0</div>
  <div class="t30" style="margin-top:10px">çalışma · yükseköğretimde YZ · 2007–2018</div>
  <div class="cite" style="margin-top:14px">Zawacki-Richter vd., 2019, s. 1</div>
</div>
<div class="ab" style="left:820px;top:170px;width:970px;display:grid;grid-template-columns:1fr 1fr;gap:20px">
  <div class="card" data-b="1" data-fx="pop" data-d="0.8"><div class="h3" style="font-size:32px">Profilleme ve kestirim</div></div>
  <div class="card" data-b="1" data-fx="pop" data-d="2"><div class="h3" style="font-size:32px">Ölçme ve değerlendirme</div></div>
  <div class="card" data-b="1" data-fx="pop" data-d="3.2"><div class="h3" style="font-size:32px">Uyarlanabilir sistemler ve kişiselleştirme</div></div>
  <div class="card" data-b="1" data-fx="pop" data-d="5"><div class="h3" style="font-size:32px">Zeki öğretim sistemleri</div></div>
</div>
<div class="ab row" style="left:130px;top:560px;width:1660px">
  <div class="card" style="flex:1" data-b="2" data-fx="up"><div class="kt">Eksik 1</div><div class="t26">Risklere ilişkin eleştirel değerlendirme neredeyse hiç yok.</div></div>
  <div class="card" style="flex:1" data-b="2" data-fx="up" data-d="2.5"><div class="kt">Eksik 2</div><div class="t26">Pedagojik kuramla bağ zayıf.</div></div>
</div>
<div class="ab h1 gold" style="left:130px;top:770px;width:1660px;text-align:center;font-size:76px;font-style:italic" data-b="2" data-fx="pop" data-d="6">Eğitimciler nerede?</div>`,
b: [
 'Araştırmaların yönelimine dair önemli bir uyarı da var. Zawacki-Richter ve arkadaşları, yükseköğretimde yapay zekâ uygulamalarına ilişkin 2007 ile 2018 arasında yayımlanmış yüz kırk altı çalışmayı inceledi.',
 'Uygulamaları dört alanda topladılar: profilleme ve kestirim; ölçme ve değerlendirme; uyarlanabilir sistemler ve kişiselleştirme; ve zeki öğretim sistemleri.',
 'Çalışmalarda risklere ilişkin eleştirel değerlendirme neredeyse hiç yoktu; pedagojik kuramla bağ da zayıftı. Makalenin alt başlığı sonucu tek soruda toplar: Eğitimciler nerede?'
]},

/* 6 — Bastani ve Kestin */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.4 · Üretken YZ: çelişki mi, tasarım farkı mı?</div>
<div class="ab cite" style="left:130px;top:140px" data-b="0" data-fx="fade">Bastani vd., 2025, s. 1–2 · Türkiye, lise, ≈ 1.000 öğrenci, randomize deney</div>
<div class="ab row" style="left:130px;top:190px;width:900px" data-b="0" data-fx="up" data-o="3">
  <div class="card" style="flex:1;border-top:8px solid var(--navy)"><div class="h3" style="font-size:34px">GPT Base</div><div class="t22 mute" data-b="1" data-fx="fade">Standart sohbet arayüzü</div></div>
  <div class="card" style="flex:1;border-top:8px solid var(--green)"><div class="h3" style="font-size:34px">GPT Tutor</div><div class="t22 mute" data-b="1" data-fx="fade" data-d="2">Öğrenmeyi koruyan yönergeler</div></div>
</div>
<div class="ab card" style="left:130px;top:400px;width:900px;height:430px" data-b="1" data-fx="up" data-d="3" data-o="3">
  <div class="row" style="justify-content:space-between"><div class="kt">Araç açıkken · alıştırma</div><div class="kt" style="color:var(--red)" data-b="2" data-fx="fade">Araç kaldırılınca · sınav</div></div>
  <div class="ab" style="left:60px;right:60px;top:290px;height:2px;background:#1F2A33"></div>
  <div class="ab bar" style="left:80px;bottom:140px;width:110px;height:${48*1.4}px;background:var(--navy)" data-b="1" data-fx="growy" data-d="7"></div>
  <div class="ab bar" style="left:210px;bottom:140px;width:110px;height:${127*1.4}px;background:var(--green)" data-b="1" data-fx="growy" data-d="9"></div>
  <div class="ab h3 nvy" style="left:70px;top:${290-48*1.4-56}px;width:130px;text-align:center" data-b="1" data-fx="fade" data-d="7.6">+%48</div>
  <div class="ab h3 grn" style="left:200px;top:${290-127*1.4-56}px;width:130px;text-align:center" data-b="1" data-fx="fade" data-d="9.6">+%127</div>
  <div class="ab" style="left:560px;top:292px;width:110px;height:${17*2.2}px;background:var(--red);border-radius:0 0 10px 10px;transform-origin:top" data-b="2" data-fx="fade" data-d="3"></div>
  <div class="ab h3 red" style="left:540px;top:${292+17*2.2+8}px;width:150px;text-align:center" data-b="2" data-fx="fade" data-d="3.6">−%17</div>
  <div class="ab t22 mute" style="left:470px;top:70px;width:380px;text-align:right" data-b="2" data-fx="fade" data-d="4">GPT Base, hiç erişimi olmayan gruba göre; Tutor’daki korumalar bu etkiyi büyük ölçüde gideriyor.</div>
</div>
<div class="ab card" style="left:1090px;top:190px;width:700px" data-b="3" data-fx="right"><div class="kt">Kestin vd., 2025, s. 2 · Harvard, lisans fizik</div><div class="t26">Araştırma temelli ilkelerle tasarlanmış YZ öğretmeni: öğrenme kazancı ortancası, sınıf içi aktif öğrenmenin <b>iki katından fazla</b>.</div></div>
<div class="ab" style="left:1090px;top:470px;width:700px" data-b="4" data-fx="up"><div class="h2" style="font-size:52px">Hangi tasarım, <span class="mark">kimde</span>, hangi koşulda?</div></div>
<div class="ab row" style="left:130px;top:420px;width:900px" data-b="5" data-fx="up">
  <div class="card" style="flex:1"><div class="kt">Araç açıkken</div><div class="h3" style="font-size:34px">Öğrenen + araç</div><div class="t22 mute">ortak performans</div></div>
  <div class="h1 acc" style="width:90px;text-align:center;align-self:center">≠</div>
  <div class="card" style="flex:1"><div class="kt">Araç kaldırılınca</div><div class="h3" style="font-size:34px">Öğrenen tek başına</div><div class="t22 mute">“üstbilişsel tembellik” riski · Fan vd., 2025</div></div>
</div>`,
b: [
 'Üretken yapay zekâ bu tabloya çelişkili görünen bulgular ekledi. Bastani ve arkadaşları, Türkiye’de bir lisede yaklaşık bin matematik öğrencisiyle randomize kontrollü bir deney yürüttü ve iki aracı karşılaştırdı.',
 'GPT Base standart bir sohbet arayüzünü taklit ediyordu; GPT Tutor ise öğrenmeyi korumak için tasarlanmış yönergeler içeriyordu. Araca erişim varken alıştırma başarısı GPT Base grubunda yüzde kırk sekiz, GPT Tutor grubunda yüzde yüz yirmi yedi arttı.',
 'Ama araç kaldırıldıktan sonra yapılan sınavda tablo değişti. GPT Base grubu, araca hiç erişimi olmayan gruptan yüzde on yedi daha düşük başarı gösterdi. GPT Tutor’daki korumalar bu olumsuz etkiyi büyük ölçüde giderdi.',
 'Kestin ve arkadaşlarının Harvard’da büyük bir lisans fizik dersinde yürüttüğü deneyde ise, araştırma temelli ilkelere göre tasarlanmış bir yapay zekâ öğretmeniyle çalışanların öğrenme kazancı ortancası, sınıf içi aktif öğrenme grubunun iki katından fazlaydı.',
 'Çelişki mi, tasarım farkı mı? Korumasız araç cevabı verir. Korumalı araç ve Kestin’in öğretmeni ise öğrenenin düşünmesini destekleyecek biçimde sınırlandırılmıştır. Doğru soru yapay zekâ işe yarar mı değil; hangi tasarım, kimde, hangi koşulda?',
 'Bir ayrıntı daha: Araç açıkken ölçülen başarı, öğrencinin değil öğrenci ile aracın birlikte başarısıdır. Fan ve arkadaşları buna eşlik edebilecek riski üstbilişsel tembellik olarak adlandırır. Ortak performans ile tek başına performans arasındaki fark, yetişkin eğitiminde sorulacak temel sorulardan biridir.'
]},

/* 7 — Molenaar */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.5 · Kararı kim veriyor? Altı otomasyon düzeyi</div>
<div class="ab row" style="left:130px;top:150px;gap:16px" data-b="0" data-fx="none">
  <span class="chip" data-b="0" data-fx="pop" data-d="6">Sezme</span><span class="chip" data-b="0" data-fx="pop" data-d="6.6">Tanılama</span><span class="chip" data-b="0" data-fx="pop" data-d="7.2">Eyleme</span>
  <span class="cite" style="align-self:center;margin-left:12px" data-b="0" data-fx="fade" data-d="7.5">Molenaar, 2022, s. 632–638</span>
</div>
${[['Yalnızca öğretmen',1,0],['Öğretmene yardım',1,4],['Kısmi otomasyon',2,1],['Koşullu otomasyon',2,2.5],['Yüksek otomasyon',2,4],['Tam otomasyon',2,6]].map(function(r,i){var h=90+i*70;return '<div class="ab" style="left:'+(130+i*190)+'px;top:'+(860-h)+'px;width:176px;height:'+h+'px;border-radius:14px 14px 0 0;background:'+(i===5?'#B23A2E':'rgba(217,164,65,'+(0.18+i*0.12)+')')+';display:flex;align-items:flex-start;justify-content:center;padding-top:14px" data-b="'+r[1]+'" data-fx="growy" data-d="'+r[2]+'"'+((i===1||i===3)?' data-hl="3" data-hd="'+(i===1?0:5)+'"':'')+'><span class="h3" style="font-size:40px;color:'+(i>=4?'#fff':'#FBF8F2')+'">'+(i+1)+'</span></div><div class="ab t22 b" style="left:'+(130+i*190)+'px;top:875px;width:176px;text-align:center" data-b="'+r[1]+'" data-fx="fade" data-d="'+(r[2]+0.4)+'">'+r[0]+'</div>'}).join('')}
<div class="ab card" style="left:1310px;top:240px;width:480px" data-b="3" data-fx="right"><div class="kt">Düzey 2</div><div class="t22">Pano, son iki haftada girmeyenleri listeler; ulaşma kararı öğretim elemanınındır.</div></div>
<div class="ab card" style="left:1310px;top:440px;width:480px" data-b="3" data-fx="right" data-d="5"><div class="kt">Düzey 4</div><div class="t22">Eşiğin altındaki öğrenene otomatik destek modülü açılır; insan listeyi izler.</div></div>
<div class="ab card" style="left:1310px;top:640px;width:480px;border:2px solid var(--gold)" data-b="4" data-fx="right"><div class="t22">Alıştırma zorluğu ≠ programdan çıkarma önerisi. <b class="gold">Hangi karar hangi düzeyde?</b> · <span class="cite">U.S. Dept. of Education, 2023, s. 7</span></div></div>`,
b: [
 'Bir temsil, kararı kimin verdiğini söylemez. Molenaar bu soru için iki araç önerir. Birincisi yapay zekânın eğitimdeki temel işlevleri: sezme, tanılama ve eyleme.',
 'İkincisi altı otomasyon düzeyi. Birinci düzeyde denetimin tamamı öğretmendedir. İkinci düzeyde yapay zekâ ilk kez girer: veriyi sezip tanılar ve öğretmene bilgi verir; ama eylemi öğretmen seçer.',
 'Sonra kısmi, koşullu ve yüksek otomasyon gelir. Altıncı düzey tam otomasyondur: Döngüde düzenlemeyi denetleyen hiçbir insan yoktur.',
 'Yetişkin eğitiminden bir örnek: Son iki haftada giriş yapmayanları listeleyen bir pano ikinci düzeydir; ulaşma kararı öğretim elemanınındır. Eşiğin altındaki öğrenene otomatik destek modülü açan sistem ise dördüncü düzeydedir.',
 'Tasarım sorusu şu: Hangi karar hangi düzeyde verilmeli? Bir alıştırmanın zorluğunu ayarlamak ile bir öğrenenin programdan çıkarılmasını önermek aynı düzeyde otomatikleştirilemez. Amerika Birleşik Devletleri Eğitim Bakanlığı’nın raporu da ilk önerisini buraya koyar: Karar verme failliği insanlarda kalmalıdır.'
]},

/* 8 — riskler */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.5 · Dört risk ekseni</div>
<div class="ab" style="left:130px;top:160px;width:1660px;display:grid;grid-template-columns:1fr 1fr;gap:24px">
  <div class="card" style="border-left:8px solid var(--navy)" data-b="0" data-fx="up" data-d="2"><div class="h3" style="font-size:36px">Gizlilik ve gözetim</div><div class="t26 mute" style="margin-top:8px">Fark edilmeyen izleme; rıza gerçek mi, biçimsel mi?</div></div>
  <div class="card" style="border-left:8px solid var(--acc)" data-b="1" data-fx="up"><div class="h3" style="font-size:36px">Adalet ve yanlılık</div><div class="t26 mute" style="margin-top:8px">Geçmiş verideki eşitsizlik geleceğe kural olarak taşınır. <span class="cite">Kizilcec ve Lee, 2022</span></div></div>
  <div class="card" style="border-left:8px solid var(--purp)" data-b="2" data-fx="up"><div class="h3" style="font-size:36px">Failliğin daralması</div><div class="t26 mute" style="margin-top:8px">Yetişkinin kendi yolunu seçme hakkı.</div></div>
  <div class="card" style="border-left:8px solid var(--green)" data-b="2" data-fx="up" data-d="4.5"><div class="h3" style="font-size:36px">Otomasyon yanlılığı</div><div class="t26 mute" style="margin-top:8px">Öneriyi sorgulamadan kabul; otomasyon arttıkça görünmezleşir.</div></div>
</div>
<div class="ab row" style="left:130px;top:640px;width:1660px;align-items:center" data-b="3" data-fx="up">
  <div class="card" style="flex:1;text-align:center"><div class="h3">Etik şeyler yapmak</div></div>
  <div class="h1 acc" style="width:110px;text-align:center">≠</div>
  <div class="card" style="flex:1;text-align:center"><div class="h3">İşleri etik biçimde yapmak</div></div>
</div>
<div class="ab cite" style="left:130px;top:790px" data-b="3" data-fx="fade">Holmes vd., 2022, s. 505</div>
<div class="ab lead" style="left:130px;top:840px;width:1660px;text-align:center" data-b="3" data-fx="up" data-d="7">Tek cümlelik test: <b>Bu sistem kimin sorununu, kimin çıkarına çözüyor?</b></div>`,
b: [
 'Akıllı ve uyarlanabilir sistemlerin riskleri dört eksende toplanabilir. Birincisi gizlilik ve gözetim: Öğrenenin farkında olmadığı bir izleme düzeni kurulabilir; rızanın gerçek mi biçimsel mi olduğu önem kazanır.',
 'İkincisi adalet ve yanlılık: Geçmiş veriden öğrenen bir model, o verideki eşitsizlikleri geleceğe kural olarak taşıyabilir.',
 'Üçüncüsü failliğin daralması: Uyarlama, yetişkinin kendi yolunu seçme hakkını elinden alabilir. Dördüncüsü otomasyon yanlılığı: Öğretmen de öğrenen de sistemin önerisini sorgulamadan kabul etmeye eğilimlidir ve bu eğilim otomasyon arttıkça görünmezleşir.',
 'Holmes ve arkadaşları iyi niyetin tek başına etik bir tasarım üretmediğini vurgular ve bir ayrım önerir: etik şeyler yapmak ile işleri etik biçimde yapmak. Tek cümlelik bir test de verelim: Bu sistem kimin sorununu, kimin çıkarına çözüyor?'
]},

/* 9 — kanıt merdiveni */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.5 · Kanıtın gücü</div>
<div class="ab col" style="left:130px;top:170px;width:1660px;gap:18px">
  ${[['“Çok kullananlar daha başarılı”','Kullanımın değil, kullananların farkı olabilir (seçilim).',0,3],['“Kullananlar memnun”','Memnuniyet öğrenmeyi değil, deneyimi ölçer.',0,7],['“Öncesi-sonrası not arttı”','Karşılaştırma grubu yoksa zaman, olgunlaşma ve sınavın etkisinden ayrılamaz.',1,0]].map(function(r,i){return '<div class="card row" style="align-items:center;position:relative" data-b="'+r[2]+'" data-fx="left" data-d="'+r[3]+'" data-o="2"><div class="h3" style="width:640px;font-size:34px">'+r[0]+'</div><div class="t26 mute" style="flex:1">'+r[1]+'</div></div>'}).join('')}
</div>
${[['Kullananlar memnun.','Düşük'],['Kullanmadan önce ve sonra not arttı.','Orta'],['Rastgele atanmış iki grup; baştan belirlenmiş ölçütte fark.','Daha güçlü'],['Fark farklı kurumlarda tekrarlandı; kimde büyüdüğü, kimde kaybolduğu raporlandı.','En güçlü']].map(function(r,i){return '<div class="ab card" style="left:'+(130+i*150)+'px;top:'+(760-i*150)+'px;width:1060px;padding:20px 30px;'+(i===3?'border:2px solid var(--gold)':'')+'" data-b="'+(i<2?2:3)+'" data-fx="up" data-d="'+(i<2?3+i*2.5:i===2?0:5.5)+'"><div class="row" style="align-items:center"><div class="kt" style="width:170px;margin:0">'+r[1]+'</div><div class="t26" style="flex:1">'+r[0]+'</div></div></div>'}).join('')}
<div class="ab card" style="left:1340px;top:640px;width:450px;border:2px solid var(--acc)" data-b="4" data-fx="pop"><div class="kt" style="color:#E08A5E">Deniz’in “%30”u</div><div class="t26">Bu iddia merdivenin hangi basamağında?</div></div>`,
b: [
 'Risklerin yanında ikinci sorun kanıtın kendisidir. Bir sistemin işe yaradığını söylemek için yetersiz kalan üç kanıt türü sık görülür. Sistemi çok kullananlar daha başarılıysa, bu kullanımın değil kullananların farkı olabilir; aracı çok kullananlar zaten istekli öğrenenlerdir. Yüksek memnuniyet ise öğrenmeyi değil deneyimi ölçer.',
 'Öncesi ve sonrası not artışı da, karşılaştırma grubu yoksa zamanın, olgunlaşmanın ve sınavın kendisinin etkisinden ayrılamaz.',
 'Kanıtın gücünü bir merdiven gibi düşünebiliriz. En altta: Kullananlar memnun. Bir üstte: Kullanmadan önce ve sonra not arttı.',
 'Daha güçlüsü: Rastgele atanan iki gruptan sistemi kullanan grup, baştan belirlenmiş ölçütte daha başarılı oldu. En güçlüsü: Bu fark farklı kurumlarda tekrarlandı ve hangi öğrenen gruplarında büyüdüğü, hangilerinde kaybolduğu raporlandı.',
 'Deniz’in firmasının yüzde otuzunu hatırlayın. Kerem’in sorusu aslında şuydu: Bu iddia merdivenin hangi basamağında duruyor?'
]},

/* 10 — Uyarlama Merceği */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.5 · Uyarlama Merceği: beş sabit soru</div>
<div class="ab col" style="left:130px;top:160px;width:1660px;gap:14px">
  ${[['Ne?','Neyi, hangi zaman ölçeğinde uyarlıyor?',1,0,'Alıştırma sırasında verilen yardım; iki ayrı tasarımda.',3,0],['Neye göre?','Hangi öğrenen özelliğine dayanıyor; öğrenmeyle ilişkili mi?',1,4,'Kalıcı bir öğrenen modeli tutuluyor mu? Makalede ayrıca incelenmeli.',4,0],['Kim karar veriyor?','Kural mı, model mi, öğretmen mi; hangi otomasyon düzeyi?',1,9,'Yardımın kapsamını tasarımcıların yazdığı yönergeler sınırlıyor.',3,5],['Kanıt?','Neyle karşılaştırıldı, ne ölçüldü, ne zaman?',2,0,'Erişimsiz grupla karşılaştırma; araçla alıştırma + araçsız sınav.',3,9.5],['Kimin için, nereye kadar?','Etki kimde var, kimde yok; bağlamımıza taşınır mı?',2,4.5,'Türkiye’de lise öğrencileri; yetişkinlere taşınabilirlik tartışılmalı.',4,6]].map(function(r,i){return '<div class="card row" style="align-items:center;padding:18px 30px" data-b="'+(r[2]===1&&i===0?0:r[2])+'" data-fx="left" data-d="'+(i===0?3:r[3])+'"><div class="num acc" style="font-size:54px;width:70px">'+(i+1)+'</div><div style="width:330px" class="h3">'+r[0]+'</div><div class="t22 mute" style="width:560px">'+r[1]+'</div><div class="t22" style="flex:1;border-left:3px solid var(--gold);padding-left:20px" data-b="'+r[5]+'" data-fx="right" data-d="'+r[6]+'"><b class="acc">Bastani vd.: </b>'+r[4]+'</div></div>'}).join('')}
</div>
<div class="ab" style="left:130px;top:830px;width:1660px" data-b="5" data-fx="up"><div class="rule" style="width:160px;margin-bottom:18px"></div><div class="t26">Bu hafta: <b>Ürün Otopsisi</b> + <b>Uygulama Yaprağı 1</b> → dönem sonunda <b>Tasarım Dosyanız</b>.</div></div>`,
b: [
 'Dönem boyunca okuyacağımız her çalışmaya ve kendi tasarımınıza aynı beş soruyla bakacağız. Bu beş soruya Uyarlama Merceği diyoruz.',
 'Bir: Ne? Sistem neyi, hangi zaman ölçeğinde uyarlıyor? İki: Neye göre? Uyarlama hangi öğrenen özelliğine dayanıyor ve bu özellik öğrenmeyle ilişkili mi? Üç: Kim karar veriyor ve hangi otomasyon düzeyinde?',
 'Dört: Kanıt? Neyle karşılaştırıldı, ne ölçüldü, ne zaman ölçüldü? Beş: Kimin için, nereye kadar? Etki kimde büyük, kimde yok ve sonuç bizim bağlamımıza taşınabilir mi?',
 'Merceği Bastani çalışmasına uygulayalım. Ne: alıştırma sırasında verilen yardım, iki farklı tasarımda. Kim karar veriyor: Yardımın kapsamını tasarımcıların yazdığı yönergeler sınırlıyor. Kanıt: Erişimi olmayan grupla karşılaştırma; hem araçla alıştırma hem araçsız sınav ölçülmüş.',
 'Neye göre sorusunda, öğrenen hakkında kalıcı bir model tutulup tutulmadığı makalede ayrıca incelenmeli. Kimin için sorusunda da şunu not edelim: Katılımcılar Türkiye’de lise öğrencileri; sonuçların yetişkin öğrenenlere taşınabilirliği ayrıca tartışılmalı.',
 'Bu haftanın görevi, kullandığınız bir dijital öğrenme ürününü Ürün Otopsisi yaprağıyla incelemek ve ilk Uygulama Yaprağınızı yazmak. Bu yaprak, dönem sonunda yazacağınız Tasarım Dosyasının ilk sayfası olacak. Görüşmek üzere.'
]}
]};
