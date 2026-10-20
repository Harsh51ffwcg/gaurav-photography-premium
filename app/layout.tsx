import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Gaurav Photography Studio | Moments, Made Timeless',
  description: 'Wedding, portrait, family and event photography in Indirapuram, Ghaziabad and across Delhi NCR. Let’s make your moments last forever.',
  keywords: ['Gaurav Photography Studio', 'Wedding Photographer Ghaziabad', 'Photography Indirapuram', 'Pre-wedding photographer Delhi NCR'],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
