'use client';

import { SessionProvider } from 'next-auth/react';

export function SessionProviders({ children, session }) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
