/* XX10 · Hafta 1 · Ders 1A — Akıllı mı, Akıcı mı?  Kaynak: h01_kitap.txt (1.1–1.3) */
window.XXA_DERS = {
id: 'D01', baslik: '1A · Akıllı mı, Akıcı mı?', kunye: 'XX10 · Hafta 1 · Ders 1A',
soyleyis: {"1970’lerin": "bin dokuz yüz yetmişlerin", "Malcolm Knowles": "Malkım Noulz", "Knowles": "Noulz", "Karich": "Karih", "Pashler": "Paşler", "Clow": "Klou", "Aleven": "Alıven"},
sahneler: [

/* 0 — açılış */
{tema: 'koyu', html: `
<div class="ab" style="left:130px;top:250px;width:1500px">
  <div class="kick" data-b="-1" data-fx="fade">Yetişkin Eğitiminde Akıllı ve Uyarlanabilir Öğrenme Sistemleri</div>
  <div class="rule" data-b="-1" data-fx="grow" data-d="0.2" style="width:220px;margin:34px 0 40px"></div>
  <div class="h1" data-b="0" data-fx="up">Akıllı mı, Akıcı mı?</div>
  <div class="lead mute" data-b="0" data-fx="up" data-d="0.5" style="margin-top:28px">Hafta 1 · Ders 1A</div>
  <div class="h3 gold" data-b="1" data-fx="up" style="margin-top:70px;font-style:italic;font-weight:500">Bir sisteme “akıllı” demek için onda neyi aramalıyız?</div>
</div>`,
b: [
 'Merhaba. Yetişkin Eğitiminde Akıllı ve Uyarlanabilir Öğrenme Sistemleri dersinin ilk haftasındayız. Bu ders tek bir soruyla başlıyor: Bir öğrenme sistemine ne zaman akıllı diyebiliriz?',
 'Bugün hemen her eğitim ürünü kendini akıllı ya da yapay zekâ destekli diye tanıtıyor. Bu sözcüklerin arkasını ayırt edemezsek, ürünü değil reklamını değerlendirmiş oluruz.'
]},

/* 1 — vinyet */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">Bir sahneyle başlayalım</div>
<div class="ab" style="left:130px;top:170px;width:1660px">
  <div class="row" style="align-items:flex-start" data-b="0" data-fx="left">
    <div class="av" style="background:var(--acc)">D</div>
    <div class="bubble" style="width:1020px"><div class="who acc">Deniz · ders koordinatörü</div>Firmanın sunumu çok iddialıydı. Sistem her öğrencinin yolunu kendisi belirliyormuş; pilot uygulamada başarı <b>yüzde otuz</b> artmış.</div>
  </div>
  <div class="row" style="align-items:flex-start;justify-content:flex-end;margin-top:30px" data-b="1" data-fx="right">
    <div class="bubble" style="width:1020px"><div class="who nvy">Kerem · öğretim tasarımcısı</div><b>Yüzde otuz neye göre?</b> Karşılaştırma grubu var mıydı, yoksa sistemi gönüllü kullananlarla mı ölçmüşler?</div>
    <div class="av" style="background:var(--navy)">K</div>
  </div>
  <div class="row" style="align-items:flex-start;margin-top:30px" data-b="2" data-fx="left">
    <div class="av" style="background:var(--acc)">D</div>
    <div class="bubble" style="width:1020px">On binlerce öğrencimiz var; hepsine tek tek yetişemiyoruz. Bir şey yapmamız gerek.</div>
  </div>
</div>
<div class="ab chip" style="left:1260px;top:200px;border-color:var(--acc);color:var(--acc)" data-b="3" data-fx="pop">İHTİYAÇ</div>
<div class="ab chip" style="left:150px;top:470px;border-color:var(--navy);color:var(--navy)" data-b="3" data-fx="pop" data-d="0.4">KANIT</div>`,
b: [
 'Bir sahneyle başlayalım. Deniz, açıköğretimde bir giriş dersinin koordinatörü. Bir firmanın sunumundan yeni çıkmış. Sistem her öğrencinin yolunu kendisi belirliyormuş ve pilot uygulamada başarı yüzde otuz artmış.',
 'Öğretim tasarımcısı Kerem’in ilk sorusu şu: Yüzde otuz neye göre? Bir karşılaştırma grubu var mıydı, yoksa sistemi gönüllü kullananlarla mı ölçülmüş?',
 'Deniz’in cevabı da haklı bir yerden geliyor: On binlerce öğrencimiz var, hepsine tek tek yetişemiyoruz. Bir şey yapmamız gerek.',
 'Bu iki ses dersin bütününü taşıyor. Deniz ihtiyacı soruyor, Kerem kanıtı. Bu derste ikisini aynı masaya oturtmayı öğreneceğiz.'
]},

/* 2 — ölçek sorunu */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.1 · Yetişkin eğitiminde ölçek sorunu</div>
<div class="ab" style="left:130px;top:160px;width:800px" data-b="0" data-fx="fade">
  <svg width="700" height="300" viewBox="0 0 700 300">${(function(){var s='';for(var r=0;r<10;r++)for(var c=0;c<28;c++)s+='<circle cx="'+(12+c*24.6)+'" cy="'+(12+r*27.5)+'" r="7" fill="'+((r*28+c)%23===0?'#B8532A':'#2B4A6F')+'" opacity="'+(0.35+((r*7+c*3)%10)/16)+'"/>';return s})()}</svg>
  <div class="row" style="align-items:baseline;gap:18px;margin-top:6px"><span class="num nvy" style="font-size:110px" data-b="0" data-cnt="10000" data-fx="none">0</span><span class="t26 mute" style="white-space:nowrap">öğrenen · aynı ders · aynı dönem</span></div>
</div>
<div class="ab" style="left:960px;top:180px;width:830px" data-b="1" data-fx="right">
  <div class="card" style="padding:34px 40px">
    <div class="t30"><span class="kt" style="display:block">Kuram</span>Öğrenenin deneyimini, hedefini ve hazır oluşunu merkeze alan <b>bireyselleşme</b> ister.</div>
    <div style="height:2px;background:var(--line);margin:24px 0"></div>
    <div class="t30"><span class="kt" style="display:block;color:var(--navy)">Teslim modeli</span>On binlerce yetişkine aynı anda ulaşmak için <b>kitleselleşir</b>.</div>
  </div>
</div>
<div class="ab row" style="left:130px;top:618px;width:1660px">
  <div class="card" style="flex:1" data-b="2" data-fx="up"><div class="kt">1 · Kitlesellik</div><div class="t26">5 dk yorum × 1.000 öğrenen</div><div class="h3 acc" style="margin-top:8px">≈ <span data-b="2" data-cnt="83" data-fx="none" data-d="0.6">0</span> saat</div></div>
  <div class="card" style="flex:1" data-b="3" data-fx="up"><div class="kt">2 · Heterojenlik</div><div class="t26">Yeni mezun ile 20 yıl sonra dönen yan yana: ön bilgi, saat, cihaz, yaşam yükü</div></div>
  <div class="card" style="flex:1" data-b="4" data-fx="up"><div class="kt">3 · Görünmezlik</div><div class="t26">Bırakma bir olay değil, <b>bir sessizliktir</b>.</div></div>
</div>
<div class="ab" style="left:130px;top:618px;width:1660px;height:250px;display:flex;align-items:center;justify-content:center;background:var(--cream)" data-b="5" data-fx="fade">
  <div style="text-align:center"><div class="h2">Akıllı sistemler: <span class="mark">aday</span> bir yanıt</div><div class="t26 mute" style="margin-top:14px">İhtiyacın gerçek olması, önerilen çözümün işe yaradığını göstermez. · <span class="cite">Şenocak, 2020, s. 56</span></div></div>
</div>`,
b: [
 'Deniz’in ihtiyacı nereden geliyor? Açık ve uzaktan öğrenmede bir dersi aynı dönemde on binlerce yetişkin alabilir. Bu ölçekte öğretim elemanının her öğrenenle bire bir ilgilenmesi mümkün değildir.',
 'Oysa yetişkin eğitimi kuramı, öğrenenin deneyimini ve hedefini merkeze alan bir öğretim ister. Gerilim burada: Kuram bireyselleşmeyi talep eder, teslim modeli kitleselleşir.',
 'Bu gerilimin üç bileşeni var. Birincisi kitlesellik. Bir ödevi okuyup üç cümlelik bir yorum yazmak beş dakika sürüyorsa, bin öğrenenli bir derste bu iş seksen saati aşar.',
 'İkincisi heterojenlik. Aynı derste yeni mezun bir öğrenen ile yirmi yıl sonra eğitime dönmüş biri yan yana bulunur; ön bilgileri, saatleri ve yaşam yükleri çok farklıdır.',
 'Üçüncüsü görünmezlik. Çevrimiçi bir derste zorlanan öğrenen çoğu zaman ilk sınava kadar fark edilmez. Dersi bırakan ise çoğu zaman hiç fark edilmez; çünkü bırakma bir olay değil, bir sessizliktir.',
 'Akıllı ve uyarlanabilir sistemler bu boşluğa aday bir yanıt olarak sunuluyor. Aday sözcüğü bilinçli seçildi: İhtiyacın gerçek olması, önerilen çözümün işe yaradığını göstermez.'
]},

/* 3 — andragoji */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.1 · Andragoji: varsayımdan tasarım kararına</div>
<div class="ab card" style="left:130px;top:160px;width:640px" data-b="0" data-fx="left">
  <div class="kt">Tanım</div>
  <div class="h3" style="font-size:44px">Andragoji</div>
  <div class="t26" style="margin-top:12px">Yetişkinlerin öğrenmesine yardım etme sanatı ve bilimi. Kavramı yetişkin eğitimiyle özdeşleştiren: <b>Malcolm Knowles</b>.</div>
  <div class="cite" style="margin-top:16px">Baran, 2024, s. 57</div>
</div>
<div class="ab" style="left:830px;top:160px;width:960px;display:flex;flex-wrap:wrap;gap:16px" data-b="1" data-fx="none">
  <span class="chip" data-b="1" data-fx="pop" data-d="0.4">Benlik → öz-yönelim</span>
  <span class="chip" data-b="1" data-fx="pop" data-d="1.4">Deneyim → kaynak</span>
  <span class="chip" data-b="1" data-fx="pop" data-d="2.4">Hazır oluş → sosyal roller</span>
  <span class="chip" data-b="1" data-fx="pop" data-d="3.6">Yönelim → problem merkezli</span>
  <span class="chip" data-b="1" data-fx="pop" data-d="4.8">Güdü → içsel</span>
  <span class="chip" data-b="1" data-fx="pop" data-d="6.6" style="border-color:var(--gold);color:var(--gold)">+ Bilme ihtiyacı</span>
</div>
<div class="ab" style="left:130px;top:500px;width:1660px">
  <div class="row t22 b gold" style="letter-spacing:.14em;text-transform:uppercase;padding:0 30px" data-b="2" data-fx="fade">
    <div style="width:360px">Varsayım</div><div style="width:520px">Sistemde karşılık gelen veri</div><div style="flex:1">Olası tasarım kararı</div></div>
  <div class="card row t26" style="margin-top:14px;padding:22px 30px" data-b="3" data-fx="up"><div style="width:360px" class="b">Bilme ihtiyacı</div><div style="width:520px">Öğrenenin beyan ettiği hedef</div><div style="flex:1">Her modülün başında amaç ve kullanım bağlamı</div></div>
  <div class="card row t26" style="margin-top:14px;padding:22px 30px" data-b="4" data-fx="up"><div style="width:360px" class="b">Deneyim</div><div style="width:520px">Ön bilgi yoklaması</div><div style="flex:1">Bildiğini gösteren bölümü atlayabilir</div></div>
  <div class="card row t26" style="margin-top:14px;padding:22px 30px" data-b="5" data-fx="up"><div style="width:360px" class="b">Güdülenme</div><div style="width:520px">Devam ve bırakma örüntüleri</div><div style="flex:1">Rozet yerine ilerlemenin anlamlı geri bildirimi</div></div>
</div>
<div class="ab chip" style="left:130px;top:880px;border-color:var(--gold);color:var(--gold);font-size:24px" data-b="6" data-fx="pop">Dikkat: varsayımlar sınanmış yasalar değil, pratiğe yön veren genellemelerdir</div>`,
b: [
 'Yetişkin eğitimi kuramı derken ilk başvurduğumuz kavram andragoji. Andragoji, yetişkinlerin öğrenmesine yardım etme sanatı ve bilimidir. Kavramı yetişkin eğitimiyle özdeşleştiren isim Malcolm Knowles’tır.',
 'Knowles beş varsayım tanımlar. Benlik kavramı öz-yönelime kayar. Deneyim bir kaynağa dönüşür. Hazır oluş sosyal rollere yönelir. Öğrenme problem merkezli olur. Güdü içselleşir. Sonradan bilme ihtiyacı eklenir ve varsayımlar altıya çıkar.',
 'Bu dersin yöntemi, bu varsayımları bir sistem tasarımcısının gözüyle okumaktır. Her varsayım bir veri ihtiyacına ve bir tasarım kararına çevrilebilir.',
 'Örneğin bilme ihtiyacı. Yetişkin neden öğrendiğini bilmek ister. Karşılık gelen veri, öğrenenin beyan ettiği hedeftir; tasarım kararı, her modülün başında amacı ve kullanım bağlamını göstermektir.',
 'Deneyim hem kaynak hem dirençtir. Bir ön bilgi yoklaması yapılır; bildiğini gösteren öğrenen o bölümü atlayabilir.',
 'Güdü ağırlıklı olarak içseldir. Sistem devam ve bırakma örüntülerine bakar; rozet yerine ilerlemenin anlamlı geri bildirimini verir.',
 'Bir uyarı: Bunlar birer öneridir. Andragojinin varsayımları sınanmış yasalar değil, pratiğe yön veren genellemelerdir; eleştirilerini ikinci haftada ele alacağız.'
]},

/* 4 — öğrenen denetimi */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.1 · Öz-yönelim ve öğrenen denetimi</div>
<div class="ab h2" style="left:130px;top:160px;width:1660px;font-size:52px" data-b="0" data-fx="up">“Öğrenene seçim verelim, öğrenme artsın” <span class="mute" style="font-weight:400">— gerçekten mi?</span></div>
<div class="ab" style="left:130px;top:360px;width:1080px;height:330px">
  <div class="t22 mute" data-b="1" data-fx="fade" style="margin-bottom:22px">Öğrenen denetiminin öğrenmeye genel etkisi (meta-analiz)</div>
  <svg width="1080" height="200" viewBox="0 0 1080 200" data-b="1" data-fx="fade">
    <line x1="80" y1="20" x2="80" y2="150" stroke="#1F2A33" stroke-width="2"/>
    <line x1="80" y1="150" x2="1060" y2="150" stroke="#C9BFAE" stroke-width="2"/>
    ${[0,0.2,0.4,0.6,0.8,1.0].map(function(v){var x=80+v*960;return '<line x1="'+x+'" y1="146" x2="'+x+'" y2="160" stroke="#9A9286"/><text x="'+x+'" y="188" text-anchor="middle" font-size="22" fill="#6B6F76">'+String(v.toFixed(1)).replace('.',',')+'</text>'}).join('')}
  </svg>
  <div class="ab hbar" style="left:82px;top:96px;width:48px;background:var(--acc)" data-b="1" data-fx="grow" data-d="1"></div>
  <div class="ab" style="left:150px;top:88px"><span class="num acc" style="font-size:64px" data-b="1" data-fx="none" data-d="1" data-cnt="0.05" data-dec="2" data-pre="g = ">0</span></div>
  <div class="cite ab" style="left:150px;top:170px" data-b="1" data-fx="fade" data-d="1.5">Karich vd., 2014, s. 392</div>
</div>
<div class="ab row" style="left:130px;top:690px;width:1660px;align-items:center" data-b="2" data-fx="up">
  <div class="card" style="flex:1"><div class="kt">Bir değer olarak</div><div class="h3">Öz-yönelim</div></div>
  <div class="h1 acc" style="width:120px;text-align:center">≠</div>
  <div class="card" style="flex:1"><div class="kt" style="color:var(--navy)">Bir öğrenme stratejisi olarak</div><div class="h3">Öğrenen denetimi</div></div>
</div>`,
b: [
 'Andragoji, yetişkinin kendi öğrenmesine yön vermek istediğini söyler. Buradan, öğrenene seçim hakkı tanıyan sistemlerin daha etkili olacağı sonucu çıkar gibi görünür.',
 'Karich ve arkadaşlarının eğitim teknolojilerinde öğrenen denetimine ilişkin meta-analizi bu beklentiyi sınar. Öğrenene denetim vermenin genel etkisi neredeyse sıfırdır: g eşittir sıfır virgül sıfır beş.',
 'Bu bulgu andragojiyi çürütmez. Ama şunu gösterir: Bir değer olarak öz-yönelim ile bir öğrenme stratejisi olarak öğrenen denetimi aynı şey değildir. Üçüncü haftada bu ayrıma geri döneceğiz.'
]},

