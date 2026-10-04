/* XX10 akıllı katman — ortak ayar (öğrenci sayfası ve öğretmen paneli aynı dosyayı kullanır).
   Öğrenen modeli: yedi boyut. Her teslimde öğretmen (isterse dil modeli taslağıyla) her boyuta bir düzey verir.
   Düzeyler not değildir; öğrencinin Tasarım Dosyasında bu düşünme biçimini ne ölçüde kullandığını gösterir. */
window.XX10_AKILLI = {
  ders: 'XX10',
  eposta: 'hidirkaraduman@anadolu.edu.tr',
  /* Google Apps Script web uygulaması adresi (…/exec). Kurulumdan sonra buraya yazılır. */
  sunucu: '',
  surum: 1,
  duzeyler: [
    {k: 0, ad: 'Henüz görünmüyor', kisa: 'Henüz'},
    {k: 1, ad: 'Gelişiyor', kisa: 'Gelişiyor'},
    {k: 2, ad: 'Yerinde', kisa: 'Yerinde'}
  ],
  boyutlar: [
    {id: 'B1', ad: 'Somut bağlam', aciklama: 'Öğrenen grubu ve takılma anı gerçek bir program, kurum ya da oturum üzerinden anlatılıyor.'},
    {id: 'B2', ad: 'Kuramdan karara', aciklama: 'Yetişkin öğrenmeye ilişkin bir varsayım, gerekçeli bir tasarım kararına çevriliyor.'},
    {id: 'M1', ad: 'Ne?', aciklama: 'Neyin, hangi zaman ölçeğinde (tasarım, görev, adım) uyarlanacağı açık.'},
    {id: 'M2', ad: 'Neye göre?', aciklama: 'Uyarlamanın dayandığı veri belirli; verinin öğrenenin özelliğini mi koşulunu mu gösterdiği düşünülmüş.'},
    {id: 'M3', ad: 'Kim karar veriyor?', aciklama: 'Kararı kimin verdiği ve hangi otomasyon düzeyinde verildiği gerekçelendirilmiş.'},
    {id: 'M4', ad: 'Kanıt?', aciklama: 'İşe yaradığını neyle karşılaştırarak, neyi ölçerek anlayacağı yazılmış.'},
    {id: 'M5', ad: 'Kimin için, nereye kadar?', aciklama: 'Kimde işe yarayıp kimde yaramayabileceği ve tasarımın sınırları düşünülmüş.'}
  ],
  haftalar: {
    1: {
      uy: 'UY1', baslik: 'Öğrenen Grubu ve Takılma Anı', hedefKelime: 400,
      yonerge: 'Dönem boyunca yazacağınız on iki yaprak üst üste birikerek Tasarım Dosyanıza dönüşür. Bu ilk yaprakta seçtiğiniz grup, sonraki bütün kararların zeminidir. Grup ne kadar somutsa sonraki haftalar o kadar kolay ilerler.',
      alanlar: [
        {id: 'grup', bas: '1 · Tasarım yapacağım yetişkin öğrenen grubu', ipucu: 'Kim? Kaç kişi? Hangi kurumda, hangi programda ya da hangi bağlamda (örgün, açık ve uzaktan, işyeri, sivil toplum, müze, halk eğitimi)?', satir: 4, boyut: ['B1']},
        {id: 'takilma', bas: '2 · Takılma anı', ipucu: 'Bu grubun tipik olarak takıldığı bir anı somut olarak yazın: ne zaman, hangi içerikte, hangi koşulda?', satir: 4, boyut: ['B1']},
        {id: 'veri', bas: '3 · Bir sistem bunu fark edebilir miydi?', ipucu: 'Takılmayı hangi veri gösterirdi? Bu veri öğrenenin bir özelliğini mi, içinde bulunduğu koşulu mu yansıtır?', satir: 4, boyut: ['M2']},
        {id: 'and_varsayim', bas: '4 · Andragoji bağlantısı: seçtiğim varsayım', ipucu: 'Bilme ihtiyacı, benlik kavramı, deneyim, hazır oluş, öğrenme yönelimi ya da güdülenme.', satir: 1, boyut: ['B2']},
        {id: 'and_anlam', bas: '4 · Grubum için anlamı', ipucu: 'Bu varsayım sizin grubunuzda nasıl görünüyor?', satir: 2, boyut: ['B2']},
        {id: 'and_karar', bas: '4 · Bir tasarım kararı', ipucu: 'Bu varsayımdan hangi tasarım kararı çıkıyor?', satir: 2, boyut: ['B2']},
        {id: 'm1', bas: '5 · Ne uyarlanmalı?', ipucu: 'Bir cümle: içerik mi, sıra mı, zorluk mu, geri bildirim mi? Hangi zaman ölçeğinde?', satir: 2, boyut: ['M1']},
        {id: 'm2', bas: '5 · Neye göre?', ipucu: 'Bir cümle: hangi veriye ya da öğrenen özelliğine dayanarak?', satir: 2, boyut: ['M2']},
        {id: 'm3', bas: '5 · Kararı kim vermeli?', ipucu: 'Bir cümle: kural mı, model mi, öğretmen mi, öğrenen mi? Hangi otomasyon düzeyi?', satir: 2, boyut: ['M3']},
        {id: 'm4', bas: '5 · İşe yaradığını neyle anlarız?', ipucu: 'Bir cümle: neyle karşılaştırarak, neyi ölçerek?', satir: 2, boyut: ['M4']},
        {id: 'm5', bas: '5 · Kimin için, hangi sınırla?', ipucu: 'Bir cümle: kimde işe yaramayabilir, sınırı ne?', satir: 2, boyut: ['M5']},
        {id: 'bilmedigim', bas: '6 · Bu aşamada bilmediğimi bildiğim üç şey', ipucu: 'Dönem ilerledikçe dönüp bakacağınız sorular.', satir: 3, boyut: []}
      ],
      kontrol: [
        'Grubum somut: bir program, bir ders ya da bir bağlam adı var.',
        'Takılma anı tek bir öğrenenin tek bir oturumu üzerinden anlatılabiliyor.',
        'Dördüncü mercek sorusuna verdiğim cevap bir karşılaştırma içeriyor.',
        'Veri ile öğrenen özelliği arasındaki farkı düşündüm.'
      ],
      /* Öneri kuralları: boyut düzeyi 'Yerinde'nin altındaysa bu kaynaklar önerilir (görev döngüsü). */
      oneriler: {
        B1: [{id: 'b1a', ad: '1.1 · Dört yetişkin öğrenen personası (Tablo 1.2)', yol: 'pdf/1.1_Yetiskin_Egitiminde_Olcek_Sorunu.pdf', is: 'Grubunuzu personalardan birine benzetin; benzemediği yeri bir cümleyle yazın.'}],
        B2: [{id: 'b2a', ad: '1.1 · Andragojinin varsayımlarından tasarım kararlarına (Tablo 1.1)', yol: 'pdf/1.1_Yetiskin_Egitiminde_Olcek_Sorunu.pdf', is: 'Tablodaki bir satırı kendi grubunuz için yeniden yazın.'}],
        M1: [{id: 'm1a', ad: '1.3 · Uyarlamanın üç zaman ölçeği (Tablo 1.5)', yol: 'pdf/1.3_Mimari_ve_Uyarlama_Dongusu.pdf', is: 'Önerinizi tasarım, görev ya da adım döngüsünden birine yerleştirin.'}],
        M2: [{id: 'm2a', ad: '1.1 · Aynı veri, iki farklı öğrenen', yol: 'pdf/1.1_Yetiskin_Egitiminde_Olcek_Sorunu.pdf', is: 'Seçtiğiniz verinin iki farklı nedeni olabilecek bir örneğini yazın.'},
             {id: 'm2b', ad: '1.2 · Ölçülebilen ile anlamlı olan aynı şey değildir', yol: 'pdf/1.2_Bes_Terim_Bes_Soru.pdf', is: 'Dayandığınız özelliğin öğrenmeyle ilişkisini bir cümleyle gerekçelendirin.'}],
        M3: [{id: 'm3a', ad: '1.5 · Altı otomasyon düzeyi (Tablo 1.9)', yol: 'pdf/1.5_Denetim_Riskler_ve_Elestirel_Okuma.pdf', is: 'Kararınızı bir düzeye yerleştirin ve neden daha yüksek olmadığını yazın.'}],
        M4: [{id: 'm4a', ad: '1.4 · Etkililik bulguları: büyüklük ve koşul (Tablo 1.8)', yol: 'pdf/1.4_Altmis_Yilin_Vaatleri_ve_Kanit.pdf', is: 'Cevabınıza bir karşılaştırma grubu ekleyin.'},
             {id: 'm4b', ad: '1.5 · Kanıt gücü düşükten yükseğe', yol: 'pdf/1.5_Denetim_Riskler_ve_Elestirel_Okuma.pdf', is: 'Planladığınız kanıtın merdivenin hangi basamağında olduğunu yazın.'}],
        M5: [{id: 'm5a', ad: '1.5 · Mercek Bastani ve arkadaşlarının (2025) çalışmasında', yol: 'pdf/1.5_Denetim_Riskler_ve_Elestirel_Okuma.pdf', is: 'Tasarımınızın işe yaramayabileceği bir alt grubu adlandırın.'}]
      },
      /* Dil modeli taslağı için hafta bağlamı (öğretmen panelinde kullanılır). */
      baglam: 'Hafta 1 konuları: yetişkin eğitiminde ölçek sorunu (kitlesellik, heterojenlik, görünmezlik); andragojinin varsayımlarını veri ihtiyacına ve tasarım kararına çevirme; sistemin çoğu zaman öğrenenin özelliğini değil koşulunu ölçmesi; beş terim (ZÖS, uyarlanabilir öğrenme, öğrenme analitiği, EVM, YZ destekli sistemler); akıllı sayılma ölçütü olarak öğrenen hakkında güncellenen ve kararlara dayanak olan temsil; klasik mimari (alan, öğrenen, pedagojik model, arayüz); uyarlamanın üç zaman ölçeği (tasarım, görev, adım döngüsü); beş aşamalı uyarlama döngüsü (ölçme, modelleme, karar, müdahale, değerlendirme); etki büyüklüklerinin karşılaştırma koşulu ve ölçme aracıyla okunması; altı otomasyon düzeyi; dört risk ekseni; kanıt merdiveni; Uyarlama Merceği.'
    }
  }
};
