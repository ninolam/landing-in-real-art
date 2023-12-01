"use client"
import { useEffect, useState } from "react"
import { useAppContext } from "../context"
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import TeamMember from "./TeamMember";


const Team = () => {

    //Get the language of the global context
    const {lang} = useAppContext()

    const FIREBASE_TEAM_COLLECTION = 'Team'
    const FIREBASE_KEY_TEXT_1      = 'text1'
    const FIREBASE_KEY_TEXT_2      = 'text2'
    const FIREBASE_KEY_ROLE        = 'role'
    const FIREBASE_KEY_NAME        = 'name'
    const FIREBASE_KEY_PHOTO       = 'photo'
    let LANGUAGE                   = lang

    const [text1, setText1] = useState<string>('');
    const [text2, setText2] = useState<string>('');
    const [role, setRole]   = useState<string>('');
    const [name, setName]   = useState<string>('');
    const [photo, setPhoto] = useState<string>('');
    const [photoUrl, setPhotoUrl] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [members, setMembers] = useState<[]>([]);

    useEffect(() => {
      const fetchTeamMembers = async () => {
          const teamCollection = collection(db, FIREBASE_TEAM_COLLECTION);
          const teamDocuments  = await getDocs(teamCollection);
          const teamData       = teamDocuments.docs.map(doc => doc.data());
          const members_ = teamData[0]['members'] 
          setMembers(members_)
          
          setText1(members_[currentIndex][FIREBASE_KEY_TEXT_1][LANGUAGE])
          setText2(members_[currentIndex][FIREBASE_KEY_TEXT_2][LANGUAGE])
          setRole(members_[currentIndex][FIREBASE_KEY_ROLE][LANGUAGE])
          setName(members_[currentIndex][FIREBASE_KEY_NAME])
          const photo_ = members_[currentIndex][FIREBASE_KEY_PHOTO] 
          setPhoto(photo_)
          const imageRef = ref(storage, photo_)
          const url = await getDownloadURL(imageRef)
          setPhotoUrl(url)
      }
  
      fetchTeamMembers();
      
    }, [lang, currentIndex]);
  
    
    const handleArrowClick = (direction: string) => {
      if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
      }
    };


    return (
        <div className="team">
          <TeamMember name={name} photo={photoUrl} role={role} text1={text1} text2={text2}/>
          <div className="scrollTeam">
                  <img alt="left" src="/img/icons8-arrow-left.png" onClick={() => handleArrowClick('left')}/>
                  <img alt="right" src="/img/icons8-arrow-right.png" onClick={() => handleArrowClick('right')}/>
          </div>  
        </div>
    )
}

export default Team