/* 5 — personalar ve aynı veri */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.1 · Persona ve “aynı veri, iki öğrenen”</div>
<div class="ab row" style="left:130px;top:170px;width:1660px">
  ${[['Çalışan öğrenen','Vardiyalı; gece geç saatler, 20–30 dakikalık aralıklar','var(--navy)'],['Ebeveyn öğrenen','İki küçük çocuk; planlanan çalışma sık kesiliyor','var(--green)'],['Eğitime dönen öğrenen','Yirmi yıl sonra; ön bilgi dağınık, özgüven düşük','var(--purp)'],['Düşük dijital yeterlik','Erişebiliyor ama gezinmekte zorlanıyor; işlerinin çoğu telefondan','var(--acc)']].map(function(p,i){return '<div class="card" style="flex:1;border-top:8px solid '+p[2]+'" data-b="0" data-fx="up" data-d="'+(0.3+i*0.35)+'" data-o="3" data-hl="1" data-hd="'+(i*1.6)+'" data-hlo="'+(i<3?1:2)+'" data-hlod="'+(i*1.6+1.6)+'"><div class="h3" style="font-size:34px">'+p[0]+'</div><div class="t26" style="margin-top:12px">'+p[1]+'</div></div>'}).join('')}
</div>
<div class="ab card" style="left:1250px;top:560px;width:540px;border:3px solid var(--acc)" data-b="2" data-fx="pop" data-o="3">
  <div class="kt">Uyarı</div><div class="t26">Analitik onu “düşük katılımlı” sanabilir; oysa sorun <b>arayüzdedir</b>.</div>
