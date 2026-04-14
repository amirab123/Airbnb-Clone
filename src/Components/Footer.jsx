import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo + description */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              Airbnb Clone
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Trouvez et réservez les meilleurs logements en quelques clics.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500">
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-red-500">
                  Logements
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-red-500">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <p className="text-gray-600 text-sm">
              Email: support@airbnbclone.com
            </p>
            <p className="text-gray-600 text-sm">
              Téléphone: +1 000 000 000
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t mt-8 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Airbnb Clone. Tous droits réservés.
        </div>

      </div>

    </footer>
  );
}

export default Footer;