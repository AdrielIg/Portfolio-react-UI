import React from 'react'
import pdf from '../../Assets/cv/Adriel_Gomez_CV.pdf'


export const DownloadCV = () => {
  return (
    <a className='download-cv'
      download='Adriel_Gomez_CV.pdf'
      href={pdf}>Download Resume</a>
  )
}