</div>
<div class="ab" style="left:130px;top:170px;width:1660px" data-b="3" data-fx="fade">
  <div class="card" style="padding:0;overflow:hidden">
    <div class="t22 b mute" style="padding:18px 34px;background:#F4EFE5;letter-spacing:.12em;text-transform:uppercase">Ders panosu · son 7 gün</div>
    ${[['Öğrenen A','Videoları vardiya değişince indirip yolda izliyor; sistem indirmeyi görmüyor.','Mesaj gereksiz'],['Öğrenen B','İlk deneme sınavında başarısız; dersi bırakmayı düşünüyor.','Mesaj yetersiz']].map(function(r,i){return '<div class="row" style="align-items:center;padding:26px 34px;border-top:1px solid var(--line)"><div style="width:42px;height:42px;border-radius:50%;background:var(--red)"></div><div class="h3" style="width:260px;font-size:34px">'+r[0]+'</div><div class="t26 mute" style="width:300px">Video açma: 0</div><div class="t26" style="flex:1" data-b="4" data-fx="right" data-d="'+(i*3.2)+'">'+r[1]+'</div><div class="chip" style="font-size:22px;border-color:var(--acc);color:var(--acc)" data-b="5" data-fx="pop" data-d="'+(i*1.6)+'">“Sizi özledik” → '+r[2]+'</div></div>'}).join('')}
  </div>
