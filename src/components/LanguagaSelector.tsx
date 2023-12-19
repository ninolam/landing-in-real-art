import { useState } from "react";
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
      {showDropdown && (
        <div className="dropdown">
          <div className='lang' onClick={() => setLanguage('EN')}>EN &nbsp;<img src='img/flag_EN.png' alt="english"></img></div>
          <div className='lang' onClick={() => setLanguage('FR')}>FR &nbsp;<img src='img/flag_FR.png' alt="french"></img></div>
          <div className='lang' onClick={() => setLanguage('CN')}>CN &nbsp;<img src='img/flag_CN.png' alt="chinese"></img></div>
        </div>
      )}
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <img src="img/world.png" alt="Language" width={30} height={30} />
      </div>
      
    </div>
  );
};

export default LanguageSelector;