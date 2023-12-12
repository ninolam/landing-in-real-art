"use client"

import { useEffect, useState } from "react"
import { useAppContext } from "../../context"
import { JoinIraDataButton, JoinIraDataText, Lang, defaultLangObject } from "../../types/types"
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import Link from 'next/link';


const HowToJoinIra = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const FIREBASE_JOIN_IRA_COLLECTION = 'JoinIRA'
    
    const [joinIra, setJoinIra]           = useState<string>('');
    const [startIra, setStartIra]         = useState<string>('');
    const [joinIraLink, setJoinIraLink]   = useState<string>('');
    const [startIraLink, setStartIraLink] = useState<string>('');
    const [text1, setText1]               = useState<string>('');
    const [text2, setText2]               = useState<string>('');
    const [headerText, setHeaderText]     = useState<string>('');
    const defaultJoinIraText = {
      text1: defaultLangObject,
      text2: defaultLangObject,
      headerText: defaultLangObject
    }
  
    const defaultJoinIraButton = {
      JoinIRA: defaultLangObject,
      StartIRA: defaultLangObject,
      JoinIRALink: '',
      StartIRALink: ''
    }
  
  
    const [joinIraDataText, setJoinIraDataText] = useState<JoinIraDataText>(defaultJoinIraText);
    const [joinIraDataButton, setJoinIraDataButton] = useState<JoinIraDataButton>(defaultJoinIraButton);
  
    useEffect(() => {
      const fetchData = async () => {
        const joinIRACollection = collection(db, FIREBASE_JOIN_IRA_COLLECTION);
        const joinIRADocuments  = await getDocs(joinIRACollection);
        const joinIRAData       = joinIRADocuments.docs.map(doc => doc.data());
        
        //Index 0 ===> joinIRA Buttons
        setJoinIraDataButton(joinIRAData[0] as JoinIraDataButton)
        setStartIra(joinIRAData[0].StartIRA[lang])
        setJoinIra(joinIRAData[0].JoinIRA[lang])
        setJoinIraLink(joinIRAData[0].JoinIRALink)
        setStartIraLink(joinIRAData[0].StartIRALink)
  
        //Index 1 ===> joinIRA Text
        setJoinIraDataText(joinIRAData[1] as JoinIraDataText)
        setText1(joinIRAData[1].text1[lang])
        setText2(joinIRAData[1].text2[lang])
        setHeaderText(joinIRAData[1].headerText[lang])
    }  
    fetchData();
    }, [])
  
  
    useEffect(() => {
      const fetchText = async () => {
        // Index 0 ===> joinIRA Buttons
        setStartIra(joinIraDataButton.StartIRA[lang_])
        setJoinIra(joinIraDataButton.JoinIRA[lang_])
        setJoinIraLink(joinIraDataButton.JoinIRALink)
        setStartIraLink(joinIraDataButton.StartIRALink)
  
        // Index 1 ===> joinIRA Text
        setText1(joinIraDataText.text1[lang_])
        setText2(joinIraDataText.text2[lang_])
        setHeaderText(joinIraDataText.headerText[lang_])
      }
      
      fetchText();
    }, [lang]);
  
    return (
        <div className="feature">
        <div className="frame-36597">
          <div className="frame-48095734">
            <img className="rectangle-62" src="/img/rectangle-62.svg" />
          </div>
          <div className="frame-48095735">
            <img className="rectangle-210" src="/img/rectangle-210.svg" />
          </div>
        </div>
        <div className="frame-48095733">
          <div className="cr-er-en-2023">Créer en 2023</div>
          <div className="frame-303">
            <div className="comment">Comment ?</div>
            <div
              className="ira-ambition">
              {text1}
              <br />
              <br />
              {text2}
            </div>
            <div className="link-button">
              <div className="button2">
                <Link href={joinIraLink}>
                  <div className="rejoindre-ira2">{joinIra}</div>
                </Link>  
              </div>
              <div className="button3">
                <Link href={joinIraLink}>
                  <div className="je-d-marre2">{startIra}</div>
                </Link>  
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default HowToJoinIra