</div>
<div class="ab" style="left:130px;top:690px;width:1660px;text-align:center" data-b="5" data-fx="up" data-d="3.6">
  <div class="h2">Veri aynı, ihtiyaç farklı.</div>
  <div class="lead" style="margin-top:14px">Sistem çoğu zaman öğrenenin bir <b>özelliğini</b> değil, içinde bulunduğu <span class="mark">koşulu</span> ölçer.</div>
</div>`,
b: [
 'Varsayımları somutlaştırmanın bir yolu personadır: tasarımın hangi öğrenen için yapıldığını görünür kılan kurgusal bir profil. Dört persona kullanacağız.',
 'Vardiyalı çalışan öğrenen. Küçük çocuklu ebeveyn öğrenen. Yirmi yıl sonra eğitime dönen öğrenen. Ve sisteme erişebildiği hâlde gezinmekte zorlanan, işlerinin çoğunu telefondan yapan öğrenen.',
 'Dördüncü persona önemli bir uyarı taşır. Analitik onu düşük katılımlı sanabilir; oysa sorun güdüde değil, arayüzdedir.',
 'Şimdi bir panoya bakalım. İki öğrenen de bir haftadır ders videolarını açmamış. Panoda ikisi de aynı kırmızı noktayla görünüyor.',
 'Birincisi vardiya değiştirdiği için videoları indirip yolda izliyor; sistem indirmeyi görmüyor. İkincisi ilk deneme sınavında başarısız olmuş ve dersi bırakmayı düşünüyor.',
 'Birincisine gönderilecek sizi özledik mesajı gereksiz, ikincisine gönderilecek aynı mesaj ise yetersizdir. Veri aynı, ihtiyaç farklı. Kısacası sistem çoğu zaman öğrenenin bir özelliğini değil, içinde bulunduğu koşulu ölçer.'
]},

/* 6 — beş terim beş soru */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.2 · Beş terim, beş soru</div>
<div class="ab h2" style="left:130px;top:150px;width:1660px" data-b="0" data-fx="up">Her terim <span class="gold">farklı bir soru</span> sorar.</div>
<div class="ab col" style="left:130px;top:280px;width:1660px;gap:16px">
  ${[['Zeki öğretim sistemi','Öğrencinin şu anki adımına bire bir nasıl müdahale ederim?',1,'Yanlış çekimlenmiş fiilde hangi ipucu?'],['Uyarlanabilir öğrenme','İçeriği, sırayı ve zorluğu kime göre, nasıl değiştiririm?',2,'Geçmiş zamanı öğrendiyse sıradaki ünite?'],['Öğrenme analitiği','Etkileşim verisinden ne öğrenir, kime ne raporlarım?',3,'Üç gündür girmeyenler kime gösteriliyor?'],['Eğitsel veri madenciliği','Verideki örüntüler nelerdir?',4,'Bırakanlar hangi alıştırmada takılmış?'],['YZ destekli sistemler','Hangi işlev bir modele devredilebilir?',4,'Serbest metne anında açıklamalı geri bildirim?']].map(function(r,i){return '<div class="card row" style="padding:14px 30px;align-items:center" data-b="'+r[2]+'" data-fx="left" data-d="'+(i===4?5.5:0)+'"'+(i===0||i===2?' data-hl="5" data-hd="'+(i?6:0)+'"':'')+'><div class="h3" style="width:440px;font-size:32px">'+r[0]+'</div><div class="t26" style="flex:1">'+r[1]+'</div><div class="t22 gold" style="width:500px;font-style:italic" data-b="5" data-fx="fade" data-d="'+(i*2.5)+'">Dil uygulaması: '+r[3]+'</div></div>'}).join('')}
</div>
<div class="ab cite" style="left:130px;top:890px" data-b="3" data-fx="fade">Öğrenme analitiği tanımı: Long ve Siemens, 2011, s. 34 · Uyarlanabilir öğrenme ortamı: Luckin vd., 2016, s. 18</div>`,
b: [
 'Aynı ürün bazen akıllı, bazen uyarlanabilir, bazen yapay zekâ destekli diye anılır. Terimler karıştığında sistemin ne yaptığı görünmez olur. Beş terimi tek bir ölçütle ayıracağız: Her terim farklı bir soru sorar.',
 'Zeki öğretim sistemi, öğrencinin o anki adımına bire bir nasıl müdahale edileceğini sorar.',
 'Uyarlanabilir öğrenme, içeriğin, sıranın ve zorluğun kime göre ve nasıl değişeceğini sorar.',
 'Öğrenme analitiği, etkileşim verisinden ne öğrenilebileceğini ve kime ne raporlanacağını sorar.',
 'Eğitsel veri madenciliği, verideki örüntülerin neler olduğunu sorar. Yapay zekâ destekli sistemler ise, özellikle üretken modellerle birlikte, hangi işlevin bir modele devredilebileceğini sorar.',
 'Bir dil uygulaması düşünün. Yanlış çekimlenmiş fiilde hangi ipucu verilir? Bu bir zeki öğretim sorusu. Üç gündür giriş yapmayanlar kime gösteriliyor? Bu bir analitik sorusu. Alanlar örtüşür; amaç ürünleri kutulara koymak değil, hangi soruyu sorduğumuzu netleştirmektir.'
]},

