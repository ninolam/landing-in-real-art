import React from 'react'
import { VideoNftProps } from '../../../types/types'

const VideoNft: React.FC<VideoNftProps> = ({urlVideo}) => {
  return (
    <video width="320" height="240" controls preload="none">
      <source src={urlVideo} type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoNft