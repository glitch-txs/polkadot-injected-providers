import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import s from './styles.module.scss'

interface Props {
  modal: boolean,
  setModal: (modal: boolean)=> void,
  children: React.ReactNode,
}

const Modal = ({ modal, setModal, children }: Props) => {

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Close menu when click outside the div
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) 
      setModal(false)
    }
  document.addEventListener("mousedown", handleClickOutside)}, [])

  const DOMElement = (
    <div className={[modal ? '' : s.closed, s.container].join(' ')}>
      <div ref={modalRef} className={[modal ? '' : s.closedCard, s.card].join(' ')}>
        { children }
      </div>
    </div>
  )
        
  return createPortal(DOMElement, document.getElementById('modal') as HTMLDivElement);
}

export default Modal