

"use client";
import { usePathname } from 'next/navigation';

export default function Layout({children}) {
    const pathname = usePathname();

    // Don't show dashboard header for settings page
    if (pathname.includes('/settings')) {
        return <div>{children}</div>;
    }

    return <div>
        {children}
    </div>
}