/* 7 — akıllı ölçütü */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.2 · Bir sisteme “akıllı” demek için ne gerekir?</div>
<div class="ab row" style="left:130px;top:170px;width:1660px">
  <div class="card" style="flex:1;position:relative" data-b="0" data-fx="up" data-d="0.8"><div class="kt">Cevap 1</div><div class="h3" style="font-size:36px;position:relative">Uyarlama yapıyorsa<div class="strike" data-b="1" data-fx="strike" data-d="4"></div></div><div class="t26 mute" style="margin-top:10px">Sabit dallanma kuralı da uyarlar; 1970’lerin sistemleri bunu yapıyordu.</div></div>
  <div class="card" style="flex:1;position:relative" data-b="0" data-fx="up" data-d="1.3" data-hl="3"><div class="kt">Cevap 2</div><div class="h3" style="font-size:36px">Öğrenen hakkında bir temsil taşıyorsa</div><div class="t26 mute" style="margin-top:10px">Güncellenen ve kararlara dayanak olan bir model.</div></div>
  <div class="card" style="flex:1;position:relative" data-b="0" data-fx="up" data-d="1.8"><div class="kt">Cevap 3</div><div class="h3" style="font-size:36px;position:relative">Akıcı konuşuyorsa<div class="strike" data-b="2" data-fx="strike" data-d="5"></div></div><div class="t26 mute" style="margin-top:10px">Akıcılık bir arayüz niteliğidir, öğrenen modeli değil.</div></div>
</div>
<div class="ab" style="left:130px;top:520px;width:1660px;text-align:center" data-b="3" data-fx="up" data-o="4">
  <div class="h2">Akıllı = öğrenen hakkında <span class="mark">açıkça tanımlanmış, güncellenen</span> ve <span class="mark">kararlara dayanak olan</span> bir temsil</div>
</div>
<div class="ab row" style="left:130px;top:520px;width:1660px;align-items:stretch" data-b="4" data-fx="up">
  <div class="card" style="width:560px;text-align:center;position:relative"><div class="kt">“Öğrenme stili”ne göre uyarlama</div><div class="row" style="justify-content:center;gap:18px;margin-top:10px"><span class="chip">Görsel</span><span class="chip">İşitsel</span></div><div class="h1 red" style="position:absolute;right:30px;bottom:14px;font-size:80px">✗</div></div>
  <div class="card" style="flex:1"><div class="t26">Uygun desenle sınanan çok az çalışma; birçoğu iddiayla çelişiyor. Genel uygulamaya katmayı haklı çıkaracak <b>yeterli kanıt yok</b>.</div><div class="cite" style="margin-top:12px">Pashler vd., 2008, s. 105</div></div>
