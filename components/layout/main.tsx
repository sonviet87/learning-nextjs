import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';
import {Stack} from "@mui/material";
import {Footer, Header} from "@/components/common";
import {Box} from "@mui/system";

export interface IMainLayoutProps {
}

export function MainLayout({ children }: LayoutProps) {
    return (
        <Stack>
            <Header/>
            <h1>Main layout</h1>
            <Link href="/posts">Post</Link>
            <Link href="/contact">contact</Link>

            <Box component="main">{children}</Box>
            <Footer/>
        </Stack>
    );
}
