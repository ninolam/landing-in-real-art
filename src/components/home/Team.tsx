"use client"
import { useEffect, useState } from "react"
import { useAppContext } from "../../context"
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { Lang, MemberData } from "../../types/types";
import TeamMember from "./TeamMember";


const Team = () => {

      //Get the language of the global context
      const {lang} = useAppContext()
      const lang_ = lang as Lang
  
      const FIREBASE_TEAM_COLLECTION = 'Team'
      
      const [text1, setText1] = useState<string>('')
      const [text2, setText2] = useState<string>('')
      const [role, setRole]   = useState<string>('')
      const [name, setName]   = useState<string>('')
      const [photo, setPhoto] = useState<string>('')
      const [cssClassPhoto, setCssClassPhoto] = useState<string>('')
      const [photoUrl, setPhotoUrl]           = useState<string>('')
      const [currentIndex, setCurrentIndex]   = useState(0)
      const [members, setMembers]             = useState<MemberData>([])
      const [key, setKey] = useState(0)
      const [fade, setFade] = useState(true)
  
      const setMembersData = async(currentIndex: number, members: MemberData) => {
        setText1(members[currentIndex].text1[lang_])
        setText2(members[currentIndex].text2[lang_])
        setRole(members[currentIndex].role[lang_])
        setName(members[currentIndex].name)
        const photo_ = members[currentIndex].photo 
        setPhoto(photo_)
        const imageRef = ref(storage, photo_)
        const url = await getDownloadURL(imageRef)
        //photo-team-member
        setPhotoUrl(url)
        setCssClassPhoto(``)
      }
  
      //--------------------------------------------------------------------- useEffect
      /**
       * UseEffect called at the first page loading 
       */
      useEffect(() => {
        const fetchTeamMembers = async () => {
          const teamCollection = collection(db, FIREBASE_TEAM_COLLECTION);
          const teamDocuments  = await getDocs(teamCollection);
          const teamData       = teamDocuments.docs.map(doc => doc.data());
          const members_ = teamData[0]['members'] as MemberData
          setMembers(members_)        
          setMembersData(currentIndex, members_)
        }
        fetchTeamMembers()
        
      }, [])
  
      //--------------------------------------------------------------------- useEffect
      /**
       * UseEffect called when 'lang' or 'currentIndex' has changed
       */
      useEffect(() => {
        if (members.length !== 0) {
          setMembersData(currentIndex, members)
          // When imageUrl changes, start the fade-out effect
          setFade(false);
          // Wait for fade-out to complete, then fade in the new image
          const timer = setTimeout(() => {
            setFade(true);
          }, 500); // Adjust this duration to match your fade-out CSS animation
  
          return () => clearTimeout(timer);
          
        }
      }, [lang, currentIndex])
  
  
      //Re-render component with useEffect for the fade-in (but it does not work)
      useEffect(() => {
        setKey(prevKey => prevKey + 1)
      }, [photoUrl]);
  
      const handleArrowClick = (direction: string) => {
        if (direction === 'right') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
        }
      };
    return (
        <div className="frame-team">
          <div className="arrow left-arrow" >
            <img alt="left" src="img/angle-circle-left.png" onClick={() => handleArrowClick('left')}/>
          </div>
          <TeamMember name={name} photo={photoUrl} role={role} text1={text1} text2={text2}/>
          <div className="arrow right-arrow" >
            <img alt="right" src="img/angle-circle-right.png" onClick={() => handleArrowClick('right')}/>
          </div>
        </div>

    )
}

export default Team