import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { categories } from '@/lib/categories';
import { blogPosts } from '@/lib/blogPosts';
import { cities, cityPageVariants } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Base pages
    const basePages = [
        '',
        '/urunler',
        '/urunler/1-lt-zeytinyagi',
        '/urunler/5-lt-zeytinyagi',
        '/urunler/10-lt-zeytinyagi',
        '/urunler/gemlik-siyah-zeytin',
        '/urunler/domat-yesil-zeytin',
        '/kategori',
        '/bolgeler',
        '/blog',
        '/hakkimizda',
        '/iletisim',
        '/kvkk',
        '/gizlilik-politikasi',
        '/mesafeli-satis-sozlesmesi',
        '/iade-politikasi',
        '/cerez-politikasi',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Category pages
    const categoryPages = categories.map(cat => ({
        url: `${baseUrl}/kategori/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Blog pages
    const blogPages = blogPosts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic City SEO pages (Only indexing high-priority ones to keep sitemap manageable, or inclusion of all 81*4 = 324 pages)
    const cityPages: MetadataRoute.Sitemap = [];
    cities.forEach(city => {
        cityPages.push({
            url: `${baseUrl}/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        });
        cityPageVariants.forEach(variant => {
            cityPages.push({
                url: `${baseUrl}/${city.slug}-${variant}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            });
        });
    });

    return [...basePages, ...categoryPages, ...blogPages, ...cityPages];
}
