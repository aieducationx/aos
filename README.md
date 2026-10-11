# Yetişkin Eğitiminde Akıllı ve Uyarlanabilir Öğrenme Sistemleri — Mikroöğretim

Anadolu Üniversitesi Yaşam Boyu Öğrenme ve Yetişkin Eğitimi yüksek lisans programı için hazırlanmış açık eğitim kaynağı. On iki hafta, yirmi dört ders, her ders beş adım: **Oku · İzle · Değerlendirme · Görev · Üret ve Paylaş**. Dönem boyunca biriken on iki **Uygulama Yaprağı**, sonunda öğrencinin belirli bir yetişkin öğrenen grubu için yazdığı **Tasarım Dosyasına** dönüşür.

**Durum:** Hafta 1 (Ders 1A ve 1B) yayımlandı. Sonraki haftalar `ders.html` içindeki ders verisine eklenerek yayımlanır.

| Sayfa | Ne |
|---|---|
| `index.html` | Giriş |
| `ders.html` | Platformun tamamı: dersler, beş adım, bölüm sınavı, karne. Tek dosya, bağımlılıksız |
| `materyal.html` | İndirilebilir dosyaların dizini |

| Klasör | İçerik |
|---|---|
| `materyal/00_Genel/` | Ders tasarımı ve izlence |
| `materyal/HaftaNN/` | Kitap bölümü, ders planı, konuşma metni, etkinlik yaprakları, sunum (PDF) |
| `materyal/00_Video_Brief/` | Videoların çekim brief'i ve kaynak metni |
| `pdf/` | Alt başlıkların ayrı PDF'leri (Oku adımındaki **PDF ↓** düğmesi) |
| `videolar.js` | Videoların YouTube adresleri |

Video bağlamak için `videolar.js` içinde ilgili dersin karşısına adresi yazın (`"D01": "https://youtu.be/..."`). Görünürlük herkese açık ya da liste dışı olmalıdır.

GitHub Pages: klasörün içeriğini bir deponun köküne gönderin; Settings → Pages → Deploy from a branch (`main`, `/ (root)`). `.nojekyll` dosyasını silmeyin.

Gizlilik: platform kayıt istemez, çerez kullanmaz; ilerleme yalnızca ziyaretçinin tarayıcısında saklanır.

Lisans: CC BY-NC-SA 4.0 · © 2026 Prof. Dr. Hıdır Karaduman, Anadolu Üniversitesi.
