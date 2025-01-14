import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Payment = (props) => {
    const close = () =>{
        props.setIsOpen(false);
    }
    const launchRazorPay = () =>{

    }
  return (
    <>
        <Dialog open={props.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 bg-black bg-opacity-45" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                Please make a Payment
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black/70">
                Hello please make the payment with the following steps
              </p>
              <div className="mt-4 gap-3">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={launchRazorPay}
                >
                  Pay ${props.price}
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Cancel Payment
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Payment;
