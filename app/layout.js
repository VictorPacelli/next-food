import './globals.css';

import HeaderLayout from '@/components/HeaderLayout';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout/>
        {children}
      </body>
    </html>
  );
}
