import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { X } from 'lucide-react'
import { Transition } from '@headlessui/react'

export default function FullscreenModalBackdrop({
  children,
  showCloseButton = true,
  closeWhenClickedOutside = true,
  opacity = 50,
  onClose,
  isOpen
}) {
  return (
    <Transition
      as={Fragment}
      show={true}
      appear={true}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black transition-opacity`}
          style={{ opacity: opacity / 100 }}
          onClick={() => {
            if (closeWhenClickedOutside) {
              onClose();
            }
          }}
        />

        {/* Centering container */}
        <div className="flex min-h-full items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* Modal container */}
            <div 
              className="relative w-full"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {/* Content */}
              {children}
            </div>
          </Transition.Child>
        </div>

      </div>
    </Transition>
  )
}

FullscreenModalBackdrop.propTypes = {
  children: PropTypes.element.isRequired,
  showCloseButton: PropTypes.bool,
  closeWhenClickedOutside: PropTypes.bool,
  opacity: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}
