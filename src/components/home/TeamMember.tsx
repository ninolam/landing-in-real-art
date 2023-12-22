"use client"

import { TeamMemberProps } from "../../types/types"

const TeamMember: React.FC<TeamMemberProps> = ( {name, photo, role, text1, text2} ) => {
  return (
    <>
        <div className="frame-team-member">
          <img id="photo-member" className="photo-team-member" alt="Rectangle" src={photo} />
        </div>
        <div className="colum">
        <div className="wrapper-text">
            <div className="def">
            <div id="team-member-p-1" className="team-member-p-1">
                {text1}
            </div>
            <div id="team-member-p-2" className="team-member-p-2">
                {text2}
            </div>
            </div>
            <div className="chara">
            <div id="member-name" className="member-name">{name}</div>
            <div id="member-role" className="member-role">{role}</div>
            </div>
        </div>
        
        </div>
    </>
  )
}

export default TeamMember