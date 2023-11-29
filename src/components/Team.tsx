"use client"
import { useEffect, useState } from "react"
import { useAppContext } from "../context"
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import TeamMember from "./TeamMember";


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
    const [members, setMembers]                     = useState<[]>([]);

    useEffect(() => {
      const fetchText = async () => {
          const teamCollection = collection(db, FIREBASE_TEAM_COLLECTION);
          const teamDocuments  = await getDocs(teamCollection);
          const teamData       = teamDocuments.docs.map(doc => doc.data());
          setMembers(teamData[0]['members'])
          console.log(teamData[0]['members'])  
          //Index 0 ===> Team Text
          setText1(teamData[0][FIREBASE_KEY_TEXT_1][LANGUAGE])
          setText2(teamData[0][FIREBASE_KEY_TEXT_2][LANGUAGE])
          setProjectLeader(teamData[0][FIREBASE_KEY_PROJECT_LEADER][LANGUAGE])
          setProjectLeaderName(teamData[0][FIREBASE_KEY_PROJECT_LEADER_NAME][LANGUAGE])
      }
  
      fetchText();
      
    }, [lang]);
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleArrowClick = (direction: string) => {
      if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
      }
    };


    return (
        <div className="team">
          <TeamMember name="Tim Roy" photo="test" role="Project leader" text1="text1" text2="text2"/>
          <div className="scrollTeam">
                  <img alt="left" src="/img/icons8-arrow-left.png" onClick={() => handleArrowClick('left')}/>
                  <img alt="right" src="/img/icons8-arrow-right.png" onClick={() => handleArrowClick('right')}/>
          </div>  
        </div>
    )
}

export default Team