</div>
<div class="ab lead" style="left:130px;top:790px;width:1660px;text-align:center" data-b="5" data-fx="up">Uyarlanabilir ≠ akıllı. Sor: <b>hangi özelliğe göre</b> uyarlıyor ve bu özelliğin <b>öğrenmeyle ilişkisi</b> gösterilmiş mi?</div>`,
b: [
 'Şimdi dersin ilk temel sorusuna dönebiliriz. Bir sisteme akıllı demek için ne gerekir? Üç olası cevap var.',
 'Birinci cevap: Sistem uyarlama yapıyorsa akıllıdır. Ama sabit bir dallanma kuralı da uyarlama yapar ve bunu 1970’lerin bilgisayar destekli öğretim sistemleri zaten yapıyordu.',
 'Üçüncü cevap: Sistem akıcı ve insana benzer konuşuyorsa akıllıdır. Üretken yapay zekâ çağında en kolay karıştırılan cevap budur. Akıcılık bir arayüz niteliğidir; bir öğrenen modeli değildir.',
 'Bu ders ikinci cevabı esas alır: Bir sistemin akıllı sayılması için öğrenen hakkında açıkça tanımlanmış, güncellenen ve kararlarına dayanak olan bir temsil taşıması gerekir.',
 'Ama temsil, neyi temsil ettiğine göre değer kazanır. Eski bir vaat, öğretimi öğrenme stiline göre uyarlamaktır. Pashler ve arkadaşları bu iddiayı uygun desenle sınayan çok az çalışma bulmuş ve öğrenme stillerini uygulamaya katmayı haklı çıkaracak yeterli kanıt olmadığı sonucuna varmıştır.',
 'Yani öğrenenleri görsel ve işitsel diye etiketleyen bir sistem uyarlanabilirdir, ama akıllı değildir. Sorulacak soru şu: Sistem öğrenenin hangi özelliğine göre uyarlıyor ve bu özelliğin öğrenmeyle ilişkisi gösterilmiş mi?'
]},

/* 8 — mimari */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.3 · Klasik mimari: dört bileşen</div>
<svg class="ab" style="left:0;top:0" width="1920" height="1080" viewBox="0 0 1920 1080">
  <g stroke="#D9A441" stroke-width="3" fill="none" opacity=".8">
    <path d="M590 290 L800 420" pathLength="1" data-b="3" data-fx="draw"/>
    <path d="M590 600 L800 470" pathLength="1" data-b="3" data-fx="draw" data-d="0.3"/>
    <path d="M1180 445 L1360 445" pathLength="1" data-b="3" data-fx="draw" data-d="0.6"/>
    <path d="M1570 530 C1570 800 560 820 380 690" pathLength="1" data-b="3" data-fx="draw" data-d="5" data-du="2"/>
  </g>
  <text x="1000" y="800" fill="#D9A441" font-size="24" text-anchor="middle" data-b="3" data-fx="fade" data-d="6.5">etkileşim verisi</text>
</svg>
<div class="ab card" style="left:130px;top:200px;width:460px" data-b="0" data-fx="pop" data-d="0.6" data-hl="1" data-hlo="2"><div class="kt">Alan modeli</div><div class="t26">Kavramlar, kurallar, problem çözme stratejileri</div><div class="bos" data-hl="4" data-hd="3" style="position:absolute;inset:0;border-radius:20px;pointer-events:none"></div></div>
<div class="ab card" style="left:130px;top:520px;width:460px" data-b="0" data-fx="pop" data-d="1.0" data-hl="2" data-hlo="3"><div class="kt">Öğrenen modeli</div><div class="t26">Bilgi düzeyi, hatalar, öğrenme süreci</div><div class="bos" data-hl="4" data-hd="3" style="position:absolute;inset:0;border-radius:20px;pointer-events:none"></div></div>
<div class="ab card" style="left:800px;top:360px;width:380px" data-b="0" data-fx="pop" data-d="1.4" data-hl="3" data-hlo="4"><div class="kt">Pedagojik model</div><div class="t26">Müdahale: ne zaman, nasıl?</div></div>
<div class="ab card" style="left:1360px;top:360px;width:420px" data-b="0" data-fx="pop" data-d="1.8" data-hl="3" data-hd="5" data-hlo="4"><div class="kt">Arayüz</div><div class="t26">Etkileşim ve veri üretimi</div></div>
<div class="ab row" style="left:130px;top:720px;width:1660px;gap:16px">
  <span class="chip" style="font-size:24px" data-b="2" data-fx="up" data-d="3" data-o="3">1 · Veri topla</span>
  <span class="chip" style="font-size:24px" data-b="2" data-fx="up" data-d="5" data-o="3">2 · Temsil oluştur</span>
  <span class="chip" style="font-size:24px" data-b="2" data-fx="up" data-d="7.5" data-o="3">3 · Tanıla, strateji seç</span>
</div>
<div class="ab card" style="left:1250px;top:150px;width:540px;border:2px solid var(--gold)" data-b="4" data-fx="pop" data-d="3"><div class="kt">LLM tabanlı araçların çoğu</div><div class="t22">Güçlü arayüz, akıcı pedagojik izlenim; alan ve öğrenen modeli zayıf ya da örtük → <b class="gold">akıllı değil, akıcı</b></div></div>
<div class="ab cite" style="left:130px;top:880px" data-b="0" data-fx="fade">Nkambou vd., 2010, s. 1–4 · Luckin vd., 2016, s. 18</div>
`,
b: [
 'Peki öğrenen temsili sistemin neresinde durur? Zeki öğretim sistemlerinin klasik mimarisi dört bileşenden oluşur.',
 'Alan modeli, öğrenilecek alanın kavramlarını, kurallarını ve problem çözme stratejilerini taşır. Öğrencinin performansını değerlendirmek için bir ölçüt işlevi görür.',
 'Öğrenen modeli sistemin çekirdeğidir. Üç işlevi vardır: öğrenen hakkında veri toplamak, bu veriyle öğrenenin bilgisinin bir temsilini oluşturmak ve bu temsil üzerinden tanı koyup en uygun öğretim stratejisini seçmek.',
 'Pedagojik model, alan ve öğrenen modellerinden girdi alarak müdahale kararlarını verir: Müdahale edilecek mi, ne zaman ve nasıl? Arayüz ise etkileşimin gerçekleştiği ve verinin üretildiği yüzeydir.',
 'Büyük dil modeli tabanlı araçların çoğunda arayüz güçlü, pedagojik model akıcı görünür; ama alan ve öğrenen modeli zayıf ya da örtüktür. İlk sorunuz şu olmalı: Öğrenen modeli nerede tutuluyor ve ne sıklıkla güncelleniyor? Cevap veremeyen ürün akıllı değil, akıcıdır.'
]},

