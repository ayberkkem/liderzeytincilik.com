export interface CityData {
    slug: string;
    name: string;
    plate: number;
    region: string;
    oliveProduction: boolean;
    description: string;
    content: string;
    faq: { question: string; answer: string }[];
}

const egeBolgesi = [
    'Aydın', 'İzmir', 'Manisa', 'Muğla', 'Denizli', 'Afyonkarahisar', 'Kütahya', 'Uşak'
];

const marmaraBolgesi = [
    'İstanbul', 'Bursa', 'Balıkesir', 'Çanakkale', 'Edirne', 'Kırklareli', 'Tekirdağ',
    'Yalova', 'Kocaeli', 'Sakarya', 'Bilecik', 'Düzce', 'Bolu'
];

const akdenizBolgesi = [
    'Antalya', 'Mersin', 'Adana', 'Hatay', 'Osmaniye', 'Kahramanmaraş',
    'Isparta', 'Burdur'
];

const icAnadoluBolgesi = [
    'Ankara', 'Konya', 'Eskişehir', 'Kayseri', 'Sivas', 'Yozgat',
    'Kırşehir', 'Nevşehir', 'Aksaray', 'Niğde', 'Kırıkkale', 'Çankırı', 'Karaman'
];

const karadenizBolgesi = [
    'Trabzon', 'Samsun', 'Ordu', 'Giresun', 'Rize', 'Artvin', 'Sinop',
    'Kastamonu', 'Çorum', 'Amasya', 'Tokat', 'Zonguldak', 'Bartın', 'Karabük',
    'Gümüşhane', 'Bayburt'
];

const doguAnadoluBolgesi = [
    'Erzurum', 'Van', 'Elazığ', 'Malatya', 'Erzincan', 'Bingöl',
    'Tunceli', 'Muş', 'Bitlis', 'Hakkari', 'Ağrı', 'Iğdır', 'Kars', 'Ardahan'
];

const guneyDoguBolgesi = [
    'Gaziantep', 'Şanlıurfa', 'Diyarbakır', 'Mardin', 'Batman', 'Siirt',
    'Şırnak', 'Adıyaman', 'Kilis'
];

function getRegion(city: string): string {
    if (egeBolgesi.includes(city)) return 'Ege Bölgesi';
    if (marmaraBolgesi.includes(city)) return 'Marmara Bölgesi';
    if (akdenizBolgesi.includes(city)) return 'Akdeniz Bölgesi';
    if (icAnadoluBolgesi.includes(city)) return 'İç Anadolu Bölgesi';
    if (karadenizBolgesi.includes(city)) return 'Karadeniz Bölgesi';
    if (doguAnadoluBolgesi.includes(city)) return 'Doğu Anadolu Bölgesi';
    if (guneyDoguBolgesi.includes(city)) return 'Güneydoğu Anadolu Bölgesi';
    return 'Türkiye';
}

function isOliveRegion(city: string): boolean {
    return [...egeBolgesi, ...['Bursa', 'Balıkesir', 'Çanakkale', 'Antalya', 'Mersin', 'Hatay', 'Gaziantep', 'Kilis']].includes(city);
}

function toSlug(name: string): string {
    return name
        .replace(/İ/g, 'i')
        .replace(/I/g, 'i')
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/Ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/Ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/Ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/Ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/Ç/g, 'c')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export const allCities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
    'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik',
    'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
    'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum',
    'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır',
    'Isparta', 'İstanbul', 'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars',
    'Kastamonu', 'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli',
    'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş',
    'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Şanlıurfa',
    'Siirt', 'Sinop', 'Sivas', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli',
    'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
];

