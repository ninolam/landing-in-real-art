"use client"
import { useEffect, useState } from "react"
import { useAppContext } from "../context"
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';

interface Props {
  name: string
  photo: string
  role: string
  text1: string
  text2: string
}

const TeamMember: React.FC<Props> = ( {name, photo, role, text1, text2} ) => {

    //Get the language of the global context
    const {lang, setLang} = useAppContext()

    const FIREBASE_TEAM_COLLECTION         = 'Team'
    const FIREBASE_KEY_TEXT_1              = 'text1'
    const FIREBASE_KEY_TEXT_2              = 'text2'
    const FIREBASE_KEY_PROJECT_LEADER      = 'project_leader'
    const FIREBASE_KEY_PROJECT_LEADER_NAME = 'project_leader_name'
    let LANGUAGE                           = lang

    return (
        
          <>
            <div className="team-card">
              <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-150.png" />

              <div className="team-member-container">
                <div className="team-member-description">
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
                      <div className="text-wrapper-16">{name}</div>
                      <div className="text-wrapper-17">{role}</div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </>
    )
}

export default TeamMember