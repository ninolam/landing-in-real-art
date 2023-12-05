"use client"
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../context";
import { JoinIraData, JoinIraDataButton, JoinIraDataText, defaultLangObject } from "../types/types";

const HowToJoinIra = () => 
{
  //Get the language of the global context
  const {lang} = useAppContext()

  const FIREBASE_JOIN_IRA_COLLECTION = 'JoinIRA'
  
  const [joinIra, setJoinIra]       = useState<string>('');
  const [startIra, setStartIra]     = useState<string>('');
  const [text1, setText1]           = useState<string>('');
  const [text2, setText2]           = useState<string>('');
  const [headerText, setHeaderText] = useState<string>('');
  const defaultJoinIraText = {
    text1: defaultLangObject,
    text2: defaultLangObject,
    headerText: defaultLangObject
  }

  const defaultJoinIraButton = {
    JoinIRA: defaultLangObject,
    StartIRA: defaultLangObject
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
      console.log(joinIraDataButton)
      // Index 0 ===> joinIRA Buttons
      setStartIra(joinIraDataButton.StartIRA[lang])
      setJoinIra(joinIraDataButton.JoinIRA[lang])

      // Index 1 ===> joinIRA Text
      setText1(joinIraDataText.text1[lang])
      setText2(joinIraDataText.text2[lang])
      setHeaderText(joinIraDataText.headerText[lang])
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