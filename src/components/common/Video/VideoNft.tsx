import React from 'react'
import { VideoNftProps } from '../../../types/types'

const VideoNft: React.FC<VideoNftProps> = ({urlVideo}) => {
  return (
    <video width="100%" height="100%" controls preload="none" autoPlay>
      <source src={urlVideo} type="video/mp4" />
    </video>
  )
}

export default VideoNft