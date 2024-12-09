import NavBar from '@/components/NavBar';
import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'MixBalancer',
  description: 'Manage teams, players, and matches efficiently',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavBar></NavBar>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}