function generateCityContent(cityName: string, variantLabel: string = ''): { description: string; content: string; faq: { question: string; answer: string }[] } {
    const region = getRegion(cityName);
    const isOlive = isOliveRegion(cityName);
    const plate = allCities.indexOf(cityName) + 1;

    // SEO-Rich Intros with high variability
    const intros = [
        `${cityName} ve çevresinde gerçek soğuk sıkım zeytinyağı arayanlar için Lider Zeytincilik olarak doğrudan üretimden kapınıza geliyoruz. Ege'nin en kaliteli hasatlarından elde ettiğimiz sızma yağlarımızı, aracıları devreden çıkararak ${cityName} halkına sunuyoruz.`,
        `${cityName} sofralarında sağlık ve lezzet bir araya geliyor. Üreticiden uygun fiyatlı zeytinyağı ${cityName} sloganıyla çıktığımız bu yolda, Aydın ve Akhisar kalitesini taze taze sofralarınıza ulaştırıyoruz.`,
        `${region} bölgesinin parlayan yıldızı ${cityName} ilimizde, zeytinyağı toptancıları ve perakende tüketiciler için en güvenilir limanız. Lider Zeytincilik olarak, fabrikadan doğrudan gönderimlerle ${cityName} halkına maliyet avantajı sağlıyoruz.`,
        `${cityName} ilimizdeki gıda işletmeleri, restoranlar ve bireysel tüketiciler için "Zeytinyağı Liderden Alınır" diyoruz. Saf, doğal ve %100 tahşişsiz ürünlerimizle ${cityName} genelinde ücretsiz kargo hizmeti veriyoruz.`
    ];

    const intro = intros[plate % intros.length];
    const cityH1 = variantLabel ? `Üreticiden Uygun Fiyatlı Zeytinyağı ${cityName} (${variantLabel})` : `Üreticiden Uygun Fiyatlı Zeytinyağı ${cityName}`;

    const description = `${cityName} zeytinyağı ${variantLabel.toLowerCase()} ihtiyacınızda Lider Zeytincilik olarak fabrikadan doğrudan, en uygun fiyatlarla hizmet veriyoruz. Soğuk sıkım, natürel sızma ve toptan tedarik.`;

    const oliveContext = isOlive
        ? `${cityName}, ${region}'nin zeytinyağı üretim potansiyeli en yüksek bölgelerinden biridir. Lider Zeytincilik'in teknolojik altyapısı ve ${cityName} zeytinlerinin kalitesi birleşince, ortaya asit oranı en düşük, polifenolü en yüksek yağlar çıkıyor.`
        : `${cityName} halkı kaliteli zeytinyağını çok iyi tanıyor. Biz de Lider Zeytincilik olarak, üretim merkezlerimizden en taze sıkımları seçerek ${cityName} mutfaklarına "Zeytinyağı Liderden Alınır" güvencesiyle sevk ediyoruz.`;

    const content = `# ${cityH1}

## ${cityName}'da Hakiki Zeytinyağına Ulaşmanın En Kısa Yolu

${intro}

${oliveContext}

Lider Zeytincilik olarak Google arama sonuçlarında **${cityName} zeytinyağı** aramalarında neden birinci sıradayız? Çünkü biz sadece satıcı değil, aynı zamanda Aydın ve Akhisar kuşağının köklü üreticisiyiz. 

## ${cityName} Toptan Zeytinyağı Tedariği

${cityName} genelindeki otel, restoran, catering ve şarküteriler için %100 güvenilir tedarik partneriyiz. 

- **Fabrika Satış Fiyatları:** Aracı komisyonu yok, doğrudan üretici fiyatı ${cityName} için geçerli.
- **Yüksek Polifenol:** Sağlık odaklı tüketim için erken hasat soğuk sıkım seçenekleri.
- **Toptan İskonto:** 100 litre ve üzeri alımlarda ${cityName} işletmelerine özel fiyatlar.
- **Markasız Ambalaj:** Etiketsiz teneke ve PET seçenekleriyle kendi markanızı oluşturma imkanı.

Toptan alım ve fiyat listesi için WhatsApp hattımız: **0552 382 8456**.

## Neden Lider Zeytincilik'i Tercih Etmelisiniz?

- ✅ **Üreticiden Uygun Fiyatlı Zeytinyağı:** ${cityName} pazarındaki en rekabetçi fiyatlar.
- ✅ **Ücretsiz Kargo:** ${cityName} merkez ve tüm ilçelerine kargo ücreti bizden.
- ✅ **Asit Garanti:** Tüm sızma yağlarımız 0.8 asit altı ve analiz onaylıdır.
- ✅ **Hızlı Sevkiyat:** Siparişinizden sonraki 24 saat içinde kargolama.

### ${cityName} İçin Ürün Gruplarımız

1. **Efelerin Yağı (Sızma):** Aydın'ın dağ köylerinden toplanan meyvelerle hazırlanan natürel sızma zeytinyağı.
2. **Gurme Zeytin Portföyü:** Tam yağlı Gemlik tipi siyah zeytinler ve kıtır Domat yeşil zeytin çeşitleri.
3. **Mutfak Dostu:** Ekonomik 5 lt ve 10 lt ambalajlarda zeytinyağı ve sofralık zeytin seçenekleri.

Lider Zeytincilik olarak sadece zeytinyağı değil, Ege'nin en seçkin siyah ve yeşil zeytin çeşitlerini de ${cityName} halkına ve işletmelerine ulaştırıyoruz. Siyah zeytinlerimizde hiçbir boya veya kimyasal bulunmaz, yeşil zeytinlerimiz ise tamamen doğal limon tuzu ve kaya tuzu ile tatlandırılır.

**Üreticiden Uygun Fiyat İçin:** 0552 382 8456 (WhatsApp)

---
*Lider Zeytincilik, ${cityName} genelinde "Zeytin ve Zeytinyağı Liderden Alınır" mottosuyla güven inşa etmeye devam ediyor.*`;

    const faq = [
        {
            question: `${cityName}'da toptan zeytinyağı nereden alınır?`,
            answer: `Lider Zeytincilik olarak ${cityName} genelinde fabrikadan doğrudan toptan sevkiyat yapıyoruz. WhatsApp hattımızdan en güncel toptan fiyat listesini alabilirsiniz.`,
        },
        {
            question: `${cityName} kargoları ne kadar sürede ulaşır?`,
            answer: `Siparişiniz onaylandığı gün kargoya teslim edilir. ${cityName} adresinize kargo yoğunluğuna bağlı olarak 2-4 iş günü içinde ulaşır.`,
        },
        {
            question: `Üreticiden aldığımız bu yağların analizi var mı?`,
            answer: `Evet, Lider Zeytincilik bünyesinde satılan tüm ürünler Türk Gıda Kodeksi'ne uygun olarak periyodik analizlerden geçmektedir.`,
        }
    ];

    return { description, content, faq };
}

