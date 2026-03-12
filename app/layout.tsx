import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Zambranos Complete Auto Center',
    description: 'Expert Suspension, Brakes & Tires',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-blue-600 selection:text-white antialiased">
                {children}
            </body>
        </html>
    );
}
