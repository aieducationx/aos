/* XX10 akıllı katman — ortak ayar (öğrenci sayfası ve öğretmen paneli aynı dosyayı kullanır).
   Öğrenen modeli: yedi boyut. Her teslimde öğretmen (isterse dil modeli taslağıyla) her boyuta bir düzey verir.
   Düzeyler not değildir; öğrencinin Tasarım Dosyasında bu düşünme biçimini ne ölçüde kullandığını gösterir. */
window.XX10_AKILLI = {
  ders: 'XX10',
  eposta: 'hidirkaraduman@anadolu.edu.tr',
  /* Google Apps Script web uygulaması adresi (…/exec). Kurulumdan sonra buraya yazılır. */
  sunucu: '',
  surum: 1,
  aktifHafta: 2, /* öğrencinin sayfayı açtığında göreceği hafta; ilerledikçe değiştirin */
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
    },
    2: {
  uy: 'UY2', baslik: 'Öğrenen Profili ve Kısıtlar', hedefKelime: 600,
  yonerge: 'Bu yaprak Tasarım Dosyanızın ikinci sayfasıdır. Birinci yaprakta seçtiğiniz grup ve takılma anı değişmez; bu hafta o grubu kanıta dayalı bir profile dönüştürüyorsunuz. Her satıra K (kurum verisi), A (alanyazın, sayfa numarasıyla) ya da V (varsayım) etiketi koyun. V etiketli satırlar eksiklik değil, araştırma planıdır; ancak V etiketli bir satırdan tasarım kararı çıkarmayın, sınama sorusu yazın.',
  alanlar: [
    {id: 'profil', bas: '1 · Öğrenen profili: özellik, durum, koşul', ipucu: 'Grubunuzu en iyi anlatan beş cümleyi yazın. Her birinin yanına özellik, durum ya da koşul olduğunu ve hangi veri türüne (kullanıcı, kullanım, çevre) karşılık geldiğini yazın. Profilde en az bir koşul ve bir durum bulunsun.', satir: 5, boyut: ['B1', 'M2']},
    {id: 'kisit', bas: '2 · Kısıtlar', ipucu: 'Zaman, cihaz, iş, aile ve kurumsal kısıtlardan grubunuz için en belirleyici üçünü yazın. Her kısıtın öğrenme sürecinde hangi anda ortaya çıktığını belirtin.', satir: 4, boyut: ['B1']},
    {id: 'etiket', bas: '3 · Kanıt etiketleri', ipucu: 'Profildeki her satıra K, A ya da V etiketi koyun; A için kaynak ve basılı sayfa numarası yazın. Kaç satır V? Hangisini hangi veriyle sınayacaksınız?', satir: 4, boyut: ['M4', 'B2']},
    {id: 'suzgec', bas: '4 · Dört süzgeç', ipucu: 'İki öğrenen farkı seçin ve her birini ilişki, ölçüm, eylem ve maliyet süzgecinden geçirin. Karar: tasarım kararını hak ediyor mu, etmiyor mu, küçük bir sınama mı gerekiyor?', satir: 4, boyut: ['M2', 'M5']},
    {id: 'mercek', bas: '5 · Uyarlama Merceği: ikinci ve beşinci sorular', ipucu: 'Neye göre uyarlayacaksınız ve bu özelliğin öğrenmeyle ilişkisi hangi kanıta dayanıyor? Etki kimde yaramayabilir ve bu grup kanıtta kim tarafından temsil ediliyor?', satir: 5, boyut: ['M2', 'M5']},
    {id: 'bilmedigim', bas: '6 · Bu aşamada bilmediğimi bildiğim üç şey', ipucu: 'Dönem ilerledikçe dönüp bakacağınız sorular.', satir: 3, boyut: []}
  ],
  kontrol: [
    'Profilde en az bir koşul ile bir durumu ayırdım.',
    'Her satırın bir kanıt etiketi (K, A, V) var.',
    'V etiketli satırlardan tasarım kararı çıkarmadım; sınama sorusu yazdım.',
    'Atıf yaptığım kaynaklara sayfa numarasıyla atıf yaptım.'
  ],
  oneriler: {
    B1: [{id: 'w2_b1a', ad: '2.2 · Yetişkinin kısıtları: özellik mi, koşul mu?', yol: 'pdf/2.2_Yetiskinin_Kisitlari_Ozellik_mi_Kosul_mu.pdf', is: 'Grubunuzdan bir öğrenenin tek bir oturum verisini üç ayrı biçimde (özellik, durum, koşul) okuyun ve hangisinin doğrulanabilir olduğunu yazın.'}],
    B2: [{id: 'w2_b2a', ad: '2.5 · Kanıta dayalı persona', yol: 'pdf/2.5_On_Bilgi_Kanita_Dayali_Persona_ve_Elestirel_Okuma.pdf', is: 'Persona kartınızdaki bir satırı K, A ya da V olarak etiketleyin ve dayanağını sayfa numarasıyla yazın.'}],
    M1: [{id: 'w2_m1a', ad: '2.1 · Öz-yönelimin üç düzeyi', yol: 'pdf/2.1_Oz_Yonelim_Bir_Deger_mi_Bir_Strateji_mi.pdf', is: 'Tasarımınızdaki bir seçim olanağını değer, strateji ya da sistem kararı olarak sınıflayın.'}],
    M2: [{id: 'w2_m2a', ad: '2.3 · Neye göre uyarlıyoruz? (Tablo 2.3 ve 2.4)', yol: 'pdf/2.3_Neye_Gore_Uyarliyoruz_Bir_Siniflama.pdf', is: 'Uyarlamanızın dayanağını Tablo 2.4\'ten bir satıra yerleştirin ve bu dayanağın kararlılığını yazın.'}],
    M3: [{id: 'w2_m3a', ad: '2.3 · Uyarlanabilir ve kullanıcı tarafından uyarlanan sistem', yol: 'pdf/2.3_Neye_Gore_Uyarliyoruz_Bir_Siniflama.pdf', is: 'Tasarımınızdaki bir kararı kimin verdiğini (öğrenen mi, sistem mi) yazın.'}],
    M4: [{id: 'w2_m4a', ad: '2.4 · Öğrenme stilleri: tercih ile kanıt arasında', yol: 'pdf/2.4_Ogrenme_Stilleri_Tercih_ile_Kanit_Arasinda.pdf', is: 'Profilinizdeki bir "stil" ya da tercih cümlesini erişilebilirlik, tercih ya da öğrenme farkı hipotezi olarak ayırın ve dört ölçütten hangilerinin karşılandığını yazın.'}],
    M5: [{id: 'w2_m5a', ad: '2.5 · Dört süzgeç ve eleştirel okuma', yol: 'pdf/2.5_On_Bilgi_Kanita_Dayali_Persona_ve_Elestirel_Okuma.pdf', is: 'Dayandığınız kanıtın örnekleminde yetişkin satırı var mı? Yoksa taşınabilirlik için hangi koşulu yazarsınız?'}]
  },
  baglam: 'Hafta 2 konuları: öz-yönelimin üç düzeyi (değer, strateji, sistem kararı); Brookfield\'ın ideoloji eleştirisi ve Karich ve arkadaşlarının yaş tablosunda yetişkin eğitimi için tek çalışmalık satır; yetişkinin kısıtları ve ara verme; kullanıcı, kullanım ve çevre verisi ile özellik, durum, koşul ayrımı; Aleven ve arkadaşlarının beş öğrenen özelliği grubu ve kanıt durumu; uyarlanabilir ve kullanıcı tarafından uyarlanan sistem; öğrenme stili hipotezinin dört ölçütü ve çaprazlama etkileşimi; "stil" adı altında erişilebilirlik, tercih ve öğrenme farkı hipotezi; ön bilgi ve uzmanlık tersinmesi; dört süzgeç (ilişki, ölçüm, eylem, maliyet); kanıta dayalı persona (K, A, V); Wang ve arkadaşlarının (2024) meta-analizinin Uyarlama Merceği ile okunması.'
},
    3: {
  uy: 'UY3', baslik: 'Uyarlama Hedefi ve Kaynağı', hedefKelime: 500,
  yonerge: 'Bu yaprak Tasarım Dosyanızın üçüncü sayfasıdır. Birinci yaprakta seçtiğiniz grup ve takılma anı değişmez; bu hafta o takılmaya hangi uyarlamanın yanıt vereceğini uyarlanabilirlik ızgarasında konumlandırıyorsunuz. Hedefi, kaynağı ve hücreyi yazamıyorsanız tasarım henüz tarif edilmemiştir.',
  alanlar: [
    {id: 'ozet', bas: '1 · Tasarım özetim', ipucu: 'UY1\'deki grubunuzu ve takılma anınızı iki cümleyle yeniden yazın.', satir: 3, boyut: ['B1']},
    {id: 'hedef', bas: '2 · Uyarlama hedefi', ipucu: 'Neyi uyarlıyorsunuz? Tablo 3.2\'den bir hedef seçin (içerik ve sunum, gezinme, görev, adım düzeyinde yardım, destek ya da değerlendirme) ve bir yetişkin eğitimi örneğiyle somutlaştırın.', satir: 4, boyut: ['M1']},
    {id: 'kaynak', bas: '3 · Uyarlama kaynağı', ipucu: 'Neye bakarak uyarlıyorsunuz? Tablo 3.3\'ten bir satır seçin ve verinin türünü (kullanıcı, kullanım ya da ortam verisi) yazın. Bu veri öğrenenin bir özelliğini mi, içinde bulunduğu koşulu mu gösterir? Ne sıklıkla güncellenir?', satir: 5, boyut: ['M2']},
    {id: 'hucre', bas: '4 · Izgaradaki yeriniz', ipucu: 'Uyarlamanız hangi döngüde ve hangi satırda? Hücreyi adlandırın ve neden o döngüde olduğunu bir cümleyle gerekçelendirin.', satir: 3, boyut: ['M1']},
    {id: 'karar', bas: '5 · Karar yetkisi', ipucu: 'Tasarımınızdaki en az iki kararı Tablo 3.5\'teki kalıplardan birine yerleştirin ve Hannafin koşullarından birine dayanarak gerekçelendirin. Bu, birinci haftadaki otomasyon düzeyi seçiminizle tutarlı mı?', satir: 4, boyut: ['M3', 'B2']},
    {id: 'kanit', bas: '6 · Hücrenin kanıt durumu', ipucu: 'Tablo 3.4\'te hücreniz için ne yazıyor? Dayanağınız hangi çalışma? Komşu bir hücreyi alternatif olarak adlandırın ve neden onu seçmediğinizi yazın.', satir: 4, boyut: ['M4']},
    {id: 'sinir', bas: '6 · Kanıt benim öğrenen grubuma taşınabilir mi?', ipucu: 'Kanıtın geldiği çalışmaların örneklemi ile sizin grubunuz arasındaki farkı yazın (yaş, ortam, süre). Tasarımınızın işe yaramayabileceği bir alt grubu adlandırın.', satir: 3, boyut: ['M5']},
    {id: 'bilmedigim', bas: '7 · Bu aşamada bilmediğimi bildiğim üç şey', ipucu: 'Dönem ilerledikçe dönüp bakacağınız sorular.', satir: 3, boyut: []}
  ],
  kontrol: [
    'Hedef, kaynak ve döngüyü tek cümlede söyleyebiliyorum.',
    'Kaynağın öğrenmeyle ilişkisini ve güncellenme sıklığını yazdım.',
    'Hücrenin kanıt durumunu abartmadım; ızgarada yer almayı kanıt olarak sunmadım.',
    'Kanıtın öğrenen grubuma taşınabilirliğini ayrıca yazdım.'
  ],
  oneriler: {
    B1: [{id: 'w3_b1a', ad: '3.2 · Aynı kaynak, iki ayrı okuma', yol: 'pdf/3.2_Neye_Gore_Uyarliyoruz_Uyarlamanin_Kaynaklari.pdf', is: 'Grubunuzdan bir öğrenen için, verinin hem bir özelliği hem bir koşulu gösterebildiği bir örnek yazın.'}],
    B2: [{id: 'w3_b2a', ad: '3.4 · Hannafin koşulları ve değer ile strateji ayrımı', yol: 'pdf/3.4_Kim_Karar_Veriyor_Sistem_Ogrenen_ve_Paylasilan_Denetim.pdf', is: 'Öz-yönelim değerini, kararı destekleyen bilgiyi sağlayan bir tasarım kararına çevirin.'}],
    M1: [{id: 'w3_m1a', ad: '3.1 · Uyarlama hedefleri (Tablo 3.2)', yol: 'pdf/3.1_Neyi_Uyarliyoruz_Hedefler_ve_Uyarlama_Derecesi.pdf', is: 'Önerinizin hedefini tabloda bir satıra yerleştirin ve komşu bir hedeften ayırın.'},
         {id: 'w3_m1b', ad: '3.3 · Üç döngü, on beş hücre', yol: 'pdf/3.3_Uc_Dongu_On_Bes_Hucre_Izgara_ve_Kanit_Haritasi.pdf', is: 'Hücrenizi döngü ve satır olarak adlandırın.'}],
    M2: [{id: 'w3_m2a', ad: '3.2 · Uyarlamanın kaynakları (Tablo 3.3)', yol: 'pdf/3.2_Neye_Gore_Uyarliyoruz_Uyarlamanin_Kaynaklari.pdf', is: 'Verinin türünü (kullanıcı, kullanım, ortam) ve güncellenme sıklığını yazın.'}],
    M3: [{id: 'w3_m3a', ad: '3.4 · Karar yetkisinin altı kalıbı (Tablo 3.5)', yol: 'pdf/3.4_Kim_Karar_Veriyor_Sistem_Ogrenen_ve_Paylasilan_Denetim.pdf', is: 'Her kararınız için bir kalıp seçin ve kalıbın bedelini bir cümleyle yazın.'}],
    M4: [{id: 'w3_m4a', ad: '3.3 · Izgarada kanıt haritası (Tablo 3.4)', yol: 'pdf/3.3_Uc_Dongu_On_Bes_Hucre_Izgara_ve_Kanit_Haritasi.pdf', is: 'Hücrenizin kanıt durumunu ve dayandığı çalışmayı yazın; hücredeki kanıtın ürününüzü aklamadığını belirtin.'}],
    M5: [{id: 'w3_m5a', ad: '3.5 · Meta-analizleri ızgarayla okumak', yol: 'pdf/3.5_Izgarayla_Okumak_Meta_Analizler_Mercek_ve_Tasarim_Karari.pdf', is: 'Dayandığınız kanıtın örnekleminde grubunuza benzeyen ve benzemeyen yanları yazın.'}]
  },
  baglam: 'Hafta 3 konuları: uyarlamayı tarif etmek için hedef (içerik ve sunum, gezinme, görev seçimi, adım düzeyinde yardım, destek, değerlendirme), kaynak (beş öğrenen özelliği grubu; kullanıcı, kullanım ve ortam verisi; özellik ile koşul ayrımı; güncellenme sıklığı) ve zaman ölçeği; uyarlanabilirliğin üç koşullu ve derecesi olan tanımı ve tasarım zamanı uyarlama; Shute ve Zapata-Rivera\'nın beş senaryosu; öğrenme stilleri kanıtı; uyarlanabilirlik ızgarası (üç döngü, beş satır, on beş hücre) ve Aleven ve arkadaşlarının hücre düzeyinde kanıt haritası (on beş hücrenin on üçünde kanıt; ızgarada yer almak kanıt değildir); karar yetkisinin altı kalıbı (program denetimi, sistem uyarlar, başlat ama kesilebilir, önerip onaya sun, seçenek sunup seçtir, öğrenen uyarlar); Karich ve arkadaşlarının öğrenen denetimi meta-analizi (ortanca g = 0,05; bileşenler; Hannafin koşulları; yetişkin eğitimi ortamında tek çalışma); Wang ve arkadaşlarının kaynak ve hedef bulguları ve küçük küme uyarısı; Uyarlama Merceği\'nin "Ne?" sorusunun hedef, kaynak ve zaman ölçeğine açılması.'
},
    4: {
      uy: 'UY4', baslik: 'Öğrenen Modeli Taslağı', hedefKelime: 600,
      yonerge: 'Üçüncü haftada uyarlamanın hedefini ve kaynağını yazdınız. Bu yaprak o kaynağı bir alan modeline ve bir öğrenen modeline bağlar. Sistemin öğrenen hakkında ne söyleyebileceği, burada tanımladığınız birimlerle ve dayandığı gözlemle sınırlıdır.',
      alanlar: [
        {id: 'alan', bas: '1 · Alan modeli taslağı', ipucu: 'Takılma anınızı açıklayan beş ila sekiz bilgi bileşeni. Her biri için tür (olgu, kavram, kural), ayrıntı düzeyi, varsa önkoşul; hangisini kim belirledi: siz mi, uzman mı, veri mi?', satir: 6, boyut: ['B1']},
        {id: 'temsil', bas: '2 · Öğrenen modeli: neyi temsil edecek?', ipucu: 'Bu bileşenlerden biri için: bilgi mi, hata mı, duyuş mu, tercih mi? Bu temsil bir öğrenen özelliği mi, yoksa öğrenenin içinde bulunduğu koşul mu?', satir: 3, boyut: ['B2']},
        {id: 'gozlem', bas: '3 · Gözlem verisi', ipucu: 'Modelin dayanacağı gözlemler: yanıt doğruluğu, ipucu kullanımı, süre, belirli yanlışlar, öğretmen notu, beyan. Her birinin neden bir bilgi göstergesi sayılabileceğini bir cümleyle yazın.', satir: 4, boyut: ['M2']},
        {id: 'guncelleme', bas: '4 · Güncelleme kuralı', ipucu: 'Kestirimi hangi kuralla güncelleyeceksiniz: sayaç, bilgi izleme benzeri hesap, Elo benzeri derece, öğretmenin dönemlik notu? Parametre varsayımlarınızı yazın; kaynağı olmayan değere "bilinmiyor" deyin. Neyin, hangi zaman ölçeğinde uyarlanacağını da belirtin.', satir: 4, boyut: ['M1']},
        {id: 'eminlik', bas: '5 · Ne kadar eminiz?', ipucu: 'Sistem kaç gözlemden sonra karar verecek? Az veriye dayanan kestirimi nasıl işaretleyeceksiniz?', satir: 3, boyut: ['M4']},
        {id: 'dis_olcut', bas: '5 · Dış ölçüt ve sınır', ipucu: 'Modelin tahminini hangi dış ölçütle, hangi öğrencilerle sınayacaksınız? Modelin kimde ya da hangi koşulda yanlış kestirebileceğini yazın.', satir: 3, boyut: ['M5']},
        {id: 'kim_gorur', bas: '6 · Kim görecek, kim düzeltebilecek?', ipucu: 'Öğrenen modeli görecek mi, düzeltebilecek mi (denetlenebilir, düzenlenebilir, ikna, müzakere)? Öğretmen ne görecek? Kalıcı mı, oturumla sınırlı mı? Kararı kim, hangi otomasyon düzeyinde verecek?', satir: 3, boyut: ['M3']},
        {id: 'neye_gore', bas: '7 · Uyarlama Merceği: "Neye göre?"', ipucu: 'Uyarlamanızın dayandığı veriyi ve bu verinin öğrenmeyle ilişkisini bir paragrafla yazın. "Aynı veri, iki farklı öğrenen" örneğini kendi grubunuz için yeniden kurun.', satir: 4, boyut: ['M2']},
        {id: 'bilmedigim', bas: '8 · Bu aşamada bilmediğimi bildiğim üç şey', ipucu: 'Dönem ilerledikçe dönüp bakacağınız sorular.', satir: 3, boyut: []}
      ],
      kontrol: [
        'Bilgi bileşenlerim ayrıntı düzeyi bakımından gerekçelendirildi.',
        'Güncelleme kuralının varsayımlarını yazdım.',
        '"Ne kadar eminiz?" sorusuna somut bir cevabım var.',
        'Veri ile öğrenen özelliği arasındaki farkı düşündüm.'
      ],
      oneriler: {
        B1: [{id: 'w4_b1a', ad: '4.1 · Üç tür bilgi bileşeni ve ayrıntı düzeyi (Tablo 4.1, 4.2)', yol: 'pdf/4.1_Alan_Modeli_Bilgi_Nasil_Parcalanir.pdf', is: 'Bileşenlerinizi olgu, kavram ya da kural olarak etiketleyin ve en kaba olanı ikiye bölün.'}],
        B2: [{id: 'w4_b2a', ad: '4.2 · Öğrenen modeli neyi temsil edebilir? (Tablo 4.3)', yol: 'pdf/4.2_Ogrenen_Modeli_Neyi_Neye_Dayanarak_Temsil_Eder.pdf', is: 'Temsil ettiğiniz şeyin öğrenen özelliği mi, koşul mu olduğunu bir cümleyle gerekçelendirin.'}],
        M1: [{id: 'w4_m1a', ad: '4.3 · Bilgi izleme: iki adımlı güncelleme ve model karşılaştırması (Tablo 4.4, 4.6)', yol: 'pdf/4.3_Bilgi_Izleme_Bayesci_Guncelleme_ile_Ogrenen_Modeli.pdf', is: 'Güncelleme kuralınızı sayaç, bilgi izleme ya da Elo benzeri bir kurala yerleştirip varsayımlarını yazın.'}],
        M2: [{id: 'w4_m2a', ad: '4.2 · Gözlem verisi ve yerel/genel veri', yol: 'pdf/4.2_Ogrenen_Modeli_Neyi_Neye_Dayanarak_Temsil_Eder.pdf', is: 'Her gözlem için neden bilgi göstergesi sayıldığını ve hangi başka nedenden de doğabileceğini yazın.'},
             {id: 'w4_m2b', ad: '4.5 · Başlangıç bilgisinin çeşitliliği (yetişkin eğitimi)', yol: 'pdf/4.5_Ogrenen_Modelini_Acmak_Gorunurluk_Duzeltme_ve_Yetiskin_Ogrenen.pdf', is: 'Başlangıç bilgisini herkes için tek değer almanın grubunuzda neye yol açacağını yazın.'}],
        M3: [{id: 'w4_m3a', ad: '4.5 · Açık öğrenen modeli: dört denetim türü (Tablo 4.8)', yol: 'pdf/4.5_Ogrenen_Modelini_Acmak_Gorunurluk_Duzeltme_ve_Yetiskin_Ogrenen.pdf', is: 'Tasarımınıza bir denetim türü seçin ve hangi kararın yalnızca beyana bırakılmayacağını yazın.'}],
        M4: [{id: 'w4_m4a', ad: '4.4 · İki anlamıyla "ne kadar emin" ve kanıt miktarı', yol: 'pdf/4.4_Ne_Kadar_Emin_Belirsizlik_ve_Modelin_Sinanmasi.pdf', is: 'Sayının kaç gözleme dayandığını göstermenin bir yolunu ve ustalık kararı için asgari gözlem sayısını yazın.'}],
        M5: [{id: 'w4_m5a', ad: '4.4 · Bir model raporu nasıl okunur? (Tablo 4.7)', yol: 'pdf/4.4_Ne_Kadar_Emin_Belirsizlik_ve_Modelin_Sinanmasi.pdf', is: 'Modelinizi sınayacağınız veriyi ve bu verinin kimleri dışarıda bıraktığını yazın.'},
             {id: 'w4_m5b', ad: '4.5 · Mercek: Corbett ve Anderson (1995)', yol: 'pdf/4.5_Ogrenen_Modelini_Acmak_Gorunurluk_Duzeltme_ve_Yetiskin_Ogrenen.pdf', is: 'Modelinizin yanlış kestirebileceği bir alt grubu adlandırın.'}]
      },
      baglam: 'Hafta 4 konuları: alan modeli (madde, bilgi bileşeni, olgu/kavram/kural, ayrıntı düzeyi, Q-matrisi, kredi atama sorunu; alan modeli öğrenen modelinin sözlüğüdür); öğrenen modeli (veri, durum, karar; örtük yapı olarak bilgi; bindirme modeli; yerel ve genel veri; dört kullanım: öğretim politikası, açık öğrenen modeli, eyleme dönük içgörü, adım döngüsü); Bayesçi bilgi izleme (iki durum, unutma yok, başlangıç öğrenilmişliği, öğrenme, şans başarısı, sürçme; iki adımlı güncelleme; 0,95 ustalık ölçütü; beş yanıtlık kurgusal hesap) ve daha basit ya da karmaşık modellerle karşılaştırma (üst üste k doğru, hareketli ortalama, lojistik modeller ve Elo, derin öğrenme); "ne kadar emin" ifadesinin iki anlamı (olasılık değeri ve modelin güvenilirliği), kanıt miktarı ve belirsizlik, iç ve dış geçerlik, model raporunu okuma soruları (ölçüt, veri bölme, veri toplama, parametre tutarlılığı), uyarlanır verinin geri besleme döngüsü; açık öğrenen modeli (yararlar; denetlenebilir, düzenlenebilir, ikna, müzakere); yetişkin eğitiminde başlangıç bilgisi çeşitliliği, unutma ve kalıcı model; makale kritiği Corbett ve Anderson (1995) ile Uyarlama Merceği\'nin "Neye göre?" sorusunun derinleşmesi.'
},
    5: {
      uy: 'UY5', baslik: 'Veri ve Gösterge Planı', hedefKelime: 500,
      yonerge: 'Dördüncü haftada öğrenen modelini taslakladınız. Bu yaprak onu somut izlere, bir göstergeye ve bir eyleme bağlar. Gösterge, ölçülen şeyle yorumlanan şey arasındaki köprüdür; köprünün neye dayandığını, ne zaman kullanılacağını ve kimde yanlış okunabileceğini yazın.',
      alanlar: [
        {id: 'karar', bas: '1 · Karar sorusu', ipucu: 'Göstergenin cevap vereceği karar nedir? Kim, hangi öğrenen için, ne zaman, hangi eylemi seçecek? Uygulama Yaprağı 1\'deki takılma anına bağlayın.', satir: 3, boyut: ['B1']},
        {id: 'iz', bas: '2 · İz ve veri kaynağı', ipucu: 'Hangi etkileşim izleri toplanacak ve nerede kaydediliyor? Sistemin göremediği, ama öğrenmeyi etkileyen bir koşul var mı?', satir: 3, boyut: ['B2', 'M2']},
        {id: 'kart', bas: '3 · Gösterge kartı', ipucu: 'Ham iz, değişken ve pencere, yorum, eşik ve bilinen yanlış okuma durumları. "Bu sayı neyin yerine geçiyor?" sorusuna tek cümleyle cevap verin.', satir: 5, boyut: ['M2']},
        {id: 'zaman', bas: '4 · Zamanlama', ipucu: 'Müdahale hangi gün yapılacak? O güne kadar bilinebilen veri nedir? Modele girmemesi gereken, sonradan oluşan bir veri var mı?', satir: 3, boyut: ['M1']},
        {id: 'taban', bas: '5 · Taban çizgisi ve sınama', ipucu: 'Göstergenizin karşılaştırılacağı basit kural nedir? Yanlış alarm ve kaçırılan öğrenen grubunuzda hangi sonuçları doğurur? Eşiği buna göre nasıl seçersiniz?', satir: 4, boyut: ['M4']},
        {id: 'kimgorur', bas: '6 · Kim görür, ne yapar?', ipucu: 'Gösterge öğretim elemanına mı, öğrenene mi, ikisine mi gösterilir? Hangi otomasyon düzeyinde kullanılır? Öğrenen kendi göstergesini görebilir mi?', satir: 3, boyut: ['M3']},
        {id: 'kimin', bas: '7 · Kimin için, nereye kadar?', ipucu: 'Gösterge hangi alt gruplarda yanlış okunabilir? Hangi veri toplanmayacak ve neden? Öğrenene nasıl bilgi verilecek?', satir: 4, boyut: ['M5']},
        {id: 'bilmedigim', bas: '8 · Bu aşamada bilmediğimi bildiğim üç şey', ipucu: 'Dönem ilerledikçe dönüp bakacağınız sorular.', satir: 3, boyut: []}
      ],
      kontrol: [
        'Göstergem müdahale anında bilinebilir.',
        'Taban çizgim yazılı.',
        'Yanlış alarm ve kaçırma için ayrı birer cümlem var.',
        'Bir alt grubun yanlış okunma ihtimalini adlandırdım.'
      ],
      oneriler: {
        B1: [{id: 'w5_b1a', ad: '5.1 · Öğrenme analitiği döngüsü ve kapanan döngü', yol: 'pdf/5.1_Ogrenme_Analitigi_ve_Analitik_Dongusu.pdf', is: 'Karar sorunuzu döngünün dört adımına yerleştirin ve müdahalenin öğrenene nasıl ulaşacağını yazın.'}],
        B2: [{id: 'w5_b2a', ad: '5.2 · Aynı veri, üç farklı soru (Tablo 5.1)', yol: 'pdf/5.2_Ham_Izden_Gosterge_ve_Esige.pdf', is: 'Seçtiğiniz izin sizin grubunuzda hangi ayrı nedenlerle ortaya çıkabileceğini yazın.'}],
        M1: [{id: 'w5_m1a', ad: '5.4 · Zamanlama: müdahale anında bilinebilen veri', yol: 'pdf/5.4_Kestirim_Modeli_Zamanlama_Taban_Cizgisi_ve_Olcutler.pdf', is: 'Müdahale gününü yazın ve değişkenlerinizi bilinebilir ile bilinemez olarak ayırın.'}],
        M2: [{id: 'w5_m2a', ad: '5.2 · Zincirin dört halkası (Tablo 5.2)', yol: 'pdf/5.2_Ham_Izden_Gosterge_ve_Esige.pdf', is: 'Her halkadaki varsayımı gösterge kartınıza yazın.'},
             {id: 'w5_m2b', ad: '5.3 · OULAD: bir açık veri setini okumak', yol: 'pdf/5.3_OULAD_Bir_Acik_Veri_Setini_Okumak.pdf', is: 'Verinizin hangi tablolarda tutulduğunu ve hangi anahtarlarla bağlanacağını yazın.'}],
        M3: [{id: 'w5_m3a', ad: '5.5 · Pano: öğretmene ve öğrenene dönük analitik (Tablo 5.6)', yol: 'pdf/5.5_Eyleme_Donusme_Tasinabilirlik_ve_Adalet.pdf', is: 'Göstergeyi kimin göreceğini ve öğrenenin kendi verisine erişimini gerekçelendirin.'}],
        M4: [{id: 'w5_m4a', ad: '5.4 · Taban çizgisi ve karışıklık tablosu (Tablo 5.4, 5.5)', yol: 'pdf/5.4_Kestirim_Modeli_Zamanlama_Taban_Cizgisi_ve_Olcutler.pdf', is: 'Taban çizgisini yazın ve eşiğinizin hangi hatayı tercih ettiğini söyleyin.'}],
        M5: [{id: 'w5_m5a', ad: '5.5 · Mercek: Gašević vd. (2016) ve dilimleme analizi', yol: 'pdf/5.5_Eyleme_Donusme_Tasinabilirlik_ve_Adalet.pdf', is: 'Göstergenizin yanlış okunabileceği bir alt grubu ve bir koşulu adlandırın.'}]
      },
      baglam: 'Hafta 5 konuları: öğrenme analitiği, akademik analitik ve eğitsel veri madenciliği ayrımı; etkileşim izinin öğrenmenin dolaylı yan ürünü olması; Clow\'un analitik döngüsü ve döngüyü kapatma, hız ve ölçek, tek ve çift halka, metrik tehlikesi; ham iz, değişken, gösterge ve eşik zinciri ile her halkadaki varsayım; gösterge kartı; Açık Üniversite veri seti (OULAD) tabloları, üçlü anahtar, seçilim ve anonimleştirme; açıklayıcı ve kestirimsel modelleme; zamanlama ve sızıntı; taban çizgisi, karışıklık tablosu, doğruluk, kesinlik, duyarlılık; yanlış alarm ve kaçırma maliyeti; öğretmene ve öğrenene dönük panolar, helikopter analitiği; Gašević vd. (2016) ile taşınabilirlik; dilimleme analizi, adalet ve gizlilik. Uyarlama Merceği 2. soru ("Neye göre?") derinleşir. Sayıları olan 12 öğrencilik örnek kurgusaldır.'
}
  }
};
