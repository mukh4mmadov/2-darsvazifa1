import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import image2 from "../assets/image.2.png";
import image1 from "../assets/image.1.png";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");

  const notify = () => toast(t("til"));

  function handleChange(e) {
    setLang(e.target.value);
    notify();
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-bold">{t("YOURLOGO")}</h1>

          <ul className="flex space-x-6 text-black gap-20">
            <li className="cursor-pointer">{t("Assets")}</li>
            <li className="cursor-pointer">{t("Creators")}</li>
            <li className="cursor-pointer">{t("Careers")}</li>
            <li className="cursor-pointer">{t("GoPro")}</li>
          </ul>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder={t("Search")}
              className="bg-gray-100 border rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              onChange={handleChange}
              value={lang}
              className="bg-white border rounded-full py-2 px-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="en">English</option>
            </select>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="div-1 flex">
          <div className="div-p">
            <h3 className="Security">{t("Security")}</h3>
            <h1 className="Keep">{t("Keep")}</h1>
            <div className="image-p flex items-center">
              <img className="location" src={image2} alt="Location" />
              <p className="site-p">{t("p")}</p>
            </div>
            <h1 className="h1-site">{t("h1")}</h1>
            <p className="site-p2">{t("p2")}</p>
            <div className="input-container">
              <input type="text" placeholder={t("email")} className="input" />
              <button className="button">{t("list")}</button>
            </div>
          </div>

          <div className="mt-32 md:w-1/2">
            <img src={image1} alt="App Preview" className="w-full" />
          </div>
        </div>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Home;
