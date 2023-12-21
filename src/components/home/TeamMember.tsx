"use client"

import { TeamMemberProps } from "../../types/types"

const TeamMember: React.FC<TeamMemberProps> = ( {name, photo, role, text1, text2} ) => {
  return (
    <>
        <div className="frame-team-member">
          <img className="photo-team-member" alt="Rectangle" src={photo} />
        </div>
        <div className="colum">
        <div className="wrapper-text">
            <div className="def">
            <div className="team-member-p-1">
                {text1}
            </div>
            <div className="team-member-p-2">
                {text2}
            </div>
            </div>
            <div className="chara">
            <div className="timoth-e-roy">{name}</div>
            <div className="porteur-du-projet">{role}</div>
            </div>
        </div>
        
        </div>
    </>
  )
}

export default TeamMember