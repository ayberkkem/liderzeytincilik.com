import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href ? `https://liderzeytincilik.com${item.href}` : undefined,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className="py-3 text-sm text-olive-500">
                <ol className="flex items-center gap-1.5 flex-wrap">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-1.5">
                            {index > 0 && (
                                <svg className="w-3.5 h-3.5 text-olive-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-olive-700 transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-olive-700 font-medium">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
