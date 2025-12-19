import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  // These URLs should be replaced with the actual social media profiles
  const socialLinks = {
    instagram: "https://www.instagram.com/ilonatimischi/", // Replace with actual Instagram URL
    facebook: "https://www.facebook.com/ilona.codreanu", // Replace with actual Facebook URL
    tiktok: "https://www.tiktok.com/@ilona.fit", // Replace with actual TikTok URL
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Logo and mission */}
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="IlonaFit Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-300 text-justify">
              Transformă-ți corpul. Atinge performanța. Antrenament personalizat și nutriție cu Ilona Timischi.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Link-uri Rapide</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/despre" className="hover:text-primary transition-colors">
                  Despre
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/politica-confidentialitate" className="hover:text-primary transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-primary transition-colors">
                  Politica Cookies
                </Link>
              </li>
              <li>
                <Link href="/termeni-conditii" className="hover:text-primary transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social media */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Social Media</h3>
            <div className="flex space-x-4">
              <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-primary transition-colors" />
              </Link>
              <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-primary transition-colors" />
              </Link>
              <Link href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="h-6 w-6 text-gray-300 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} IlonaFit. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

