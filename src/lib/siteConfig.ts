// Site-wide configuration and constants
export const siteConfig = {
    name: 'Lider Zeytincilik',
    domain: 'liderzeytincilik.com',
    url: 'https://liderzeytincilik.com',
    description: 'Üreticiden uygun fiyatlı zeytinyağı. Zeytinyağı Liderden Alınır! Soğuk sıkım, natürel sızma zeytinyağı fabrika satış fiyatlarıyla 81 ile ücretsiz kargo.',
    phone: '0552 382 8456',
    whatsapp: '905523828456',
    whatsappDisplay: '0552 382 8456',
    email: 'info@liderzeytincilik.com',
    address: 'Aydın, Türkiye',
    foundingYear: 2010,
    locale: 'tr_TR',
    ogImage: '/images/og-default.jpg',
};

export const navLinks = [
    { label: 'Ana Sayfa', href: '/' },
    {
        label: 'Ürünler',
        href: '/urunler',
        children: [
            { label: '1 Lt Zeytinyağı', href: '/urunler/1-lt-zeytinyagi' },
            { label: '5 Lt Zeytinyağı', href: '/urunler/5-lt-zeytinyagi' },
            { label: '10 Lt Zeytinyağı', href: '/urunler/10-lt-zeytinyagi' },
            { label: 'Siyah Zeytin', href: '/urunler/gemlik-siyah-zeytin' },
            { label: 'Yeşil Zeytin', href: '/urunler/domat-yesil-zeytin' },
        ],
    },
    {
        label: 'Kategoriler',
        href: '/kategori',
        children: [
            { label: 'Natürel Sızma Zeytinyağı', href: '/kategori/naturel-sizma-zeytinyagi' },
            { label: 'Soğuk Sıkım Zeytinyağı', href: '/kategori/soguk-sikim-zeytinyagi' },
            { label: 'Riviera Zeytinyağı', href: '/kategori/riviera-zeytinyagi' },
            { label: 'Organik Zeytinyağı', href: '/kategori/organik-zeytinyagi' },
            { label: 'Siyah Zeytin Çeşitleri', href: '/kategori/siyah-zeytin-cesitleri' },
            { label: 'Yeşil Zeytin Çeşitleri', href: '/kategori/yesil-zeytin-cesitleri' },
            { label: 'Zeytinyağı Toptan', href: '/kategori/zeytinyagi-toptan' },
            { label: 'Zeytinyağı Üretici', href: '/kategori/zeytinyagi-uretici' },
            { label: 'Zeytinyağı Tedarikçi', href: '/kategori/zeytinyagi-tedarikci' },
        ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Toptan Zeytinyağı', href: '/toptan-zeytinyagi-satisi' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'İletişim', href: '/iletisim' },
    { label: 'Bölgeler', href: '/bolgeler' },
];

export const trustBadges = [
    { icon: '🚚', title: 'Ücretsiz Kargo', desc: 'Türkiye geneli ücretsiz kargo' },
    { icon: '🏭', title: 'Üretimden Direkt', desc: 'Aracısız, üreticiden doğrudan satış' },
    { icon: '📦', title: 'Ambar Gönderim', desc: 'Güvenli ambar ile teslimat' },
    { icon: '🤝', title: 'Toptan Fiyat', desc: 'Toptan alımlarda pazarlık payı vardır' },
];

export const faqItems = [
    {
        question: 'Zeytinyağı siparişlerinde minimum sipariş miktarı var mı?',
        answer: 'Perakende siparişlerimizde minimum sipariş miktarı yoktur. Toptan siparişleriniz için 0552 382 8456 numaralı WhatsApp hattımızdan bizimle iletişime geçebilirsiniz.',
    },
    {
        question: 'Zeytinyağı ürünleriniz nasıl gönderiliyor?',
        answer: 'Ürünlerimiz özel paketleme ile kargo veya ambar aracılığıyla Türkiye geneline gönderilmektedir. Tüm gönderimlerimiz sigortalıdır ve kargo ücretsizdir.',
    },
    {
        question: 'Soğuk sıkım zeytinyağı ile natürel sızma zeytinyağı arasındaki fark nedir?',
        answer: 'Soğuk sıkım zeytinyağı, 27°C altında mekanik yöntemlerle elde edilir. Natürel sızma zeytinyağı ise asit oranı %0.8 altında olan, en kaliteli zeytinyağı sınıfıdır. Her iki yöntem de zeytinyağının besin değerlerini korur.',
    },
    {
        question: 'Toptan alımlarda indirim yapıyor musunuz?',
        answer: 'Evet, toptan alımlarda pazarlık payı vardır. Miktara göre özel fiyatlandırma için WhatsApp hattımızdan bizimle iletişime geçebilirsiniz.',
    },
    {
        question: 'Zeytinyağlarınızın asit oranı nedir?',
        answer: 'Natürel sızma zeytinyağlarımızın asit oranı %0.3 ile %0.8 arasında değişmektedir. Soğuk sıkım zeytinyağlarımızda ise bu oran genellikle %0.3-0.5 civarındadır.',
    },
    {
        question: 'Ürünlerinizde marka etiketi var mı?',
        answer: 'Hayır, ürünlerimizde marka etiketi bulunmamaktadır. Teneke ve PET ambalajlarımız etiketsiz olarak gönderilmektedir. Kendi markanızı oluşturmak isteyenler için ideal bir çözümdür.',
    },
    {
        question: 'Hangi bölgelerden zeytinyağı üretiyorsunuz?',
        answer: 'Zeytinyağlarımız başta Aydın ve Akhisar olmak üzere Ege Bölgesi\'nin en verimli zeytin bahçelerinden toplanan zeytinlerden üretilmektedir.',
    },
    {
        question: 'Kargo süresi ne kadar?',
        answer: 'Siparişleriniz 1-3 iş günü içinde kargoya verilmektedir. Kargo ile gönderimde ortalama teslimat süresi 2-5 iş günüdür. Ambar gönderimlerinde ise 3-7 iş günü içinde teslimat sağlanmaktadır.',
    },
];
