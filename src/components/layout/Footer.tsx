import { Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-[#6B1A1A] pt-20 pb-10 text-[#F5F0E8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <h2 className="font-anton text-4xl uppercase">DR PEPPER</h2>
            <p className="text-lg font-medium italic">"Always One of a Kind"</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C0392B] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#C0392B] transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#C0392B] transition-colors"><Youtube size={24} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 font-anton text-xl uppercase">Products</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-[#F5F0E8]/50">
              <li className="flex items-center gap-2">Original <span className="text-[10px] opacity-50">(Locked)</span></li>
              <li className="flex items-center gap-2">Zero Sugar <span className="text-[10px] opacity-50">(Locked)</span></li>
              <li className="flex items-center gap-2">Cherry <span className="text-[10px] opacity-50">(Locked)</span></li>
              <li className="flex items-center gap-2">Creamy Coconut <span className="text-[10px] opacity-50">(Locked)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-anton text-xl uppercase">Company</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-[#F5F0E8]/50">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 font-anton text-xl uppercase">Stay Bold</h3>
            <p className="mb-4 text-sm text-[#F5F0E8]/70">Get the latest drops and flavor news.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="rounded-full bg-white/10 px-6 py-3 text-sm uppercase tracking-widest text-white outline-none ring-1 ring-white/20 focus:ring-[#C0392B]"
              />
              <Button variant="secondary" size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center text-[10px] font-bold uppercase tracking-widest text-[#F5F0E8]/40">
          <p>© 2025 Dr Pepper. All rights reserved. Must be 13+ to participate in Pepper Perks. Dr Pepper is a registered trademark of Keurig Dr Pepper.</p>
        </div>
      </div>
    </footer>
  );
}
