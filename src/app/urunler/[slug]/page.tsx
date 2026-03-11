import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { siteConfig } from '@/lib/siteConfig';

interface ProductData {
    slug: string;
    name: string;
    size: string;
    title: string;
    metaDescription: string;
    h1: string;
    icon: string;
    content: string;
    specs: { label: string; value: string }[];
    usageAreas: string[];
    faq: { question: string; answer: string }[];
}

const productData: Record<string, ProductData> = {
    '1-lt-zeytinyagi': {
        slug: '1-lt-zeytinyagi',
        name: '1 Lt Zeytinyağı',
        size: '1 Litre',
        title: 'Üreticiden Uygun Fiyatlı 1 Litre Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı 1 litre zeytinyağı. Soğuk sıkım natürel sızma zeytinyağı 1 lt ambalajda. Zeytinyağı Liderden Alınır! Ücretsiz kargo ile kapınıza teslimat.',
        h1: 'Üreticiden Uygun Fiyatlı 1 Litre Zeytinyağı',
        icon: '🫒',
        content: `1 litre zeytinyağımız, bireysel kullanım ve ürünümüzü denemek isteyen müşterilerimiz için ideal boyuttadır. Ege Bölgesi'nin en kaliteli zeytinlerinden soğuk sıkım yöntemiyle üretilen natürel sızma zeytinyağımız, 1 litrelik şişe ambalajda sunulmaktadır.

Bu ambalaj boyutu özellikle tek kişilik veya az kişilik haneler, zeytinyağımızı ilk kez denemek isteyenler ve hediye amaçlı alımlar için tercih edilmektedir. 1 litrelik ambalajımız, zeytinyağının tazeliğini ve kalitesini en iyi şekilde koruyan şişe ambalajda sunulmaktadır.

Lider Zeytincilik olarak 1 litrelik zeytinyağımızı Türkiye'nin her yerine ücretsiz kargo ile gönderiyoruz. Ürünlerimiz etiketsiz olarak gönderilmektedir, kendi markanızla etiketleme imkanı sunar.

Üretim sürecimizde zeytinler 27°C'nin altında, tamamen mekanik yöntemlerle sıkılmaktadır. Bu sayede zeytinin doğal vitaminleri, antioksidanları ve polifenolleri korunmaktadır. Asit oranımız %0.3-0.5 arasında olup, en yüksek kalite standartlarını karşılamaktadır.`,
        specs: [
            { label: 'Ambalaj', value: 'Şişe' },
            { label: 'Hacim', value: '1 Litre' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Asit Oranı', value: '%0.3 - %0.5' },
            { label: 'Üretim', value: 'Soğuk Sıkım (27°C altı)' },
            { label: 'Menşei', value: 'Ege Bölgesi, Türkiye' },
            { label: 'Etiket', value: 'Etiketsiz' },
            { label: 'Raf Ömrü', value: '18 Ay' },
        ],
        usageAreas: [
            'Salatalar ve çeşniler',
            'Kahvaltılıklar',
            'Soğuk mezeler',
            'Son dokunuş olarak yemeklere ekleme',
            'Ekmek üzerine sürme',
            'Sağlıklı pişirme (düşük-orta ısıda)',
        ],
        faq: [
            {
                question: '1 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 1 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz.',
            },
            {
                question: '1 litre zeytinyağı ne kadar süre dayanır?',
                answer: 'Uygun koşullarda (serin, karanlık ortam) 1 litrelik zeytinyağımız 18 ay boyunca kalitesini koruyabilir. Açıldıktan sonra 3-6 ay içinde tüketilmesi önerilir.',
            },
        ],
    },
    '5-lt-zeytinyagi': {
        slug: '5-lt-zeytinyagi',
        name: '5 Lt Zeytinyağı',
        size: '5 Litre',
        title: 'Üreticiden Uygun Fiyatlı 5 Litre Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı 5 litre zeytinyağı teneke ve PET ambalajda. Soğuk sıkım natürel sızma kalite. Zeytinyağı Liderden Alınır! Hemen sipariş verin.',
        h1: 'Üreticiden Uygun Fiyatlı 5 Litre Zeytinyağı',
        icon: '🏺',
        content: `5 litre zeytinyağımız, aileler ve küçük işletmeler için en çok tercih edilen ambalaj boyutumuzdur. Teneke ve PET olmak üzere iki farklı ambalaj seçeneğinde sunulmaktadır.

Teneke ambalaj, ışık geçirmez yapısı sayesinde zeytinyağının oksidasyonunu önler ve uzun süre kalitesini korumasını sağlar. PET ambalaj ise daha hafif ve ekonomik bir alternatif sunmaktadır.

5 litrelik zeytinyağımız Ege Bölgesi'nin en kaliteli zeytinlerinden soğuk sıkım yöntemiyle üretilmektedir. Her iki ambalaj seçeneğimiz de etiketsiz olarak gönderilmekte, bu sayede kendi markanızla etiketleme imkanı sunmaktadır.

Toptan alımlarda 5 litrelik ürünlerimiz için özel fiyatlandırma yapılmaktadır. Restoranlar, oteller, marketler ve gıda toptancıları için düzenli tedarik hizmeti sunuyoruz. Türkiye geneli ücretsiz kargo veya ambar gönderim seçenekleri mevcuttur.`,
        specs: [
            { label: 'Ambalaj', value: 'Teneke / PET' },
            { label: 'Hacim', value: '5 Litre' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Asit Oranı', value: '%0.3 - %0.5' },
            { label: 'Üretim', value: 'Soğuk Sıkım (27°C altı)' },
            { label: 'Menşei', value: 'Ege Bölgesi, Türkiye' },
            { label: 'Etiket', value: 'Etiketsiz' },
            { label: 'Raf Ömrü', value: '18-24 Ay (teneke)' },
        ],
        usageAreas: [
            'Günlük mutfak kullanımı',
            'Salatalar ve çeşniler',
            'Pişirme ve kavurma',
            'Restoran ve lokanta kullanımı',
            'Private label satış',
            'Fason üretim',
        ],
        faq: [
            {
                question: '5 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 5 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
            {
                question: '5 litre teneke mi PET mi tercih etmeliyim?',
                answer: 'Teneke ambalaj ışık geçirmez yapısı ile uzun süreli muhafaza için idealdir. PET ambalaj ise daha hafif ve ekonomiktir. Uzun süre saklamak istiyorsanız teneke, kısa sürede tüketecekseniz PET tercih edebilirsiniz.',
            },
        ],
    },
    '10-lt-zeytinyagi': {
        slug: '10-lt-zeytinyagi',
        name: '10 Lt Zeytinyağı',
        size: '10 Litre',
        title: 'Üreticiden Uygun Fiyatlı 10 Litre Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı 10 litre zeytinyağı toptan satış. Restoran ve işletmeler için ekonomik büyük ambalaj. Zeytinyağı Liderden Alınır! Ücretsiz kargo.',
        h1: 'Üreticiden Uygun Fiyatlı 10 Litre Zeytinyağı',
        icon: '🛢️',
        content: `10 litre zeytinyağımız, kalabalık aileler, restoranlar, oteller ve toplu tüketim yapan işletmeler için en ekonomik ambalaj seçeneğimizdir. Teneke ambalajda sunulan 10 litrelik zeytinyağımız, hem birim fiyat avantajı hem de uzun süreli kullanım imkanı sunar.

Lider Zeytincilik'in 10 litrelik zeytinyağı, Ege Bölgesi'nin en kaliteli zeytinlerinden soğuk sıkım yöntemiyle üretilmektedir. Etiketsiz teneke ambalajımız, kendi markanızla etiketleme imkanı sunarak private label satış yapmanıza olanak tanır.

10 litrelik ürünümüz özellikle toptan alımlarda en çok tercih edilen boyutumuzdur. Restoranlar, lokantalar, oteller, catering firmaları ve gıda toptancıları için düzenli tedarik hizmeti sunuyoruz.

Türkiye geneli ücretsiz kargo veya ambar gönderim seçenekleri ile 10 litrelik zeytinyağımızı kapınıza kadar ulaştırıyoruz. Toptan siparişlerde özel fiyatlandırma ve pazarlık payı mevcuttur.`,
        specs: [
            { label: 'Ambalaj', value: 'Teneke' },
            { label: 'Hacim', value: '10 Litre' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Asit Oranı', value: '%0.3 - %0.5' },
            { label: 'Üretim', value: 'Soğuk Sıkım (27°C altı)' },
            { label: 'Menşei', value: 'Ege Bölgesi, Türkiye' },
            { label: 'Etiket', value: 'Etiketsiz' },
            { label: 'Raf Ömrü', value: '18-24 Ay' },
        ],
        usageAreas: [
            'Kalabalık aileler',
            'Restoranlar ve lokantalar',
            'Oteller ve tatil köyleri',
            'Catering firmaları',
            'Yemek fabrikaları',
            'Gıda toptancıları',
        ],
        faq: [
            {
                question: '10 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 10 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
            {
                question: '10 litre zeytinyağı nasıl gönderiliyor?',
                answer: '10 litrelik ürünlerimiz kargo veya ambar ile gönderilmektedir. Her iki yöntemde de Türkiye geneli ücretsiz gönderim yapıyoruz.',
            },
        ],
    },
    'gemlik-siyah-zeytin': {
        slug: 'gemlik-siyah-zeytin',
        name: 'Gemlik Tipi Siyah Zeytin',
        size: '1-2-5-10 Kg',
        title: 'Üreticiden Uygun Gemlik Tipi Siyah Zeytin | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı tam yağlı kömür siyahı Gemlik (Trilye) zeytini. Doğal salamura, ince kabuklu, küçük çekirdekli. Zeytin Liderden Alınır!',
        h1: 'Üreticiden Uygun Fiyatlı Gemlik Siyah Zeytin',
        icon: '⚫',
        content: `Gemlik zeytinimiz, Türkiye'nin en kaliteli zeytinlerinin yetiştiği bölgelerden toplanarak geleneksel yöntemlerle hazırlanır. İnce kabuklu, küçük çekirdekli ve bol etli yapısıyla kahvaltılıkların zirvesidir. Hiçbir boya veya kimyasal madde içermez. Tamamen doğal fermente yöntemiyle (sadece tuz ve su kullanılarak) 6-9 ay süren bir olgunlaşma sürecinden geçer. Çekirdeğinin bile kahverengi olması, doğal olduğunun en büyük kanıtıdır. Üreticiden doğrudan halka satış politikamızla, en kaliteli Gemlik zeytinine en uygun fiyatla ulaşmanızı sağlıyoruz.`,
        specs: [
            { label: 'Ambalaj', value: 'Vakum / Teneke / PET' },
            { label: 'Tür', value: 'Siyah Zeytin (Doğal Fermente)' },
            { label: 'Çeşit', value: 'Gemlik / Trilye' },
            { label: 'Kalibre', value: '231-260 (L) / 261-290 (M)' },
            { label: 'Hasat', value: 'Dalında Olgunlaşmış Siyah Hasat' },
            { label: 'Menşei', value: 'Ege / Marmara Bölgesi' },
            { label: 'İçerik', value: 'Zeytin, Tuz, Su' },
            { label: 'Muhafaza', value: 'Serin ve Kuru Yer' },
        ],
        usageAreas: [
            'Kahvaltılık sunumlar',
            'Salatalar ve piyazlar',
            'Hamur işleri (poğaça, açma)',
            'Meze tabakları',
            'Hediye paketleri',
        ],
        faq: [
            { question: 'Zeytinleriniz boyalı mı?', answer: 'Kesinlikle hayır. Zeytinlerimizin siyahlığı doğal fermente sürecinden gelmektedir.' },
            { question: 'Toptan alımda fiyat ne olur?', answer: 'Toptan alımlarda kg bazında özel fiyatlarımız mevcuttur. Lütfen WhatsApp üzerinden teklif isteyin.' },
        ],
    },
    'domat-yesil-zeytin': {
        slug: 'domat-yesil-zeytin',
        name: 'Domat Tipi Yeşil Zeytin',
        size: '1-2-5-10 Kg',
        title: 'Üreticiden Uygun Domat Tipi Yeşil Zeytin | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı kıtır yapıda Domat yeşil zeytin. Çizik ve Kırma seçenekleriyle taze hasat yeşil zeytin çeşitleri. Zeytin Liderden Alınır!',
        h1: 'Üreticiden Uygun Fiyatlı Domat Yeşil Zeytin',
        icon: '🟢',
        content: `Domat yeşil zeytinimiz, sezonun ilk hasadıyla birlikte toplanan, çıtır yapısı ve yüksek et oranıyla bilinen bir çeşittir. Çizik veya kırma olarak hazırlanan bu zeytinler, lezzetini zeytinin kendi doğal aromalarından alır. Üretim sürecinde kostik gibi kimyasal tatlandırıcılar kullanılmaz. Sadece kaya tuzu ve limon suyu ile hazırlanan salamurada tatlandırılır. Bu sayede zeytin tüm besin değerini korur. İri taneli yapısı ve sert dokusuyla kahvaltılarınızda gerçek bir zeytin deneyimi yaşatır.`,
        specs: [
            { label: 'Ambalaj', value: 'Teneke / PET' },
            { label: 'Tür', value: 'Yeşil Zeytin (Doğal Fermente)' },
            { label: 'Çeşit', value: 'Domat / Kırma / Çizik' },
            { label: 'Tat', value: 'Hafif Ekşimsi, Meyvemsi' },
            { label: 'Hasat', value: 'Erken Hasat (Yeşil)' },
            { label: 'Menşei', value: 'Ege Bölgesi' },
            { label: 'İçerik', value: 'Zeytin, Tuz, Limon Suyu, Su' },
            { label: 'Raf Ömrü', value: '1 Yıl' },
        ],
        usageAreas: [
            'Kahvaltılıklar',
            'Piknikler',
            'Zeytinyağı ve kekikli sunumlar',
            'Mezeler',
            'Market ve Şarküteri Reyonları',
        ],
        faq: [
            { question: 'Yeşil zeytinler neden ekşi?', answer: 'Doğal fermente sürecinde oluşan laktik asit ve kullandığımız limon suyu zeytine o hoş ekşiliği verir.' },
            { question: 'Kargo ile gönderimde bozulma olur mu?', answer: 'Zeytinlerimiz kendi salamura suyu içinde, sızdırmaz ambalajlarda gönderilir. Yolda bozulma riski yoktur.' },
        ],
    },
    'erken-hasat-soguk-sikim': {
        slug: 'erken-hasat-soguk-sikim',
        name: 'Erken Hasat Soğuk Sıkım Zeytinyağı',
        size: '5 Litre / 18 Litre',
        title: 'Premium Erken Hasat Soğuk Sıkım Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Yüksek polifenollü, düşük asitli erken hasat soğuk sıkım zeytinyağı. Dalından henüz yeşilken toplanan zeytinlerden 27 derecenin altında sıkım. Şifa kaynağı.',
        h1: 'Premium Erken Hasat Soğuk Sıkım Zeytinyağı',
        icon: '🍈',
        content: `Erken hasat soğuk sıkım zeytinyağımız, Ekim ayının başında zeytinler henüz yeşilken ve polifenol seviyesi en yüksek noktadayken toplanan zeytinlerden üretilir. Normal hasada göre daha az yağ verimi sağlansa da, elde edilen yağın kalitesi ve besin değeri çok daha yüksektir.

Hafif yakıcılığı ve meyvemsi aromasıyla karakterize olan bu ürünümüz, özellikle çiğ tüketim için (salatalar, kahvaltılar) önerilir. Kandaki kolesterolü dengeleme, kalp sağlığını koruma ve güçlü antioksidan etkisiyle tam bir şifa kaynağıdır.

Amacımız, Ege'nin bu eşsiz şifasını en saf haliyle sofralarınıza ulaştırmaktır. Üretim sürecinde zeytinler hava ile teması kesilerek, hızlı bir şekilde soğuk sıkım (cold press) yöntemiyle işlenir.`,
        specs: [
            { label: 'Hasat Dönemi', value: 'Ekim (Erken Hasat)' },
            { label: 'Ambalaj', value: 'Teneke' },
            { label: 'Asit Oranı', value: 'Max %0.3 - %0.4' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Aroma', value: 'Meyvemsi, Taze Çimen, Hafif Yakıcı' },
            { label: 'Polifenol', value: '350+ mg/kg' },
        ],
        usageAreas: [
            'Kahvaltılarda ekmek banarak tüketim',
            'Salatalarda sos olarak',
            'Soğuk mezelerde',
            'Sabahları aç karnına bir kaşık şifa niyetine',
            'Bebek ek gıdalarında',
        ],
        faq: [
            { question: 'Erken hasat neden daha pahalı?', answer: 'Yeşil zeytinden daha az yağ çıktığı için maliyeti daha yüksektir ancak besin değeri (polifenol) çok daha fazladır.' },
            { question: 'Neden yakıcı bir his bırakıyor?', answer: 'Bu yakıcılık zeytinyağının içeriğindeki yüksek antioksidan ve polifenol miktarını gösterir, yağın taze ve kaliteli olduğunun kanıtıdır.' },
        ],
    },
    'endustriyel-seri-zeytinyagi': {
        slug: 'endustriyel-seri-zeytinyagi',
        name: 'Endüstriyel Seri Zeytinyağı',
        size: '18 Litre - 50 Litre',
        title: 'Toptan Endüstriyel Seri Zeytinyağı | Restoran ve Catering İçin',
        metaDescription: 'Restoranlar, oteller ve yemek fabrikaları için ekonomik endüstriyel seri zeytinyağı. Sürekli standart kalite, yüksek yanma noktası, uygun fiyat.',
        h1: 'Ekonomik Endüstriyel Seri Zeytinyağı',
        icon: '🏭',
        content: `Endüstriyel seri zeytinyağımız, toplu tüketim yapan işletmelerin hem lezzet hem de maliyet dengesini koruması için özel olarak sınıflandırılmıştır. Restoranlar, oteller, catering firmaları ve gıda üreticileri için ideal bir çözümdür.

Yüksek ısıya dayanıklı yapısı sayesinde hem sıcak yemeklerde hem de soğuk sunumlarda performans kaybı yaşatmaz. Lider Zeytincilik olarak, işletmeniz için yıl boyu sürdürülebilir, standart kalite ve uygun fiyat garantisi sunuyoruz.

18 litrelik büyük teneke ambalajlar veya talep edilmesi durumunda IBC tanklar ile dökme olarak sevk edilebilmektedir. 81 il geneli ambar gönderimi veya kendi filomuzla lojistik destek sağlıyoruz.`,
        specs: [
            { label: 'Ambalaj', value: '18 Lt Teneke / IBC Tank' },
            { label: 'Tür', value: 'Natürel Birinci / Riviera' },
            { label: 'Hacim', value: 'Toptan / Endüstriyel' },
            { label: 'Asit Oranı', value: 'Max %1.5 - %2.0' },
            { label: 'Kullanım', value: 'Yemeklik / Kızartmalık' },
            { label: 'Stok Kalitesi', value: 'Sürekli ve Standart' },
        ],
        usageAreas: [
            'Sıcak sulu yemekler',
            'Hamur işleri ve pastaneler',
            'Kızartmalar ve soslar',
            'Toplu yemek üretimi (Catering)',
            'Otel açık büfeleri',
        ],
        faq: [
            { question: 'Toptan alımlarda indirim oluyor mu?', answer: 'Evet, koli ve palet bazlı alımlarda fabrika çıkış fiyatları üzerinden özel iskontolar uygulanmaktadır.' },
            { question: 'Numune gönderimi yapıyor musunuz?', answer: 'İşletmeler için ücretli/ücretsiz numune seçeneklerimiz mevcuttur. Lütfen kurumsal hat üzerinden ulaşın.' },
        ],
    },
    'gemlik-salamura-siyah-zeytin': {
        slug: 'gemlik-salamura-siyah-zeytin',
        name: 'Gemlik Salamura Siyah Zeytin',
        size: '2 Kg - 5 Kg - 10 Kg',
        title: 'Geleneksel Gemlik Salamura Siyah Zeytin | Lider Zeytincilik',
        metaDescription: 'Doğal salamura yöntemiyle 6-9 ayda olgunlaşan Gemlik tipi siyah zeytin. Kimyasal içermez, ince kabuklu, küçük çekirdekli ve tam yağlı.',
        h1: 'Geleneksel Gemlik Salamura Siyah Zeytin',
        icon: '🖤',
        content: `Gemlik tipi siyah zeytinimiz, dalında tamamen karardıktan sonra toplanan ve sadece kaya tuzu, su ve mısırözü yağı (koruyucu olarak üst katmana) kullanılarak hazırlanan doğal bir üründür. 

Kimyasal karartıcı (oksidasyon) veya kostik gibi hızlandırıcı yöntemler kesinlikle kullanılmaz. Zeytinlerimiz, "Baskı" veya "Salamura" yöntemleriyle havuzlarda 6 ile 9 ay arasında kendi hızıyla olgunlaşır. Bu süreç, zeytindeki acılığın doğal yolla atılmasını ve eşsiz aromasının korunmasını sağlar.

İnce kabuklu yapısı ve çekirdeğinden kolayca ayrılan etiyle Gemlik (Trilye) zeytini, sofralarınızın vazgeçilmezi olacak.`,
        specs: [
            { label: 'Üretim Biçimi', value: 'Doğal Salamura Fermente' },
            { label: 'Kalibre', value: '2XS - XS - S - M - L - XL' },
            { label: 'Tuz Rejimi', value: '%6 - %8 (Az Tuzlu)' },
            { label: 'Olgunlaşma', value: '6 - 9 Ay' },
            { label: 'Katkı Maddesi', value: 'İçermez (Boya/Kostik Yok)' },
            { label: 'Menşei', value: 'Marmara / Ege Bölgesi' },
        ],
        usageAreas: [
            'Geleneksel Türk kahvaltısı',
            'Meze tabakları',
            'Salatalar',
            'Hamur işleri (zeytinli ekmek/açma)',
        ],
        faq: [
            { question: 'Zeytinlerin çekirdeği neden kahverengi?', answer: 'Zeytinin çekirdeğinin kahverengi olması, o zeytinin boya içermediğinin ve doğal yollarla olgunlaştığının en önemli kanıtıdır.' },
            { question: 'Tuz oranını nasıl düşürürüm?', answer: 'Yemeden önce bir süre ılık suda bekleterek tuz oranını damak tadınıza göre ayarlayabilirsiniz.' },
        ],
    },
    'kirma-yesil-zeytin': {
        slug: 'kirma-yesil-zeytin',
        name: 'Kırma Yeşil Zeytin (Ayvalık/Domat)',
        size: '1 Kg - 2 Kg - 5 Kg',
        title: 'Taze Kırma Yeşil Zeytin | Çıtır ve Doğal Lezzet',
        metaDescription: 'Sezonun ilk hasadı taze kırma yeşil zeytin. Limon suyu ve kaya tuzu ile hazırlanan geleneksel lezzet. Katkısız, el yapımı kıvamında yeşil zeytin.',
        h1: 'Hasadın İlk Günü: Kırma Yeşil Zeytin',
        icon: '🔨',
        content: `Kırma yeşil zeytin, hasadın en taze ve "en diri" halidir. Erken hasat döneminde toplanan sert zeytinlerin taşla veya mekanik olarak kırılarak acı suyundan arındırılması ve ardından kaya tuzlu, limonlu salamuraya yatırılmasıyla elde edilir.

Bizim kırma zeytinlerimizi diğerlerinden ayıran, çıtır yapısı ve zeytinin meyvemsi tadının baskın olmasıdır. İçeriğinde limon asidi yerine gerçek limon suları kullanılır. Kısa süreli tüketim için en ideal ve en ferah zeytin çeşididir.

İster kahvaltıda zeytinyağı ve kekik ile, ister peynir yanında sunumlarınızda yer verin; Lider Zeytincilik kalitesini her ısırıkta hissedeceksiniz.`,
        specs: [
            { label: 'Çeşit', value: 'Ayvalık / Domat' },
            { label: 'Hazırlanış', value: 'Kırma (El Kırması Tadında)' },
            { label: 'Hasat', value: 'Eylül - Ekim (Taze Hasat)' },
            { label: 'Tat Profili', value: 'Hafif Ekşi, Çıtır, Taze' },
            { label: 'Paketleme', value: 'PET / Cam Kavanoz' },
            { label: 'Koruyucu', value: 'Limon Suyu, Tuz, Su' },
        ],
        usageAreas: [
            'Geleneksel kahvaltılar',
            'Zeytinyağı, pul biber ve kekikli meze sunumları',
            'Ara öğünler',
            'Piknikler (Pratik ambalaj)',
        ],
        faq: [
            { question: 'Kırma zeytin neden yumuşar?', answer: 'Hava alan zeytin veya salamura suyu azalan zeytin yumuşayabilir. Daima suyunun içinde saklamanızı öneririz.' },
            { question: 'Acılığı neden tam gitmemiş?', answer: 'Kırma zeytinde hafif bir acımtıraklık zeytinin doğallığını ve tazeliğini temsil eder. Sevenleri için en makbul hali budur.' },
        ],
    },
    'naturel-sizma-klasik': {
        slug: 'naturel-sizma-klasik',
        name: 'Natürel Sızma Klasik Zeytinyağı',
        size: '1-2-5-10-18 Litre',
        title: 'Klasik Natürel Sızma Zeytinyağı | Her Yemeğe Uygun Lezzet',
        metaDescription: 'Lider Zeytincilik klasik seri natürel sızma zeytinyağı. Dengeli aroması ve düşük asit oranıyla hem sıcak yemeklerde hem soğuklarda kusursuz sonuç.',
        h1: 'Natürel Sızma Klasik Zeytinyağı',
        icon: '🌿',
        content: `Klasik Natürel Sızma Zeytinyağımız, hasat sezonunun ortasında tam olgunluğa erişmiş zeytinlerden elde edilir. Erken hasadın keskin yakıcılığı ile riviera serisinin yumuşaklığı arasında mükemmel bir köprü kurar.

Hafif meyvemsi tadı ve dengeli asit oranı sayesinde mutfağın her alanında kullanılabilen çok amaçlı (all-purpose) bir zeytinyağıdır. Sıcak yemeklerinize lezzet katar, soğuk mezelerinizde ise zeytinyağı kokusunu baskın olmadan hissettirir.

Üretimimiz tamamen mekanik yöntemlerle ve ısıl işlem görmeden gerçekleştirilir. Lider Zeytincilik güvencesiyle, fabrikadan doğrudan kapınıza en taze haliyle ulaştırılır.`,
        specs: [
            { label: 'Hasat Zamanı', value: 'Kasım - Aralık' },
            { label: 'Tür', value: 'Natürel Sızma' },
            { label: 'Asit Oranı', value: 'Max %0.5 - %0.8' },
            { label: 'Aroma', value: 'Dengeli Meyvemsi' },
            { label: 'Ambalaj', value: 'Şişe / Teneke / PET' },
        ],
        usageAreas: [
            'Tüm sıcak yemekler',
            'Günlük salata ve mezeler',
            'Zeytinyağı kızartmaları',
            'Kahvaltılık sunumlar',
            'Pastane ve unlu mamuller',
        ],
        faq: [
            { question: 'Yemeklerde kullanımı uygun mu?', answer: 'Evet, klasik sızma serimiz hem aroması hem de yanma noktasıyla tüm sıcak yemekler için en ideal seçimdir.' },
            { question: 'Donuyor olması gerçek olduğunu mu gösterir?', answer: 'Zeytinyağının +4 derece civarında donması, yağın içindeki trigliserid yapısını gösterir ve genellikle kalitenin bir işaretidir ancak tek başına kanıt değildir.' },
        ],
    },
};

const productImages: Record<string, string> = {
    '1-lt-zeytinyagi': '/images/quality-inspection.png',
    '5-lt-zeytinyagi': '/images/product-tin-5l.jpg',
    '10-lt-zeytinyagi': '/images/factory-pallets.png',
    'gemlik-siyah-zeytin': '/images/categories/black-olives.png',
    'domat-yesil-zeytin': '/images/categories/green-olives.png',
    'erken-hasat-soguk-sikim': '/images/tins-in-grove.png',
    'naturel-sizma-klasik': '/images/tins-in-grove.png',
    'endustriyel-seri-zeytinyagi': '/images/factory-pallets.png',
    'gemlik-salamura-siyah-zeytin': '/images/categories/black-olives.png',
    'kirma-yesil-zeytin': '/images/categories/green-olives.png',
};


export async function generateStaticParams() {
    return Object.keys(productData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) return {};

    return {
        title: product.title,
        description: product.metaDescription,
        openGraph: {
            title: product.title,
            description: product.metaDescription,
            type: 'website',
            images: [{ url: productImages[slug] || '/images/product-tin-5l.jpg', width: 1200, height: 630, alt: product.name }],
        },
        alternates: {
            canonical: `${siteConfig.url}/urunler/${slug}`,
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) notFound();

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.metaDescription,
        image: `${siteConfig.url}${productImages[slug] || '/images/product-tin-5l.jpg'}`,
        brand: { '@type': 'Brand', name: 'Lider Zeytincilik' },
        manufacturer: { '@type': 'Organization', name: 'Lider Zeytincilik' },
        url: `${siteConfig.url}/urunler/${slug}`,
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'TRY',
            url: `${siteConfig.url}/urunler/${slug}`,
            seller: { '@type': 'Organization', name: 'Lider Zeytincilik' },
        },
        category: 'Zeytinyağı',
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <section className="bg-black/20 py-16 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[
                        { label: 'Ana Sayfa', href: '/' },
                        { label: 'Ürünler', href: '/urunler' },
                        { label: product.name },
                    ]} />
                </div>
            </section>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Product Image */}
                        <div className="relative group overflow-hidden rounded-none shadow-3xl border border-white/10 bg-white/5">
                            <img
                                src={productImages[slug] || '/images/product-tin-5l.jpg'}
                                alt={product.name}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute top-8 left-8 bg-gold-400 text-olive-950 px-6 py-2 rounded-none text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                                Üretimden Doğrudan
                            </div>
                            <div className="absolute bottom-8 right-8 glass p-6 rounded-none backdrop-blur-xl border border-white/20 shadow-2xl">
                                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-2">Ambalaj</p>
                                <p className="text-gold-400 font-serif font-black text-2xl leading-none">{product.specs.find(s => s.label === 'Ambalaj')?.value}</p>
                            </div>
                        </div>


                        {/* Product Info */}
                        <div className="pt-4">
                            <span className="inline-block bg-white/5 border border-white/10 text-gold-400 text-[10px] font-black px-5 py-2 rounded-none mb-8 uppercase tracking-[0.3em]">{product.size} Kapasite</span>
                            <h1 className="font-serif text-fluid-h1 font-black text-white mb-8 uppercase tracking-tighter leading-none">{product.h1}</h1>

                            <div className="prose prose-invert mb-12 max-w-none">
                                {product.content.split('\n\n').map((p, i) => (
                                    <p key={i} className="text-olive-200 text-fluid-body leading-relaxed font-light italic mb-6 opacity-70">
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 mb-12">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-olive-950 px-10 py-5 rounded-none font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-gold-500/20 active:scale-95 text-sm"
                                >
                                    Fiyat Bilgisi Al
                                </a>
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                    className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-none font-black uppercase tracking-[0.2em] transition-all border border-white/10 active:scale-95 text-sm"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    Ara: {siteConfig.phone}
                                </a>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-none p-8 text-xs font-black uppercase tracking-[0.2em] text-gold-400 italic text-center">
                                Toptan alımlarda fabrika satış fiyatları ve özel iskontolar uygulanmaktadır.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Delivery Context */}
            <section className="bg-olive-900 py-12 relative overflow-hidden">
                <img src="/images/delivery-van-plain.png" alt="Sevkiyat" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-none mb-6">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1m-6 0a1 1 0 001 1h1m-6 0H4" /></svg>
                        <span className="text-white font-bold tracking-tight">Türkiye&apos;nin 81 İline Güvenli Sevkiyat</span>
                    </div>
                </div>
            </section>


            {/* Specs & Usage */}
            <section className="py-24 bg-black/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Technical Specs */}
                        <div className="glass-card rounded-none p-10 border border-white/5 bg-white/5">
                            <h2 className="font-serif text-fluid-h3 font-black text-white mb-8 uppercase tracking-tight leading-none">Teknik <span className="text-gold-400 italic">Detaylar</span></h2>
                            <div className="space-y-4">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
                                        <span className="text-olive-400 text-xs font-black uppercase tracking-widest">{spec.label}</span>
                                        <span className="text-white font-serif font-black tracking-tight group-hover:text-gold-400 transition-colors uppercase">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Usage Areas */}
                        <div className="glass-card rounded-none p-10 border border-white/5 bg-white/5">
                            <h2 className="font-serif text-fluid-h3 font-black text-white mb-8 uppercase tracking-tight leading-none">Mutfakta <span className="text-gold-400 italic">Kullanım</span></h2>
                            <ul className="space-y-6">
                                {product.usageAreas.map((area, i) => (
                                    <li key={i} className="flex items-start gap-5 group">
                                        <span className="w-8 h-8 bg-white/5 rounded-none flex items-center justify-center text-[10px] text-gold-400 font-black border border-white/10 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all font-sans">{i + 1}</span>
                                        <p className="text-olive-200 font-light italic leading-relaxed group-hover:text-white transition-colors">{area}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <FAQSection items={product.faq} title={`${product.name} - Merak Edilenler`} />
                </div>
            </section>

        </>
    );
}
