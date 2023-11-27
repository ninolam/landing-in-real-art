"use client"
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../context";

const HowToJoinIra = () => 
{
  //Get the language of the global context
  const {lang, setLang} = useAppContext()

  const FIREBASE_JOIN_IRA_COLLECTION = 'JoinIRA'
  const FIREBASE_KEY_JOIN_IRA        = 'JoinIRA'
  const FIREBASE_KEY_START_IRA       = 'StartIRA'
  const FIREBASE_KEY_TEXT_1          = 'text1'
  const FIREBASE_KEY_TEXT_2          = 'text2'
  const FIREBASE_KEY_HEADER_TEXT     = 'headerText'
  let LANGUAGE                       = lang

  const [joinIra, setJoinIra]       = useState<string>('');
  const [startIra, setStartIra]     = useState<string>('');
  const [text1, setText1]           = useState<string>('');
  const [text2, setText2]           = useState<string>('');
  const [headerText, setHeaderText] = useState<string>('');

  useEffect(() => {
    const fetchText = async () => {
        const joinIRACollection = collection(db, FIREBASE_JOIN_IRA_COLLECTION);
        const joinIRADocuments  = await getDocs(joinIRACollection);
        const joinIRAData       = joinIRADocuments.docs.map(doc => doc.data());
        console.log(joinIRAData)  
        //Index 0 ===> joinIRA Buttons
        setStartIra(joinIRAData[0][FIREBASE_KEY_START_IRA][LANGUAGE])
        setJoinIra(joinIRAData[0][FIREBASE_KEY_JOIN_IRA][LANGUAGE])

        //Index 1 ===> joinIRA Text
        setText1(joinIRAData[1][FIREBASE_KEY_TEXT_1][LANGUAGE])
        setText2(joinIRAData[1][FIREBASE_KEY_TEXT_2][LANGUAGE])
        setHeaderText(joinIRAData[1][FIREBASE_KEY_HEADER_TEXT][LANGUAGE])
        
    }

    fetchText();
    
  }, [lang]);

    return (
      <div className="how-to-join-ira">
        <div className="how-to-join-ira-block-right">
          <div className="frame-10">
            <div className="text-wrapper-8">{headerText}</div>
            <p className="ira-ambitionne-de-cr">
              {text1}
              <br/>
              <br/>
              {text2}
            </p>
            <div className="link-button-2">
              <button className="button">
                <div className="text-wrapper-5">{joinIra}</div>
              </button>
              <button className="button-start-ira-2">
                <div className="text-wrapper-5">{startIra}</div>
              </button>
            </div>
          </div>
          <div className="cr-er-en">CRÉER EN 2023</div>
        </div>
        <div className="how-to-join-ira-block-left">
          <div className="overlap-group-5">
            <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-62.svg" />
            <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-210.svg" />
          </div>
        </div>
      </div>

    )

}

export default HowToJoinIra    