/* 9 — zaman ölçekleri */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">1.3 · Uyarlanabilirlik ızgarası: üç zaman ölçeği</div>
<div class="ab lead" style="left:130px;top:150px;width:1660px" data-b="0" data-fx="up">Sütunlar <b>neyin</b>, satırlar <b>neye göre</b> uyarlandığını gösterir. <span class="cite">Aleven vd., 2017, s. 525–526</span></div>
<svg class="ab" style="left:130px;top:262px" width="1660" height="60" viewBox="0 0 1660 60"><path d="M10 30 H1630" stroke="#1F2A33" stroke-width="3" pathLength="1" data-b="0" data-fx="draw" data-d="1"/><path d="M1610 16 L1640 30 L1610 44" fill="none" stroke="#1F2A33" stroke-width="3" data-b="0" data-fx="fade" data-d="2.2"/></svg>
<div class="ab t22 mute b" style="left:130px;top:330px;letter-spacing:.12em" data-b="0" data-fx="fade" data-d="1">EN YAVAŞ</div>
<div class="ab t22 mute b" style="left:1660px;top:330px;letter-spacing:.12em" data-b="0" data-fx="fade" data-d="2">EN HIZLI</div>
<div class="ab row" style="left:130px;top:390px;width:1660px">
  <div class="card" style="flex:1;border-top:8px solid var(--gold)" data-b="1" data-fx="up" data-hl="4"><div class="kt">Tasarım döngüsü</div><div class="t26 b">Tasarımcı · iki sürüm arasında, veriye bakarak</div><div class="t26 mute" style="margin-top:14px">Geçen dönem öğrenenlerin %40’ının takıldığı ünite bu dönem iki kısa modüle bölünür.</div></div>
  <div class="card" style="flex:1;border-top:8px solid var(--navy)" data-b="2" data-fx="up"><div class="kt" style="color:var(--navy)">Görev döngüsü</div><div class="t26 b">Sistem · bir görev bittiğinde</div><div class="t26 mute" style="margin-top:14px">Ön bilgi yoklamasında başarılı olan, giriş modülünü atlayıp uygulama görevine geçer.</div></div>
  <div class="card" style="flex:1;border-top:8px solid var(--acc)" data-b="3" data-fx="up"><div class="kt">Adım döngüsü</div><div class="t26 b">Sistem · öğrenenin her eyleminde</div><div class="t26 mute" style="margin-top:14px">Yanlış girilen değere hatanın türüne göre ipucu verilir.</div></div>
</div>
<div class="ab h3" style="left:130px;top:800px;width:1660px" data-b="4" data-fx="up" data-d="1">Tasarım döngüsü de bir uyarlamadır: geçen dönemin verisiyle dersi yeniden tasarlamak.</div>`,
b: [
 'Mimari, uyarlamanın hangi zaman ölçeğinde yapıldığını söylemez. Aleven ve arkadaşlarının uyarlanabilirlik ızgarasında sütunlar neyin, satırlar neye göre uyarlandığını gösterir. Zaman ölçekleri en yavaştan en hızlıya üç döngüdür.',
 'En yavaş döngü tasarım döngüsüdür. Kararı tasarımcı, iki sürüm arasında, toplanan veriye bakarak verir. Örneğin geçen dönem öğrenenlerin yüzde kırkının takıldığı ünite, bu dönem iki kısa modüle bölünür.',
 'Görev döngüsünde sistem, bir görev bittiğinde sıradakini seçer. Ön bilgi yoklamasında başarılı olan öğrenen giriş modülünü atlayıp doğrudan uygulama görevine geçer.',
 'Adım döngüsünde ise sistem, öğrenenin her eylemine anında tepki verir. Bir hesaplama adımında yanlış girilen değere, hatanın türüne göre ipucu gelir.',
 'Kurumlar için önemli bir fırsat: Tasarım döngüsü de bir uyarlamadır. Pahalı bir sistem kurmadan da, geçen dönemin verisine bakıp dersi yeniden tasarlamak bir uyarlamadır.'
]},

/* 10 — uyarlama döngüsü */
{tema: 'koyu', html: `
<div class="kick" data-b="-1" data-fx="fade">1.3 · Uyarlama döngüsü: bir erken uyarı paneli</div>
<svg class="ab" style="left:0;top:0" width="1920" height="1080" viewBox="0 0 1920 1080">
  <circle cx="600" cy="565" r="265" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="3" pathLength="1" data-b="0" data-fx="draw" data-du="2"/>
  <path d="M 600 300 A 265 265 0 1 1 348 483" fill="none" stroke="#D9A441" stroke-width="7" pathLength="1" data-b="3" data-fx="draw" data-du="2.4" data-d="0.5"/>
