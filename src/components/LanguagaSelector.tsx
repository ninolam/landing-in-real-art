import { useContext, useState } from "react";
import Image from 'next/image';
import { useAppContext } from "../context";

const LanguageSelector = () => {

  const { setLang } = useAppContext();

  const [showDropdown, setShowDropdown] = useState(false);

  const setLanguage = (language: string) => {
    setLang(language);
    setShowDropdown(false); // Hide dropdown after selecting language
  };

  return (
    <div className="languageSelector">
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <img src="img/world.png" alt="Language" width={30} height={30} />
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div onClick={() => setLanguage('EN')}>EN</div>
          <div onClick={() => setLanguage('FR')}>FR</div>
          <div onClick={() => setLanguage('CN')}>CN</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;