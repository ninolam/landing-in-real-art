"use client"
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../context";
import { HeaderButtons, HeaderData, HeaderTexts, Lang, defaultLangObject } from "../types/types";


const Header = () => {

  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const FIREBASE_HEADER_COLLECTION = 'Header'
  const FIREBASE_KEY_JOIN_IRA      = 'JoinIRA'
  const FIREBASE_KEY_START_IRA     = 'StartIRA'
  const FIREBASE_KEY_TEXT_1        = 'text1'
  const FIREBASE_KEY_TITLE_1       = 'title1'
  const FIREBASE_KEY_TITLE_2       = 'title2'
  
  const [startIra, setStartIra]     = useState<string>('');
  const [joinIra, setJoinIra]       = useState<string>('');
  const [text1, setText1]           = useState<string>('');
  const [title1, setTitle1]         = useState<string>('');
  const [title2, setTitle2]         = useState<string>('');

  const defaultHeaderButtons = {
    JoinIRA: defaultLangObject,
    StartIRA: defaultLangObject,
  }

  const defaultHeaderTexts = {
    title1: defaultLangObject,
    title2: defaultLangObject,
    text1: defaultLangObject
  }
  const [headerButtons, setHeaderButtons] = useState<HeaderButtons>(defaultHeaderButtons);
  const [headerTexts, setHeaderTexts] = useState<HeaderTexts>(defaultHeaderTexts);

  useEffect(() => {
    const fetchData = async () => {
      const headerCollection = collection(db, FIREBASE_HEADER_COLLECTION);
      const headerDocuments  = await getDocs(headerCollection);
      const headerData       = headerDocuments.docs.map(doc => doc.data());
      //Index 0 ===> Header_Buttons
      setHeaderButtons(headerData[0] as HeaderButtons)
      setStartIra(headerData[0][FIREBASE_KEY_START_IRA][lang])
      setJoinIra(headerData[0][FIREBASE_KEY_JOIN_IRA][lang])
      //Index 1 ===> Header Text
      setHeaderTexts(headerData[1] as HeaderTexts)
      setTitle1(headerData[1][FIREBASE_KEY_TITLE_1][lang])
      setTitle2(headerData[1][FIREBASE_KEY_TITLE_2][lang])
      setText1(headerData[1][FIREBASE_KEY_TEXT_1][lang])
    }

    fetchData();
  }, [])


  useEffect(() => {
      setStartIra(headerButtons[FIREBASE_KEY_START_IRA][lang_])
      setJoinIra(headerButtons[FIREBASE_KEY_JOIN_IRA][lang_])
      setText1(headerTexts[FIREBASE_KEY_TEXT_1][lang_])
      setTitle1(headerTexts[FIREBASE_KEY_TITLE_1][lang_])
      setTitle2(headerTexts[FIREBASE_KEY_TITLE_2][lang_])
  }, [lang]);

    return (
        <div className="header">
          <div className="group-12">
            <p className="header-title">
              <span className="span">
                {title1} <br />
              </span>
              <span className="text-wrapper-18">{title2}</span>
            </p>
          </div>
          <img className="union-2" alt="Union" src="/img/union.png" />
          <img className="sphere" alt="Sphere" src="/img/sphere-1.png" />
          <img className="sphere-2" alt="Sphere" src="/img/sphere.svg" />
          <button className="button-join-ira">
            <div className="text-wrapper-19">{joinIra}</div>
          </button>
          <button className="button-start-ira">
            <div className="text-wrapper-19">{startIra}</div>
          </button>
          <p className="paragraph-2">
            {text1}
          </p>
        </div>
    )
}

export default Header