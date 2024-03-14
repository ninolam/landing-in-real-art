import React from 'react'
import { VideoNftProps } from '../../../types/types'

const VideoNft: React.FC<VideoNftProps> = ({urlVideo}) => {
  return (
    <>
      <img src={urlVideo} alt='' />
    </>
  )
}

export default VideoNft