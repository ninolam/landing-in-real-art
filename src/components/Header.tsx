"use client"
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../context";


const Header = () => {

  //Get the language of the global context
  const {lang, setLang} = useAppContext()

  const FIREBASE_HEADER_COLLECTION = 'Header'
  const FIREBASE_KEY_JOIN_IRA      = 'Join Ira'
  const FIREBASE_KEY_START_IRA     = 'Start Ira'
  const FIREBASE_KEY_TEXT_1        = 'text1'
  const LANGUAGE                   = lang

  const [startIra, setStartIra] = useState<string>('');
  const [joinIra, setJoinIra]   = useState<string>('');
  const [text1, setText1]       = useState<string>('');


  useEffect(() => {
    const fetchText = async () => {
        const headerCollection = collection(db, FIREBASE_HEADER_COLLECTION);
        const headerDocuments  = await getDocs(headerCollection);
        const headerData       = headerDocuments.docs.map(doc => doc.data());
        
        //Index 0 ===> Header_Buttons
        setStartIra(headerData[0][FIREBASE_KEY_START_IRA][LANGUAGE])
        setJoinIra(headerData[0][FIREBASE_KEY_JOIN_IRA][LANGUAGE])
        //Index 1 ===> Header Text
        setText1(headerData[1][FIREBASE_KEY_TEXT_1][LANGUAGE])
        
    }

    fetchText();
    
  }, [lang]);

    return (
        <div className="header">
          <div className="group-12">
            <p className="heading-5">
              <span className="span">
                Rendre le web3 réel et <br />
              </span>
              <span className="text-wrapper-18">vice-versa</span>
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