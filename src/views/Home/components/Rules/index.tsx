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
    <div className="rules w-full md:w-auto mx-auto">
      <div onClick={() => handleCloseRules()} className="overlay fixed bg-black bg-opacity-25 w-full h-screen z-50 top-0 left-0"></div>
      <div className="rules-modal w-full md:w-auto h-screen md:h-auto bg-white p-5 fixed md:absolute md:rounded-lg md:block flex flex-col justify-around items-center">
        <div className="modal-head mb-5 md:flex md:items-center md:justify-between text-center">
          <h3 className="text-gray-800 text-4xl md:text-xl m-0">RULES</h3>
          <img onClick={() => handleCloseRules()} src="images/icon-close.svg" alt="close-modal" className="cursor-pointer hidden md:block" />
        </div>
        <div className="modal-body md:block flex justify-center">
          <img src="images/image-rules.svg" alt="images-rules" />
        </div>
        <div className="modal-footer md:block flex justify-center">
          <img onClick={() => handleCloseRules()} src="images/icon-close.svg" alt="close-modal" className="cursor-pointer md:hidden block" />
        </div>
      </div>
    </div>
  )
}

export default Rules
