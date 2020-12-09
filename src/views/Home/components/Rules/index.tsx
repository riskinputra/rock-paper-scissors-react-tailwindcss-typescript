import React from 'react'
import './styles.scss'

interface RulesProps {
  closeRules: () => void
}

function Rules({ closeRules }: RulesProps) {

  const handleCloseRules = () => {
    closeRules()
  }

  return (
    <div className="rules w-full mx-auto">
      <div onClick={() => handleCloseRules()} className="overlay fixed bg-black bg-opacity-25 w-full h-screen z-50 top-0 left-0"></div>
      <div className="rules-modal bg-white p-5 absolute rounded-lg">
        <div className="modal-head mb-5 flex items-center justify-between">
          <h3 className="text-gray-800 text-xl m-0">RULES</h3>
          <img onClick={() => handleCloseRules()} src="images/icon-close.svg" alt="close-modal" className="cursor-pointer" />
        </div>
        <div className="modal-body">
          <img src="images/image-rules.svg" alt="images-rules" />
        </div>
      </div>
    </div>
  )
}

export default Rules
