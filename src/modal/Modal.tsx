import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

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
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)}, [])
        
  return createPortal(     
                    <div className={ (modal ? "" : "opacity-0 hidden") + 
                    "z-50 m-0 p-0 fixed inset-0 w-full h-screen flex justify-center items-center bg-[background-color: rgba(0, 0, 0, 0.5)]"}>
                    <div ref={modalRef} className={ (modal ? "" : "opacity-0 hidden translate-y-[-100vh] transition-all duration-1000") + 
                    "bg-slate-800 w-full max-w-fit max-h-full rounded-2xl flex justify-center items-center flex-col absolute p-2 text-3xl" }>
                    { children }
                    </div>
                    </div>
                , document.getElementById('modal') as HTMLDivElement);
}

export default Modal