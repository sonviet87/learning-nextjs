import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export interface IMainLayoutProps {
}

export function MainLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Main layout</h1>
            <Link href="/posts">Post</Link>
            <Link href="/contact">contact</Link>
            <div>{children}</div>
        </div>
    );
}