</svg>
<div class="ab" style="left:552px;top:252px" data-b="1" data-fx="pop" data-d="0"><div class="av" style="background:#3A4C5A;color:#fff">1</div></div>
<div class="ab" style="left:450px;top:145px;width:300px;text-align:center" data-b="1" data-fx="fade" data-d="0.3"><div class="h3" style="font-size:30px">Ölçme</div><div class="t22 mute">Oturum sayısı, deneme sınavı</div></div>
<div class="ab" style="left:804px;top:435px" data-b="1" data-fx="pop" data-d="4.5"><div class="av" data-hl="4" data-hd="5" style="background:#3A4C5A;color:#fff">2</div></div>
<div class="ab" style="left:907px;top:424px;width:260px;text-align:left" data-b="1" data-fx="fade" data-d="4.8"><div class="h3" style="font-size:30px">Modelleme</div><div class="t22 mute">Risk puanı</div></div>
<div class="ab" style="left:708px;top:731px" data-b="2" data-fx="pop" data-d="0"><div class="av" style="background:#3A4C5A;color:#fff">3</div></div>
<div class="ab" style="left:670px;top:826px;width:300px;text-align:center" data-b="2" data-fx="fade" data-d="0.3"><div class="h3" style="font-size:30px">Karar</div><div class="t22 mute">Eşik üstüne destek mesajı</div></div>
<div class="ab" style="left:396px;top:731px" data-b="2" data-fx="pop" data-d="3.5"><div class="av" style="background:#3A4C5A;color:#fff">4</div></div>
<div class="ab" style="left:230px;top:826px;width:300px;text-align:center" data-b="2" data-fx="fade" data-d="3.8"><div class="h3" style="font-size:30px">Müdahale</div><div class="t22 mute">Telefonda mesaj</div></div>
<div class="ab" style="left:300px;top:435px" data-b="3" data-fx="pop" data-d="0"><div class="av" style="background:var(--gold);color:#1F2A33">5</div></div>
<div class="ab" style="left:33px;top:424px;width:260px;text-align:right" data-b="3" data-fx="fade" data-d="0.3"><div class="h3" style="font-size:30px">Değerlendirme</div><div class="t22 mute">Alan / almayan karşılaştırması</div></div>

<div class="ab col" style="left:1180px;top:200px;width:610px">
  <div class="card" data-b="3" data-fx="right" data-d="3"><div class="kt">Clow, 2012, s. 134</div><div class="t26">Kilit adım: <b class="gold">döngüyü kapatmak</b>.</div></div>
  <div class="card" data-b="4" data-fx="right"><div class="kt">5. aşama yoksa</div><div class="t26">Kurum yalnızca bir <b>pano</b> kurmuştur; işe yarayıp yaramadığını bilmez.</div></div>
  <div class="card" data-b="4" data-fx="right" data-d="5"><div class="kt">Aynı kırmızı nokta, iki öğrenen</div><div class="t26">Sorun 2. aşamada: <b>modelleme</b>.</div></div>
</div>
`,
b: [
 'Son olarak uyarlamanın adım adım nasıl yürüdüğüne bakalım. Beş aşamalı döngüyü bir erken uyarı sistemi üzerinden izleyelim.',
 'Ölçme: Sistem öğrenenlerin oturum sayısını ve deneme sınavı sonuçlarını kaydeder. Modelleme: Bu kayıtlar her öğrenen için bir risk puanına çevrilir.',
 'Karar: Puanı eşiğin üzerindeki öğrenenlere destek mesajı gönderilmesine karar verilir. Müdahale: Öğrenen telefonunda bir mesaj görür.',
 'Ve değerlendirme: Dönem sonunda mesaj alanların dersi tamamlama oranı, benzer risk puanına sahip olup mesaj almayanlarla karşılaştırılır. Clow’un vurguladığı gibi kilit adım, döngüyü kapatmaktır.',
 'Beşinci aşama yapılmadıysa kurum yalnızca bir pano kurmuştur; işe yarayıp yaramadığını bilmemektedir. Ve hatırlayın: Aynı kırmızı nokta iki farklı öğreneni gösterebiliyorsa sorun ikinci aşamada, yani modellemededir.'
]},

/* 11 — kapanış */
{tema: 'acik', html: `
<div class="kick" data-b="-1" data-fx="fade">Toparlarken</div>
<div class="ab col" style="left:130px;top:170px;width:1660px;gap:20px">
  <div class="card row" style="align-items:center" data-b="0" data-fx="left" data-d="1.5"><div class="num acc" style="font-size:80px;width:110px">1</div><div class="h3">Sistem <b>neyi</b> uyarlıyor ve hangi zaman ölçeğinde?</div></div>
  <div class="card row" style="align-items:center" data-b="0" data-fx="left" data-d="5"><div class="num acc" style="font-size:80px;width:110px">2</div><div class="h3"><b>Neye göre</b> uyarlıyor; bu özelliğin öğrenmeyle ilişkisi var mı?</div></div>
  <div class="card row" style="align-items:center" data-b="0" data-fx="left" data-d="9"><div class="num acc" style="font-size:80px;width:110px">3</div><div class="h3">Karar <b>mimarinin neresinde</b>, hangi bileşende veriliyor?</div></div>
</div>
<div class="ab" style="left:130px;top:740px;width:1660px" data-b="1" data-fx="up" data-d="6">
  <div class="rule" style="width:160px;margin-bottom:22px"></div>
  <div class="t30">Sıradaki ders · <b>1B Vaat ile Kanıt Arasında</b> — “Bu sistem işe yarıyor” cümlesi için elimizde en az ne olmalı?</div>
</div>`,
b: [
 'Bu dersi üç soruyla toparlayalım. Sistem neyi uyarlıyor ve hangi zaman ölçeğinde? Neye göre uyarlıyor ve bu özelliğin öğrenmeyle ilişkisi var mı? Ve uyarlama kararı mimarinin neresinde, hangi bileşen tarafından veriliyor?',
 'Bir sistemi akıllı kılan akıcılığı değil, öğrenen hakkında taşıdığı ve kararlarına yansıyan temsildir. Bir sonraki derste vaatten kanıta geçeceğiz: Bu sistem işe yarıyor cümlesini kurmak için elimizde en az ne olmalı? Görüşmek üzere.'
]}
]};
