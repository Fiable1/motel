import './globals.css';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Particles from './components/Particles';

export const metadata = {
  title: 'Stella Nova Motel - Restaurant & Bar',
  description: 'Enjoy delicious orders from our menu in Kigali, Rwanda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Particles />
          <Header />
          <Navbar />
          <main>{children}</main>
          <footer className="bg-black/40 backdrop-blur-xl border-t border-white/5 py-16 px-5 mt-24 text-center text-white/40 text-xs font-outfit">
            <div className="max-w-4xl mx-auto space-y-3">
              <p className="uppercase tracking-[4px]">© 2024 Stella Nova Motel Restaurant & Bar. Open daily 6AM - 11PM</p>
              <p className="font-light italic tracking-wider">Kigali, Rwanda • (250) 788-8888 • info@StellaNovamotel.com</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
