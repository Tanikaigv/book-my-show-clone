import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Payment = (props) => {
    const close = () =>{
        props.setIsOpen(false);
    }
  return (
    <>
        <Dialog open={props.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Payment;
