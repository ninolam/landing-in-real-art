"use client"

interface Props {
  name: string
  photo: string
  role: string
  text1: string
  text2: string
}

const TeamMember: React.FC<Props> = ( {name, photo, role, text1, text2} ) => {

    return (
        
          <>
            <div className="team-card">
              <img className="rectangle-8" alt="Rectangle" src={photo} />

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