export const cities: CityData[] = allCities.map((city, index) => {
    const { description, content, faq } = generateCityContent(city);
    return {
        slug: `${toSlug(city)}-zeytinyagi`,
        name: city,
        plate: index + 1,
        region: getRegion(city),
        oliveProduction: isOliveRegion(city),
        description,
        content,
        faq,
    };
});

export const cityPageVariants = ['uretici', 'toptan', 'tedarikci'] as const;

export function getCityVariantData(city: CityData, variant: typeof cityPageVariants[number]) {
    const variantLabels = {
        uretici: 'Üretici',
        toptan: 'Toptan',
        tedarikci: 'Tedarikçi',
    };

    const variantLabel = variantLabels[variant];
    const { description, content, faq } = generateCityContent(city.name, variantLabel);

    return {
        slug: `${toSlug(city.name)}-zeytinyagi-${variant}`,
        title: `Üreticiden Uygun Fiyatlı Zeytinyağı ${city.name} ${variantLabel} | Lider Zeytincilik`,
        h1: `Üreticiden Uygun Fiyatlı Zeytinyağı ${city.name} ${variantLabel}`,
        description,
        content,
        faq
    };
}

export function getCityBySlug(slug: string): CityData | undefined {
    return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
    return cities.map((c) => c.slug);
}
