import { LayoutProps } from '@/models';
import * as React from 'react';

export interface IAdminLayoutProps {
}

export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Admin layout</h1>
            <div>{children}</div>
        </div>

    );
}
