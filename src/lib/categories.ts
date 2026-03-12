export interface Category {
    slug: string;
    name: string;
    title: string;
    metaDescription: string;
    h1: string;
    shortDescription: string;
    content: string;
    faq: { question: string; answer: string }[];
    image: string;
}

export const categories: Category[] = [
    {
        slug: 'naturel-sizma-zeytinyagi',
        name: 'Natürel Sızma Zeytinyağı',
        title: 'Üreticiden Uygun Fiyatlı Natürel Sızma Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Natürel sızma zeytinyağı üreticiden uygun fiyatla! %0.8 altı asit oranı, soğuk sıkım kalite. Zeytinyağı Liderden Alınır! Toptan ve perakende, ücretsiz kargo.',
        h1: 'Üreticiden Uygun Fiyatlı Natürel Sızma Zeytinyağı',
        shortDescription: 'En yüksek kalite sınıfında, %0.8 altı asit oranına sahip doğal zeytinyağı.',
        image: '/images/naturel_sizma_premium.png',
        content: `## Natürel Sızma Zeytinyağı Nedir?

Natürel sızma zeytinyağı, zeytinyağı sınıflandırmasında en üst kalite kategorisini temsil eden, serbest yağ asitliği oleik asit cinsinden %0.8'i geçmeyen, kusursuz tat ve aromaya sahip zeytinyağıdır. Uluslararası Zeytin Konseyi (IOC) standartlarına göre en kaliteli zeytinyağı olarak kabul edilir.

Bu zeytinyağı türü, zeytinlerin sadece mekanik yöntemlerle ve herhangi bir kimyasal işlem uygulanmadan sıkılmasıyla elde edilir. Üretim sürecinde ısı uygulanmaz veya çok düşük sıcaklıklarda işlem yapılır, bu sayede zeytinin doğal vitaminleri, antioksidanları ve polifenolleri korunur.

## Natürel Sızma Zeytinyağının Özellikleri

### Kimyasal Özellikler
- **Asit Oranı**: Oleik asit cinsinden maksimum %0.8
- **Peroksit Sayısı**: Maksimum 20 meq O2/kg
- **K232 Değeri**: Maksimum 2.50
- **K270 Değeri**: Maksimum 0.22
- **Polifenol İçeriği**: Yüksek antioksidan kapasitesi

### Organoleptik Özellikler
- Meyvemsi aroma (yeşil ve/veya olgun)
- Acılık hissi (zeytinin doğal polifenollerinden)
- Yakıcılık (oleokantal içeriğinden)
- Kusursuz tat profili (hiçbir kusur algılanmamalıdır)

## Natürel Sızma Zeytinyağı Nasıl Üretilir?

Lider Zeytincilik'te natürel sızma zeytinyağı üretim sürecimiz:

1. **Hasat**: Zeytinler optimal olgunluk döneminde, Kasım-Ocak ayları arasında toplanır
2. **Yıkama ve Ayıklama**: Zeytinler yaprak ve dallardan arındırılır, yıkanır
3. **Kırma**: Çelik çekiçli kırıcılarda zeytinler hamur haline getirilir
4. **Malaksasyon**: Zeytin hamuru 27°C altında yavaşça karıştırılır (30-45 dk)
5. **Dekantasyon**: Santrifüj sistemi ile yağ, su ve posa ayrıştırılır
6. **Filtrasyon**: İsteğe bağlı filtreleme işlemi
7. **Depolama**: Paslanmaz çelik tanklarda, ışıksız ortamda muhafaza

## Neden Natürel Sızma Zeytinyağı Tercih Edilmeli?

- **Sağlık**: En yüksek antioksidan ve vitamin içeriği
- **Lezzet**: Zengin, meyvemsi aroma profili
- **Doğallık**: Hiçbir kimyasal işlem uygulanmaz
- **Besin Değeri**: E vitamini, K vitamini ve polifenollerden zengin
- **Kalp Sağlığı**: Tekli doymamış yağ asitlerinden zengin yapısı ile kalp-damar sağlığını destekler

## Kullanım Alanları

Natürel sızma zeytinyağı özellikle:
- Salata sosları ve çeşniler
- Soğuk mezeler ve kahvaltılıklar
- Ekmek üzerine sürme
- Son dokunuş olarak yemeklere ekleme
- Sağlıklı pişirme (düşük-orta ısıda)

alanlarında en iyi sonucu verir.

## Lider Zeytincilik Natürel Sızma Zeytinyağı

Lider Zeytincilik olarak, Ege Bölgesi'nin en verimli zeytin bahçelerinden toplanan zeytinlerden ürettiğimiz natürel sızma zeytinyağımız, düşük asit oranı ve zengin aroma profili ile öne çıkmaktadır.

Ürünlerimiz 1 Lt, 5 Lt teneke, 5 Lt PET ve 10 Lt ambalaj seçeneklerinde sunulmaktadır. Tüm ambalajlarımız etiketsizdir, kendi markanızla etiketleme imkanı sunar.

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: 'Natürel sızma zeytinyağı asit oranı kaç olmalı?',
                answer: 'Natürel sızma zeytinyağında asit oranı oleik asit cinsinden maksimum %0.8 olmalıdır. Lider Zeytincilik ürünlerinde bu oran genellikle %0.3-0.5 arasındadır.',
            },
            {
                question: 'Natürel sızma zeytinyağı ile sızma zeytinyağı arasındaki fark nedir?',
                answer: 'Natürel sızma zeytinyağı (extra virgin) asit oranı %0.8 altında ve kusursuz tat profiline sahiptir. Sızma zeytinyağı (virgin) ise asit oranı %2.0 altında olabilir ve hafif tat kusurları içerebilir.',
            },
            {
                question: 'Natürel sızma zeytinyağı kızartma için kullanılır mı?',
                answer: 'Natürel sızma zeytinyağı kızartma için kullanılabilir ancak önerilmez. Yüksek kaliteli besin değerlerini kaybetmemek için soğuk tüketim veya düşük-orta ısıda pişirme önerilir.',
            },
            {
                question: 'Natürel sızma zeytinyağı toptan fiyat nedir?',
                answer: 'Toptan fiyatlarımız sipariş miktarına göre değişmektedir. Güncel toptan fiyat bilgisi için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
        ],
    },
    {
        slug: 'soguk-sikim-zeytinyagi',
        name: 'Soğuk Sıkım Zeytinyağı',
        title: 'Üreticiden Uygun Fiyatlı Soğuk Sıkım Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Soğuk sıkım zeytinyağı 27°C altında mekanik yöntemlerle üretilir. Üreticiden uygun fiyatlı cold press zeytinyağı. Zeytinyağı Liderden Alınır! Ücretsiz kargo.',
        h1: 'Üreticiden Uygun Fiyatlı Soğuk Sıkım Zeytinyağı',
        shortDescription: '27°C altında mekanik yöntemlerle üretilen, besin değerleri korunmuş doğal zeytinyağı.',
        image: '/images/soguk_sikim_industrial.png',
        content: `## Soğuk Sıkım Zeytinyağı Nedir?

Soğuk sıkım zeytinyağı (cold press olive oil), zeytinlerin 27°C'nin altında bir sıcaklıkta, tamamen mekanik yöntemlerle sıkılmasıyla elde edilen zeytinyağıdır. Bu üretim yöntemi, zeytinin doğal bileşenlerinin, vitaminlerinin ve antioksidanlarının en iyi şekilde korunmasını sağlar.

"Soğuk sıkım" terimi, üretim sürecinde herhangi bir ısı uygulaması veya kimyasal çözücü kullanılmadığını garanti eder. Bu sayede zeytinyağı, zeytinin tüm doğal özelliklerini muhafaza eder.

## Soğuk Sıkım Zeytinyağı Nasıl Üretilir?

### Üretim Süreci

1. **Zeytin Seçimi**: Soğuk sıkım için en kaliteli, erken hasat zeytinler tercih edilir
2. **Temizleme**: Zeytinler dal, yaprak ve yabancı maddelerden arındırılır
3. **Kırma**: Modern çelik kırıcılarda zeytinler ezilir
4. **Malaksasyon (Yoğurma)**: Zeytin hamuru 27°C'nin altında 20-40 dakika yavaşça karıştırılır
5. **Sıkım/Dekantasyon**: İki fazlı veya üç fazlı dekantör sistemiyle yağ ayrıştırılır
6. **Doğal Dinlendirme**: Yağ paslanmaz çelik tanklarda dinlendirilir
7. **Şişeleme/Ambalajlama**: Işık geçirmez ambalajlarda muhafaza edilir

### Sıcaklık Kontrolü Neden Önemli?

27°C sınırı, Avrupa Birliği ve Uluslararası Zeytin Konseyi tarafından belirlenmiş bir standarttır. Bu sıcaklığın üzerine çıkıldığında:

- Polifenol içeriği azalır
- Vitaminler bozulmaya başlar
- Aroma profili değişir
- Antioksidan kapasitesi düşer

Lider Zeytincilik olarak üretim sürecimizde sıcaklık sürekli izlenir ve 27°C sınırının altında tutulur.

## Soğuk Sıkım Zeytinyağının Faydaları

### Sağlık Faydaları
- **Yüksek Antioksidan**: Polifenol ve tokoferol bakımından zengindir
- **Kalp Sağlığı**: Oleik asit kalp-damar sağlığını destekler
- **Anti-enflamatuar**: Oleokantal doğal anti-enflamatuar etkiye sahiptir
- **Vitamin Deposu**: E vitamini ve K vitamini bakımından zengindir
- **Sindirim**: Sindirim sistemini destekler ve bağırsak sağlığına katkıda bulunur

### Mutfak Avantajları
- Zengin, meyvemsi aroma
- Yoğun zeytin kokusu
- Salatalar ve soğuk yemekler için ideal
- Ekmek üzerine sürme için mükemmel

## Soğuk Sıkım Zeytinyağı Saklama Koşulları

- Serin ve karanlık ortamda saklayın (14-18°C ideal)
- Doğrudan güneş ışığından koruyun
- Ağzını sıkıca kapatın
- Metal veya cam kaplarda saklayın
- Plastik kaplardan uzak tutun

## Lider Zeytincilik Soğuk Sıkım Zeytinyağı

Ege Bölgesi'nin seçkin zeytin bahçelerinden toplanan zeytinlerle, modern tesislerimizde soğuk sıkım yöntemiyle ürettiğimiz zeytinyağımız, 1 Lt, 5 Lt ve 10 Lt ambalaj seçeneklerinde sunulmaktadır.

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: 'Soğuk sıkım zeytinyağı nedir?',
                answer: 'Soğuk sıkım zeytinyağı, zeytinlerin 27°C altında mekanik yöntemlerle sıkılmasıyla elde edilen, kimyasal işlem uygulanmamış doğal zeytinyağıdır.',
            },
            {
                question: 'Soğuk sıkım zeytinyağı ile normal zeytinyağı arasındaki fark nedir?',
                answer: 'Soğuk sıkım zeytinyağında üretim sırasında ısı uygulanmaz (27°C altı), bu sayede besin değerleri, vitaminler ve antioksidanlar korunur. Normal zeytinyağında ise ısı ve bazen kimyasal yöntemler kullanılabilir.',
            },
            {
                question: 'Soğuk sıkım zeytinyağı nasıl saklanır?',
                answer: 'Soğuk sıkım zeytinyağı serin, karanlık ortamda, ağzı kapalı olarak saklanmalıdır. İdeal saklama sıcaklığı 14-18°C arasıdır. Güneş ışığından ve ısıdan uzak tutulmalıdır.',
            },
        ],
    },
    {
        slug: 'riviera-zeytinyagi',
        name: 'Riviera Zeytinyağı',
        title: 'Riviera Zeytinyağı | Uygun Fiyatlı Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Riviera zeytinyağı kızartma ve pişirme için ideal, ekonomik zeytinyağı seçeneği. Yüksek yanma noktası. Toptan ve perakende. Ücretsiz kargo.',
        h1: 'Riviera Zeytinyağı',
        shortDescription: 'Kızartma ve pişirme için ideal, ekonomik ve yüksek yanma noktasına sahip zeytinyağı.',
        image: '/images/riviera_cooking_kitchen.png',
        content: `## Riviera Zeytinyağı Nedir?

Riviera zeytinyağı, rafine zeytinyağı ile natürel (bakir) zeytinyağının belirli oranlarda harmanlanmasıyla elde edilen bir zeytinyağı türüdür. Uluslararası standartlara göre "zeytinyağı" (olive oil) olarak sınıflandırılır ve günlük mutfak kullanımı için ideal bir seçenektir.

Bu zeytinyağı türü, özellikle pişirme ve kızartma işlemleri için tercih edilir. Yüksek yanma noktası (yaklaşık 210°C) sayesinde kızartmalarda güvenle kullanılabilir.

## Riviera Zeytinyağının Özellikleri

- **Yanma Noktası**: Yaklaşık 210°C (natürel sızmaya göre daha yüksek)
- **Asit Oranı**: Maksimum %1.0
- **Renk**: Açık sarı-yeşil
- **Aroma**: Hafif, nötr zeytinyağı aroması
- **Lezzet**: Yumuşak, baskın olmayan tat profili

## Riviera Zeytinyağı Kullanım Alanları

### Mutfakta
- Kızartma işlemleri
- Fırında pişirme
- Kavurma ve soteler
- Hamur işleri
- Günlük yemek pişirme

### Avantajları
- Ekonomik fiyat
- Yüksek yanma noktası
- Her yemeğe uygun nötr tat
- Uzun raf ömrü
- Büyük miktarlarda kullanım için ideal

## Riviera Zeytinyağı ile Natürel Sızma Zeytinyağı Farkı

| Özellik | Riviera | Natürel Sızma |
|---------|---------|--------------|
| Asit Oranı | Max %1.0 | Max %0.8 |
| Yanma Noktası | ~210°C | ~180°C |
| Üretim | Rafine + Doğal | Sadece Doğal |
| Fiyat | Ekonomik | Premium |
| Kullanım | Pişirme/Kızartma | Soğuk Tüketim |

## Lider Zeytincilik Riviera Zeytinyağı

Riviera zeytinyağımız, 5 Lt ve 10 Lt ambalajlarda sunulmaktadır. Restoran, lokanta ve toplu tüketim alanları için ideal bir seçenektir.

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: 'Riviera zeytinyağı kızartma için uygun mu?',
                answer: 'Evet, riviera zeytinyağı yüksek yanma noktası (yaklaşık 210°C) sayesinde kızartma için en uygun zeytinyağı türüdür.',
            },
            {
                question: 'Riviera zeytinyağı sağlıklı mı?',
                answer: 'Riviera zeytinyağı, tekli doymamış yağ asitleri açısından zengindir ve diğer bitkisel yağlara göre daha sağlıklı bir seçenektir. Ancak soğuk tüketim için natürel sızma zeytinyağı daha zengin besin profiline sahiptir.',
            },
        ],
    },
    {
        slug: 'organik-zeytinyagi',
        name: 'Organik Zeytinyağı',
        title: 'Organik Zeytinyağı | Sertifikalı Organik | Lider Zeytincilik',
        metaDescription: 'Organik sertifikalı zeytinyağı. Kimyasal gübre ve ilaç kullanılmadan üretilen doğal organik zeytinyağı. Toptan ve perakende satış.',
        h1: 'Organik Zeytinyağı',
        shortDescription: 'Kimyasal gübre ve ilaç kullanılmadan, doğal yöntemlerle üretilen sertifikalı organik zeytinyağı.',
        image: '/images/organik_grove_sunset.png',
        content: `## Organik Zeytinyağı Nedir?

Organik zeytinyağı, organik tarım sertifikasına sahip zeytin bahçelerinde, hiçbir sentetik kimyasal gübre, pestisit veya herbisit kullanılmadan yetiştirilen zeytinlerden üretilen zeytinyağıdır. Üretimin her aşaması akredite kuruluşlar tarafından denetlenir ve sertifikalandırılır.

## Organik Zeytinyağı Üretim Standartları

### Zeytin Bahçesi Yönetimi
- Sentetik kimyasal gübre yasağı
- Sentetik pestisit ve herbisit yasağı
- GDO içermeme garantisi
- Doğal gübreleme (kompost, yeşil gübre)
- Doğal zararlı kontrolü yöntemleri
- Minimum 3 yıl dönüşüm süreci

### Üretim Süreci
- Organik sertifikalı tesislerde üretim
- Konvansiyonel ürünlerle karışmama garantisi
- İzlenebilirlik sistemi
- Düzenli denetim ve analiz

## Neden Organik Zeytinyağı?

- **Sağlık**: Kimyasal kalıntı riski minimumda
- **Çevre**: Sürdürülebilir tarım pratikleri
- **Tat**: Doğal aromaların korunması
- **Güven**: Sertifikalı üretim kontrolü
- **Değer**: Bilinçli tüketim

## Lider Zeytincilik Organik Zeytinyağı

Organik zeytinyağımız, Ege Bölgesi'ndeki organik sertifikalı zeytin bahçelerimizden elde edilen zeytinlerden üretilmektedir.

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: 'Organik zeytinyağı normal zeytinyağından farklı mı?',
                answer: 'Evet, organik zeytinyağı üretim sürecinde hiçbir sentetik kimyasal kullanılmaz. Zeytin bahçesi yönetiminden ambalajlamaya kadar tüm süreç organik sertifika standartlarına uygun şekilde gerçekleştirilir.',
            },
            {
                question: 'Organik zeytinyağı sertifikası var mı?',
                answer: 'Evet, organik zeytinyağımız akredite kuruluşlar tarafından denetlenmekte ve sertifikalandırılmaktadır. Sertifika detayları için bizimle iletişime geçebilirsiniz.',
            },
        ],
    },
    {
        slug: '1-lt-zeytinyagi',
        name: '1 Lt Zeytinyağı',
        title: '1 Litre Zeytinyağı | 1 Lt Zeytinyağı Fiyat | Lider Zeytincilik',
        metaDescription: '1 litre zeytinyağı satışı. Natürel sızma ve soğuk sıkım 1 lt zeytinyağı. Bireysel kullanım için ideal boyut. Ücretsiz kargo ile kapınıza kadar.',
        h1: '1 Litre Zeytinyağı',
        shortDescription: 'Bireysel kullanım ve deneme amacıyla ideal 1 litrelik zeytinyağı ambalajı.',
        image: '/images/one_liter_premium.png',
        content: `## 1 Litre Zeytinyağı

1 litre zeytinyağı, bireysel kullanım ve zeytinyağımızı denemek isteyenler için ideal boyuttadır. Soğuk sıkım ve natürel sızma çeşitlerimiz 1 litrelik ambalajlarda sunulmaktadır.

## Kimler İçin Uygundur?

- Tek kişilik veya küçük haneler
- Zeytinyağımızı ilk kez denemek isteyenler
- Hediye olarak göndermek isteyenler
- Farklı çeşitleri karşılaştırmak isteyenler

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)`,
        faq: [
            {
                question: '1 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 1 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz.',
            },
        ],
    },
    {
        slug: '5-lt-teneke-zeytinyagi',
        name: '5 Lt Teneke Zeytinyağı',
        title: '5 Litre Teneke Zeytinyağı | 5 Lt Teneke Fiyat | Lider Zeytincilik',
        metaDescription: '5 litre teneke zeytinyağı. Etiketsiz teneke ambalajda soğuk sıkım natürel sızma zeytinyağı. Toptan ve perakende. Ücretsiz kargo.',
        h1: '5 Litre Teneke Zeytinyağı',
        shortDescription: 'Işık geçirmez teneke ambalajda, kaliteyi koruyan 5 litrelik zeytinyağı.',
        image: '/images/retail-boxes.png',
        content: `## 5 Litre Teneke Zeytinyağı

5 litre teneke ambalaj, zeytinyağı muhafazası için en ideal ambalaj türlerinden biridir. Teneke ambalaj ışık geçirmez yapısı sayesinde zeytinyağının oksidasyonunu önler ve uzun süre kalitesini korumasını sağlar.

## Teneke Ambalajın Avantajları

- **Işık Geçirmezlik**: UV ışınlarına karşı tam koruma
- **Oksidasyona Karşı Koruma**: Hava geçirmez yapı
- **Uzun Raf Ömrü**: Kaliteyi uzun süre korur
- **Geri Dönüşüm**: %100 geri dönüştürülebilir
- **Dayanıklılık**: Taşıma ve depolamada yüksek dayanıklılık

## Etiketsiz Teneke

Ürünlerimiz etiketsiz olarak gönderilmektedir. Bu sayede:
- Kendi markanızla etiketleyebilirsiniz
- Private label satış yapabilirsiniz
- Fason üretim olarak kullanabilirsiniz

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: '5 litre teneke zeytinyağı fiyatı nedir?',
                answer: 'Güncel 5 litre teneke zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
            {
                question: 'Teneke zeytinyağı ne kadar dayanır?',
                answer: 'Teneke ambalajda muhafaza edilen zeytinyağı, uygun koşullarda (serin, karanlık ortam) 18-24 ay boyunca kalitesini koruyabilir.',
            },
        ],
    },
    {
        slug: '5-lt-pet-zeytinyagi',
        name: '5 Lt PET Zeytinyağı',
        title: '5 Litre PET Zeytinyağı | 5 Lt PET Şişe Fiyat | Lider Zeytincilik',
        metaDescription: '5 litre PET şişe zeytinyağı. Etiketsiz PET ambalajda ekonomik zeytinyağı. Toptan ve perakende satış. Türkiye geneli ücretsiz kargo.',
        h1: '5 Litre PET Zeytinyağı',
        shortDescription: 'Ekonomik ve pratik PET ambalajda 5 litrelik zeytinyağı.',
        image: '/images/filling-conveyor.png',
        content: `## 5 Litre PET Zeytinyağı

5 litre PET (polietilen tereftalat) ambalaj, zeytinyağı için ekonomik ve pratik bir ambalaj seçeneğidir. Hafif yapısı ve kolay taşınabilirliği ile özellikle günlük kullanım için tercih edilmektedir.

## PET Ambalajın Özellikleri

- **Hafiflik**: Tenekeye göre daha hafif
- **Ekonomiklik**: Uygun fiyatlı ambalaj seçeneği
- **Pratiklik**: Kolay kullanım ve dökme
- **Şeffaflık**: Yağ seviyesini görme imkanı

## Saklama Önerileri

PET ambalajda zeytinyağı saklarken:
- Güneş ışığından uzak tutun
- Serin ortamda muhafaza edin
- Ağzını sıkıca kapatın
- Mümkünse karanlık bir dolap içinde saklayın

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: '5 litre PET zeytinyağı fiyatı nedir?',
                answer: 'Güncel 5 litre PET zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz.',
            },
        ],
    },
    {
        slug: '10-lt-zeytinyagi',
        name: '10 Lt Zeytinyağı',
        title: '10 Litre Zeytinyağı | 10 Lt Zeytinyağı Fiyat | Lider Zeytincilik',
        metaDescription: '10 litre zeytinyağı toptan ve perakende satış. Kalabalık aileler ve işletmeler için ideal boyut. Ücretsiz kargo ile Türkiye geneline teslimat.',
        h1: '10 Litre Zeytinyağı',
        shortDescription: 'Kalabalık aileler ve işletmeler için ekonomik 10 litrelik zeytinyağı ambalajı.',
        image: '/images/factory-pallets.png',
        content: `## 10 Litre Zeytinyağı

10 litre zeytinyağı ambalajımız, kalabalık aileler, restoranlar, oteller ve toplu tüketim yapan işletmeler için ideal boyuttadır. Hem ekonomik fiyat avantajı hem de uzun süreli kullanım imkanı sunar.

## Kimler İçin Uygundur?

- Kalabalık aileler
- Restoranlar ve lokantalar
- Oteller ve tatil köyleri
- Yemek fabrikaları
- Catering firmaları
- Toplu tüketim yapan işletmeler

## Ambalaj Seçenekleri

10 litre zeytinyağımız teneke ambalajda sunulmaktadır. Tüm ambalajlarımız etiketsizdir.

**Fiyat bilgisi ve sipariş için:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: '10 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 10 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
        ],
    },
    {
        slug: 'zeytinyagi-toptan',
        name: 'Zeytinyağı Toptan',
        title: 'Üreticiden Uygun Fiyatlı Toptan Zeytinyağı | Fabrika Satış | Lider Zeytincilik',
        metaDescription: 'Toptan zeytinyağı üreticiden uygun fiyatla! Fabrikadan direkt, aracısız satış. Natürel sızma, soğuk sıkım, riviera. Zeytinyağı Liderden Alınır!',
        h1: 'Üreticiden Uygun Fiyatlı Toptan Zeytinyağı',
        shortDescription: 'Üreticiden doğrudan toptan zeytinyağı satışı. En uygun fiyatlar ve esnek ödeme seçenekleri.',
        image: '/images/modern-warehouse.png',
        content: `## Zeytinyağı Toptan Satış

Lider Zeytincilik olarak Türkiye genelinde zeytinyağı toptan satış hizmeti sunuyoruz. Fabrikamızdan doğrudan, aracısız toptan zeytinyağı tedariki ile işletmenize maliyet avantajı sağlıyoruz.

## Toptan Zeytinyağı Çeşitlerimiz

- **Natürel Sızma Zeytinyağı** - Premium kalite
- **Soğuk Sıkım Zeytinyağı** - En doğal
- **Riviera Zeytinyağı** - Ekonomik
- **Organik Zeytinyağı** - Sertifikalı

## Toptan Ambalaj Seçenekleri

- 1 Lt ambalaj
- 5 Lt teneke ambalaj
- 5 Lt PET ambalaj
- 10 Lt teneke ambalaj
- Daha büyük miktarlar için özel çözümler

## Toptan Satış Avantajlarımız

- Fabrikadan doğrudan satış
- Aracısız, en uygun fiyat
- Toptan alımlarda pazarlık payı
- Esnek ödeme seçenekleri
- Düzenli tedarik garantisi
- Etiketsiz ambalaj (private label imkanı)
- Türkiye geneli ücretsiz kargo/ambar gönderim
- Kalite garantisi ve analiz raporu

## Toptan Alım Süreci

1. WhatsApp'tan iletişime geçin (0552 382 8456)
2. İhtiyacınız olan ürün ve miktarı belirtin
3. Özel toptan fiyat teklifimizi alın
4. Siparişinizi onaylayın
5. Ürünleriniz hazırlanıp gönderilsin

**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: 'Toptan zeytinyağı minimum sipariş miktarı nedir?',
                answer: 'Toptan siparişlerde minimum sipariş miktarı ürün çeşidine göre değişmektedir. Detaylı bilgi için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz.',
            },
            {
                question: 'Toptan zeytinyağı fiyatları nedir?',
                answer: 'Toptan fiyatlarımız sipariş miktarı, ürün çeşidi ve ambalaj tipine göre değişmektedir. En güncel fiyat bilgisi için bizimle iletişime geçebilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
            {
                question: 'Toptan alımda ödeme nasıl yapılır?',
                answer: 'Havale/EFT, kapıda ödeme ve taksitli ödeme seçeneklerimiz mevcuttur. Toptan siparişlerde esnek ödeme planları sunuyoruz.',
            },
        ],
    },
    {
        slug: 'zeytinyagi-uretici',
        name: 'Zeytinyağı Üretici',
        title: 'Üreticiden Uygun Fiyatlı Zeytinyağı | Zeytinyağı Fabrikası | Lider Zeytincilik',
        metaDescription: 'Lider Zeytincilik - Zeytinyağı üretici. Üreticiden uygun fiyatlı zeytinyağı. Ege Bölgesinde modern tesislerde üretim. Zeytinyağı Liderden Alınır!',
        h1: 'Üreticiden Uygun Fiyatlı Zeytinyağı',
        shortDescription: 'Ege\'nin bereketli topraklarında modern tesislerde zeytinyağı üretimi yapan güvenilir üretici.',
        image: '/images/extraction-process.png',
        content: `## Zeytinyağı Üretici - Lider Zeytincilik

Lider Zeytincilik olarak, Ege Bölgesi'nin en verimli zeytin bahçelerinden toplanan zeytinlerle, modern üretim tesislerimizde kaliteli zeytinyağı üretimi yapıyoruz.

## Üretim Kapasitemiz

- Modern soğuk sıkım üretim hatları
- Paslanmaz çelik depolama tankları
- Laboratuvar analiz kapasitesi
- Günlük yüksek tonajlı üretim kapasitesi
- Sürekli sıcaklık kontrolü

## Üretim Sürecimiz

1. **Zeytin Tedariki**: Ege Bölgesi'nin en kaliteli zeytin bahçelerinden
2. **Kalite Kontrolü**: Her parti zeytin için kalite değerlendirmesi
3. **Yıkama ve Temizleme**: Otomatik yıkama hatlarında
4. **Kırma ve Malaksasyon**: Modern ekipmanlarla, kontrollü sıcaklıkta
5. **Dekantasyon**: İki fazlı dekantör sistemi ile yağ ayırma
6. **Depolama**: Azot atmosferinde, paslanmaz çelik tanklarda
7. **Ambalajlama**: Hijyenik koşullarda, etiketsiz ambalajlama
8. **Sevkiyat**: Türkiye geneline kargo ve ambar ile gönderim

## Neden Lider Zeytincilik?

- Doğrudan üretici olarak aracısız fiyat
- Modern üretim tesisleri
- Kalite kontrol laboratuvarı
- Sürdürülebilir üretim pratikleri
- Türkiye geneli dağıtım ağı

**İletişim:** 0552 382 8456 (WhatsApp)`,
        faq: [
            {
                question: 'Lider Zeytincilik nerede üretim yapıyor?',
                answer: 'Üretim tesislerimiz Ege Bölgesi\'nde, Aydın ilinde yer almaktadır. Zeytinlerimiz başta Aydın ve çevresi olmak üzere Ege\'nin en verimli zeytin bahçelerinden temin edilmektedir.',
            },
            {
                question: 'Fason üretim yapıyor musunuz?',
                answer: 'Evet, fason zeytinyağı üretimi yapıyoruz. Kendi markanızla etiketleme ve ambalajlama hizmeti sunuyoruz. Detaylar için bizimle iletişime geçebilirsiniz.',
            },
        ],
    },
    {
        slug: 'zeytinyagi-tedarikci',
        name: 'Zeytinyağı Tedarikçi',
        title: 'Güvenilir Zeytinyağı Tedarikçisi | Üreticiden Uygun Fiyat | Lider Zeytincilik',
        metaDescription: 'Güvenilir zeytinyağı tedarikçisi Lider Zeytincilik. Restoranlar, oteller ve marketler için düzenli tedarik. Üreticiden uygun fiyatlı, kaliteli, kesintisiz.',
        h1: 'Güvenilir Zeytinyağı Tedarikçisi',
        shortDescription: 'İşletmeniz için güvenilir, düzenli ve kaliteli zeytinyağı tedarik hizmeti.',
        image: '/images/delivery-van-plain.png',
        content: `## Zeytinyağı Tedarikçi - Lider Zeytincilik

İşletmeniz için güvenilir bir zeytinyağı tedarikçisi mi arıyorsunuz? Lider Zeytincilik olarak Türkiye genelinde restoranlar, oteller, marketler ve gıda işletmelerine düzenli zeytinyağı tedariki sağlıyoruz.

## Tedarik Hizmetimiz

- **Düzenli Teslimat**: Belirlenen periyotlarda düzenli zeytinyağı sevkiyatı
- **Stok Takibi**: İhtiyacınıza göre stok planlaması
- **Sabit Kalite**: Her teslimatda aynı kalite standardı
- **Esnek Miktar**: İhtiyacınıza göre değişen sipariş miktarları
- **Özel Fiyat**: Sözleşmeli tedariklerde özel fiyatlandırma

## Hangi İşletmelere Hizmet Veriyoruz?

- Restoranlar ve lokantalar
- Oteller ve tatil köyleri
- Süpermarket ve marketler
- Catering firmaları
- Yemek fabrikaları
- Gıda toptancıları
- Zincir mağazalar

**İletişim:** 0552 382 8456 (WhatsApp)
**Toptan alımlarda pazarlık payı vardır.**`,
        faq: [
            {
                question: 'Zeytinyağı tedarik sözleşmesi yapıyor musunuz?',
                answer: 'Evet, düzenli tedarik ihtiyacı olan işletmelerle sözleşmeli tedarik anlaşması yapıyoruz. Bu sayede sabit fiyat ve düzenli teslimat garantisi sunuyoruz.',
            },
            {
                question: 'Minimum tedarik miktarı var mı?',
                answer: 'Sözleşmeli tedariklerde minimum sipariş miktarı ürün çeşidine göre değişmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.',
            },
        ],
    },
    {
        slug: 'siyah-zeytin-cesitleri',
        name: 'Siyah Zeytin Çeşitleri',
        title: 'Üreticiden Uygun Siyah Zeytin Çeşitleri | Gemlik, Uslu, Memecik | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı tam yağlı kömür siyahı Gemlik, Uslu ve Memecik zeytinleri. Geleneksel yöntemle salamura. Zeytin Liderden Alınır! Toptan ve perakende satış.',
        h1: 'Üreticiden Uygun Fiyatlı Siyah Zeytin Çeşitleri',
        shortDescription: 'Dalında olgunlaşmış, geleneksel salamura yöntemleriyle hazırlanan tam yağlı siyah zeytinler.',
        image: '/images/categories/black-olives.png',
        content: `## Siyah Zeytin Çeşitlerimizin Özellikleri

Lider Zeytincilik olarak, Ege ve Marmara'nın en seçkin zeytin bahçelerinden topladığımız siyah zeytinleri, hiçbir kimyasal işlem uygulamadan sadece tuz ve su ile salamura ederek sofralarınıza ulaştırıyoruz.

### Gemlik (Trilye) Tipi Siyah Zeytin
İnce kabuklu, küçük çekirdekli ve bol etli yapısıyla Türkiye'nin en sevilen siyah zeytinidir. Tam yağlı yapısı ve kendine has aromasıyla kahvaltıların vazgeçilmezidir.

### Uslu Tipi Siyah Zeytin
Manisa bölgesine özgü, meyve eti yumuşak ve parlak siyah renkli bir çeşittir. Çekirdeklerinden kolay ayrılan yapısıyla bilinir.

### Memecik Siyah Zeytin
Aydın ve çevresinde yetişen, yüksek yağ oranına ve yoğun bir meyvemsi tada sahip, iri taneli siyah zeytin çeşidimizdir.

**Üreticiden Uygun Fiyata Sipariş İçin:** 0552 382 8456 (WhatsApp)
*Toptan alımlarda özel iskonto uygulanır.*`,
        faq: [
            { question: 'Siyah zeytinlerinize boya veya kimyasal ekliyor musunuz?', answer: 'Kesinlikle hayır. Zeytinlerimiz doğal fermente yöntemle, sadece tuz ve su kullanılarak siyahlaştırılır. Rengi çekirdeğine kadar doğaldır.' },
            { question: 'Zeytinleriniz çok tuzlu mu?', answer: 'Salamura sonrası zeytinlerimiz paketlenmeden önce tuz oranı dengelenir. Tüketmeden önce 15 dakika ılık suda bekletmek tuz oranını daha da azaltacaktır.' }
        ]
    },
    {
        slug: 'yesil-zeytin-cesitleri',
        name: 'Yeşil Zeytin Çeşitleri',
        title: 'Üreticiden Uygun Yeşil Zeytin Çeşitleri | Domat, Çizik, Kırma | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı Domat, Kırma ve Çizik yeşil zeytinler. Erken hasat, taze ve kıtır yapıda doğal yeşil zeytin çeşitleri. Hemen WhatsApptan sipariş verin.',
        h1: 'Üreticiden Uygun Fiyatlı Yeşil Zeytin Çeşitleri',
        shortDescription: 'Erken hasat döneminde toplanan, çıtır yapıda ve yoğun meyvemsi tada sahip doğal yeşil zeytinler.',
        image: '/images/categories/green-olives.png',
        content: `## Yeşil Zeytin Çeşitlerimiz

Hasat sezonunun başında, zeytinler henüz yeşilken toplanan ve özel yöntemlerle hazırlanan çıtır yeşil zeytinlerimizle tanışın.

### Domat Tipi Yeşil Zeytin
İri taneli ve dolgun etli yapısıyla çizik veya dolgulu zeytin yapımı için en ideal çeşittir. Kıtır yapısı uzun süre korunur.

### Kırma (Ayvalık/Edremit) Yeşil Zeytin
Zeytinlerin taşla kırılarak acısuyunun kısa sürede atılmasıyla hazırlanan en taze yeşil zeytin türüdür. Yoğun meyvemsi ve hafif ekşi tadıyla bilinir.

### Çizik Yeşil Zeytin
Zeytin tanelerinin üzerine jiletle çizikler atılarak salamuraya bırakılan, kendine has aroması ve yağıyla öne çıkan geleneksel bir lezzettir.

**Üreticiden Uygun Fiyata Sipariş İçin:** 0552 382 8456 (WhatsApp)
*Toptan alımlarda özel iskonto uygulanır.*`,
        faq: [
            { question: 'Yeşil zeytinler neden yumuşamaz?', answer: 'Zeytinlerimizi Domat gibi sert etli çeşitlerden seçtiğimiz ve doğal yöntemle fermente ettiğimiz için formunu uzun süre korur.' },
            { question: 'Zeytinlerin suyu neden bulanık görünüyor?', answer: 'Doğal fermente zeytinlerde suyun hafif bulanık olması normaldir. Bu, zeytinin kendi özsuyunun ve faydalı bakterilerin suya geçmesinden kaynaklanır.' }
        ]
    },
    {
        slug: 'erken-hasat-zeytinyagi',
        name: 'Erken Hasat Zeytinyağı',
        title: 'Erken Hasat Soğuk Sıkım Zeytinyağı Fiyatları | Lider Zeytincilik',
        metaDescription: 'En taze hasat! Ekim ayı başında toplanan yeşil zeytinlerden üretilen erken hasat soğuk sıkım zeytinyağı. Düşük asit, yüksek polifenol. Üreticiden uygun fiyat.',
        h1: 'Erken Hasat Soğuk Sıkım Zeytinyağı',
        shortDescription: 'Zeytinler henüz yeşilken toplanan, meyvemsi aroması en yüksek seviyede olan premium zeytinyağı.',
        image: '/images/traditional-harvest.png',
        content: `## Erken Hasat Zeytinyağı Nedir?

Erken hasat zeytinyağı, zeytinlerin tam olgunluğa erişmeden, henüz yeşil renkteyken (genellikle Eylül sonu - Ekim başı) toplanıp işlenmesiyle elde edilen zeytinyağıdır. Bu dönemde zeytinlerin içindeki yağ oranı düşük ancak besin değerleri, antioksidanlar ve polifenoller en yüksek seviyededir.

### Neden Erken Hasat?

- **Daha Fazla Polifenol**: Sağlık için kritik olan antioksidanlar yeşil zeytinde çok daha yoğundur.
- **Eşsiz Aroma**: Taze çimen, çağla, domates yaprağı ve yeşil elma notaları baskındır.
- **Düşük Asit**: Erken toplanan zeytinlerin asit oranı genellikle %0.3-0.4 bandındadır.
- **Şifa Kaynağı**: Özellikle çiğ tüketim için (kahvaltı, salata) tavsiye edilen en kaliteli yağdır.

Lider Zeytincilik olarak, Aydın bahçelerimizden özenle topladığımız yeşil zeytinlerimizi aynı gün içinde 27 derecenin altında soğuk sıkım yöntemiyle işliyoruz.`,
        faq: [
            { question: 'Erken hasat zeytinyağı neden yakıcıdır?', answer: 'Boğazda hissedilen yakıcılık, yağın içindeki yüksek polifenol (antioksidan) miktarından kaynaklanır ve kalite göstergesidir.' },
            { question: 'Zeytinyağı rengi neden daha koyu yeşil?', answer: 'Yeşil zeytindeki klorofil miktarı yüksek olduğu için erken hasat yağlar başlangıçta daha belirgin bir yeşil renge sahiptir.' }
        ]
    },
    {
        slug: 'polifenol-zeytinyagi',
        name: 'Yüksek Polifenollü Zeytinyağı',
        title: 'Yüksek Polifenollü Zeytinyağı (Sağlık İksiri) | Lider Zeytincilik',
        metaDescription: 'Yüksek polifenollü zeytinyağı ile sağlığınızı koruyun. 400+ mg/kg polifenol değerine sahip analizli şifa kaynağı zeytinyağları üreticiden kapınıza.',
        h1: 'Yüksek Polifenollü (Analizli) Zeytinyağı',
        shortDescription: 'Antioksidan değeri en üst seviyede tutulmuş, laboratuvar onaylı şifalı zeytinyağı.',
        image: '/images/quality-inspection.png',
        content: `## Polifenol Nedir ve Neden Önemlidir?

Polifenoller, zeytinyağında bulunan ve bitkinin kendisini dış etkenlerden korumak için ürettiği doğal antioksidanlardır. İnsan vücudunda serbest radikallerle savaşarak hücre onarımına yardımcı olur, kalp-damar sağlığını destekler ve bağışıklık sistemini güçlendirir.

### Lider Zeytincilik Polifenol Standartları

Ürettiğimiz özel seri yüksek polifenollü zeytinyağlarımız:
1. **Analizli**: Polifenol değerleri laboratuvar tetkikleri ile belgelenmiştir.
2. **Soğuk Sıkım**: Polifenollerin ısıdan zarar görmemesi için 24-26 derecede sıkılmıştır.
3. **Krom Tanklarda Koruma**: Oksijen temasını kesen azotlu krom tanklarda muhafaza edilmektedir.

Hastalıklarla mücadelede destekleyici olarak ve çocukların gelişim döneminde "tek ilaçsız takviye" olarak güvenle kullanılabilir.`,
        faq: [
            { question: 'Polifenol oranı ne kadar olmalı?', answer: 'Sağlık beyanı için genellikle 250 mg/kg üzeri polifenol yeterli görülür. Premium serilerimizde bu değer 450-500 mg/kg seviyelerine çıkmaktadır.' },
            { question: 'Nasıl tüketilmelidir?', answer: 'Besin değerinden tam faydalanmak için sabahları aç karnına bir yemek kaşığı çiğ olarak tüketilmesi önerilir.' }
        ]
    },
    {
        slug: 'etiketsiz-zeytinyagi',
        name: 'Etiketsiz Zeytinyağı',
        title: 'Toptan Etiketsiz Zeytinyağı (Private Label) | Lider Zeytincilik',
        metaDescription: 'Kendi markasını yaratmak isteyenlere etiketsiz 5 Lt, 10 Lt, 18 Lt teneke zeytinyağı. Fabrikadan direkt, yüksek kaliteli, analizli dökme zeytinyağı.',
        h1: 'Toptan Etiketsiz (Dökme) Zeytinyağı',
        shortDescription: 'Private label (kendi markanı oluştur) sistemine uygun, yüksek kaliteli etiketsiz ambalajlar.',
        image: '/images/retail-boxes-2.png',
        content: `## Kendi Markanızı Lider Zeytincilik ile Kurun

Zeytinyağı sektörüne girmek istiyor ancak üretim tesisi maliyetleriyle uğraşmak istemiyorsanız 'Etiketsiz Ürün' seçeneğimiz tam size göre. Ege'nin en kaliteli zeytinyağlarını, isterseniz 5 litrelik tenekelerde, isterseniz daha büyük hacimlerde etiketsiz olarak kapınıza getiriyoruz.

### Etiketsiz Zeytinyağı Avantajları

1. **Marka Özgürlüğü**: Ürünlerin üzerine kendi logo ve marka etiketinizi yapıştırarak satışa sunabilirsiniz.
2. **Düşük Başlangıç Maliyeti**: Fabrika yatırımı yapmadan kendi zeytinyağı markanıza sahip olursunuz.
3. **Sürekli Kalite**: Lider Zeytincilik olarak sürdürülebilir kalite garantisi veriyoruz.
4. **Analiz Desteği**: Ürünlerimiz laboratuvar analizlerinden geçirilmiş, satışa hazır ürünlerdir.

Oteller, restoranlar ve gurme şarküteriler için en karlı iş modeli budur.`,
        faq: [
            { question: 'Minimum alım miktarı nedir?', answer: 'Etiketsiz ürünlerde palet bazlı veya koli bazlı alımlarda özel fiyatlandırma yapıyoruz. Detaylı bilgi için WhatsApp üzerinden ulaşabilirsiniz.' },
            { question: 'Ambalaj seçenekleri nelerdir?', answer: '1 litreden 18 litreye kadar teneke, PET ve cam şişe seçeneklerimiz mevcuttur.' }
        ]
    },
    {
        slug: 'sofralik-zeytinyagi',
        name: 'Sofralık Yemeklik Zeytinyağı',
        title: 'Ekonomik Sofralık Yemeklik Zeytinyağı Fiyatları | Lider Zeytincilik',
        metaDescription: 'Her yemeğe lezzet katan, yüksek ısıya dayanıklı ekonomik sofralık zeytinyağı çeşitleri. 5 Lt ve 10 Lt ambalaj seçenekleriyle üreticiden kapınıza.',
        h1: 'Lezzetli Sofralık Yemeklik Zeytinyağı',
        shortDescription: 'Hem sıcak yemeklerde hem soğuk sunumlarda kullanabileceğiniz dengeli ve ekonomik zeytinyağı.',
        image: '/images/process-collage.png',
        content: `## Sofraların Vazgeçilmezi: Yemeklik Zeytinyağı

Her mutfağın kalbi zeytinyağıdır. Lider Zeytincilik olarak, sadece salatalarda değil, tüm sıcak sulu yemeklerde, kızartmalarda ve hamur işlerinde güvenle kullanabileceğiniz 'Sofralık' serimizi geliştirdik.

### Neden Yemeklik Serimiz?

- **Dengeli Tat**: Ne çok keskin ne de çok hafif; yemeklerin tadını örtmeyen mükemmel denge.
- **Yüksek Isı Dayanımı**: Rafinasyon ve doğal harman dengesiyle kızartmalarda dumanlama yapmaz.
- **Ekonomik Ambalaj**: 5, 10 ve 18 litrelik boyutlarla mutfak bütçenizi korur.
- **Besleyici**: Diğer bitkisel yağlara (çiçek, mısır) oranla çok daha sağlıklı bir bitiş sağlar.

Sulu yemeklerden pilavlara, kızartmalardan böreklerinize kadar Ege'nin hafifliğini sofranıza taşıyın.`,
        faq: [
            { question: 'Sofralık yağ sızma mı riviera mı?', answer: 'Sofralık serimiz genellikle asidi düzenlenmiş doğal harmanlardan oluşur, bu sayede hem hafif hem de dayanıklıdır.' },
            { question: 'Kızartma kokusu yapar mı?', answer: 'Ürünlerimiz koku yapmayan, temiz sıkım teknikleriyle üretilmiştir.' }
        ]
    },
    {
        slug: 'memecik-zeytinyagi',
        name: 'Memecik Zeytinyağı',
        title: 'Gerçek Memecik Zeytinyağı (Aydın) Fiyatları | Lider Zeytincilik',
        metaDescription: 'Aydın yöresinin karakteristik Memecik cinsi zeytinlerinden üretilen, AB tescilli, meyvemsi ve aromatik Memecik zeytinyağı. Üreticiden taze sıkım.',
        h1: 'Aydın&apos;ın Mirası: Memecik Zeytinyağı',
        shortDescription: 'Avrupa Birliği tescilli, yüksek fenolik bileşenlere sahip Aydın yöresinin karakteristik zeytinyağı.',
        image: '/images/ancient-olive-tree.png',
        content: `## Memecik Zeytinyağı: Ege'nin Gururu

Memecik zeytini, özellikle Aydın ve Muğla (Güney Ege) bölgelerinde yetişen, hem sofralık hem de yağlık olarak dünyanın en kaliteli zeytin çeşitlerinden biri olarak kabul edilir. Lider Zeytincilik olarak bahçelerimizdeki asırlık Memecik ağaçlarımızdan en saf yağı süzüyoruz.

### Memecik Zeytinyağının Ayırıcı Özellikleri

- **Yoğun Meyvemsilik**: Domates sapı, çağla ve taze ot kokularını en derin şekilde hissedersiniz.
- **Yüksek Besin Değeri**: Analizlerde diğer çeşitlere göre genellikle daha yüksek polifenol değerleri sunar.
- **Altın Sarısı Renk**: Olgun hasatta altın sarısı, erken hasatta canlı bir yeşil renge sahiptir.
- **AB Tescili**: Aydın Memecik Zeytinyağı, Avrupa Birliği'nden coğrafi işaret tescili almış nadir lezzetlerden biridir.

Gerçek bir gurme deneyimi ve şifa niyetine bir zeytinyağı arıyorsanız, Memecik serimizi mutlaka denemelisiniz.`,
        faq: [
            { question: 'Memecik yağının tadı nasıldır?', answer: 'Memecik yağı aromatik olarak çok zengindir. Ağızda bıraktığı o meyvemsi tat ve boğazdaki hafif yakıcılık onun karakteridir.' },
            { question: 'Hangi yemeklerde kullanılır?', answer: 'Özellikle zeytinyağlı Ege yemeklerinde ve taze otlarla hazırlanan mezelerde lezzeti zirveye taşır.' }
        ]
    },
    {
        slug: 'ayvalik-zeytinyagi',
        name: 'Ayvalık Zeytinyağı',
        title: 'Premium Ayvalık Natürel Sızma Zeytinyağı | Üreticiden',
        metaDescription: 'Ayvalık ve Edremit bölgesinin en kaliteli zeytinlerinden üretilen, meyvemsi aroması ve düşük asit oranıyla öne çıkan premium Ayvalık zeytinyağı.',
        h1: 'Premium Ayvalık Natürel Sızma Zeytinyağı',
        shortDescription: 'Kuzey Ege\'nin karakteristik meyvemsi aromasına sahip, düşük asitli premium Ayvalık zeytinyağı.',
        image: '/images/logistics-forklift.png',
        content: `Ayvalık (Edremit) tipi zeytinyağımız, Türkiye'nin en köklü zeytinyağı kültürüne sahip Kuzey Ege bölgesinden özenle seçilen zeytinlerden üretilir. Ayvalık zeytininin karakteristik özelliği olan yoğun meyvemsi aroma, genizdeki o hoş yakıcılık ve dengeli tat profili bu serimizde en saf haliyle sunulmaktadır.

Hasat döneminde zeytinler henüz yeşil-pembe arasındayken toplanır ve 27°C'nin altında soğuk sıkım yöntemiyle işlenir. Bu sayede zeytinin doğal polifenolleri ve E vitamini korunur. Ayvalık zeytinyağımız, özellikle çiğ tüketim, salatalar ve gurme sunumlar için mükemmel bir seçimdir.`,
        faq: [
            {
                question: 'Ayvalık zeytinyağının tadı nasıldır?',
                answer: 'Ayvalık zeytinyağı, meyvemsi aroması baskın, orta şiddette yakıcılığı ve acılığı olan, dengeli bir tat profiline sahiptir.'
            },
            {
                question: 'Ayvalık zeytinyağı asit oranı nedir?',
                answer: 'Premium seri Ayvalık zeytinyağlarımızın asit oranı %0.3 ile %0.6 arasındadır.'
            }
        ]
    },
    {
        slug: 'gemlik-zeytinyagi',
        name: 'Gemlik Zeytinyağı',
        title: 'Gemlik Tipi Natürel Sızma Zeytinyağı | Toptan ve Perakende',
        metaDescription: 'Sofralık kalitesiyle ünlü Gemlik (Trilye) zeytinlerinden elde edilen, yumuşak içimli ve doygun kıvamlı Gemlik zeytinyağı çeşitleri.',
        h1: 'Gemlik Tipi Natürel Sızma Zeytinyağı',
        shortDescription: 'Yumuşak içimi ve doygun kıvamıyla bilinen, sofralık kalitesi yüksek Gemlik zeytinlerinden elde edilen özel yağ.',
        image: '/images/product-tin-5l.jpg',
        content: `Gemlik (Trilye) tipi zeytinyağımız, sofralık kategorisinde bir world brand olan Gemlik zeytinlerinin yağlık olarak sınıflandırılan tanelerinden üretilir. Gemlik zeytininin yüksek yağ oranı ve etli yapısı, elde edilen yağa da doygun bir kıvam ve yumuşak bir içim kazandırır.

Özellikle asiditesi düşük ve aroması daha hafif yağları tercih edenler için Gemlik zeytinyağı ideal bir seçenektir. Hem sıcak yemeklerde hem de kahvaltılarda güvenle kullanılabilir. Lider Zeytincilik olarak Gemlik tipi yağlarımızı da tamamen mekanik ve doğal yöntemlerle üretiyoruz.`,
        faq: [
            {
                question: 'Gemlik zeytinyağı yemeklerde kullanılır mı?',
                answer: 'Evet, yumuşak içimi sayesinde hem sıcak sulu yemeklerde hem de zeytinyağlılarda harika sonuç verir.'
            },
            {
                question: 'Gemlik zeytinyağı donar mı?',
                answer: 'Evet, tüm gerçek natürel zeytinyağları gibi Gemlik zeytinyağı da soğuk havada kristalleşerek donar.'
            }
        ]
    },
    {
        slug: 'kislik-zeytinyagi',
        name: 'Kışlık Zeytinyağı',
        title: 'Toptan Kışlık Zeytinyağı Stokları | Ekonomik Fiyatlar',
        metaDescription: 'Kışlık tüketim için ideal, dayanıklı ve yüksek hacimli kışlık zeytinyağı serileri. 18 Lt teneke ve toptan alımlarda en uygun fiyat garantisi.',
        h1: 'Ekonomik Kışlık Zeytinyağı Stokları',
        shortDescription: 'Kış aylarında mutfakların ana yağ ihtiyacını karşılayan, dayanıklı ve ekonomik büyük ambalajlı ürünler.',
        image: '/images/factory-pallets.png',
        content: `Kışlık zeytinyağı serimiz, özellikle evlerin ve işletmelerin yıllık yağ ihtiyacını en ekonomik şekilde karşılamak amacıyla hazırlanmıştır. Hasat sezonunun ortasında ve sonunda toplanan zeytinlerden elde edilen bu yağlar, sızma ve birinci kalite standartlarını karşılayan, dayanıklı ve lezzetli ürünlerdir.

Genellikle 18 litrelik büyük tenekelerde veya 5 litrelik çoklu paketlerde tercih edilen kışlık serimiz, birim fiyat avantajıyla bütçenizi korur. Lider Zeytincilik olarak kışlık stoklarınızı Türkiye'nin her yerine ücretsiz kargo ve ambar seçenekleriyle ulaştırıyoruz.`,
        faq: [
            {
                question: 'Kışlık zeytinyağı ne kadar süre saklanabilir?',
                answer: 'Teneke ambalajda, serin and karanlık bir yerde 24 aya kadar ilk günkü tazeliğini koruyabilir.'
            },
            {
                question: 'Kışlık yağ ile sızma yağ arasında fark var mı?',
                answer: 'Kışlık yağlarımız da sızma kalite standartlarındadır, ancak daha büyük ambalajlarda sunulduğu için "kışlık stok" olarak adlandırılır.'
            }
        ]
    }
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
    return categories.map((c) => c.slug);
}
