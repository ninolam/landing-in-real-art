"use client"
import { useEffect, useState } from "react"
import { useAppContext } from "../context"
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';


const Team = () => {

    //Get the language of the global context
    const {lang, setLang} = useAppContext()

    const FIREBASE_TEAM_COLLECTION         = 'Team'
    const FIREBASE_KEY_TEXT_1              = 'text1'
    const FIREBASE_KEY_TEXT_2              = 'text2'
    const FIREBASE_KEY_PROJECT_LEADER      = 'project_leader'
    const FIREBASE_KEY_PROJECT_LEADER_NAME = 'project_leader_name'
    let LANGUAGE                           = lang

    const [text1, setText1]                         = useState<string>('');
    const [text2, setText2]                         = useState<string>('');
    const [projectLeader, setProjectLeader]         = useState<string>('');
    const [projectLeaderName, setProjectLeaderName] = useState<string>('');
  
    useEffect(() => {
      const fetchText = async () => {
          const teamCollection = collection(db, FIREBASE_TEAM_COLLECTION);
          const teamDocuments  = await getDocs(teamCollection);
          const teamData       = teamDocuments.docs.map(doc => doc.data());
          // console.log(teamData)  
          //Index 0 ===> Team Text
          setText1(teamData[0][FIREBASE_KEY_TEXT_1][LANGUAGE])
          setText2(teamData[0][FIREBASE_KEY_TEXT_2][LANGUAGE])
          setProjectLeader(teamData[0][FIREBASE_KEY_PROJECT_LEADER][LANGUAGE])
          setProjectLeaderName(teamData[0][FIREBASE_KEY_PROJECT_LEADER_NAME][LANGUAGE])
      }
  
      fetchText();
      
    }, [lang]);
  
    return (
        <div className="overlap-5">
          <div className="text-wrapper-15">Notre équipe</div>
          <div className="frame-15">
            <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-150.png" />
            <div className="colum">
              <div className="wrapper-text">
                <div className="def">
                  <p className="passionn-par-l-art">
                    {text1}
                  </p>
                  <p className="enrichi-par-mes-exp">
                    {text2}
                  </p>
                </div>
                <div className="chara">
                  <div className="text-wrapper-16">Timothée Roy</div>
                  <div className="text-wrapper-17">{projectLeader}</div>
                </div>
              </div>
              <img className="slider" alt="Slider" src="/img/slider.svg" />
            </div>
          </div>
        </div>
    )
}

export default Team