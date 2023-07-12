import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-body p-0">
                <div className="p-5 text-center">
                    <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i> 
                    <div className="text-3xl mt-5">Are you sure?</div>
                    <div className="text-slate-500 mt-2">
                        Do you really want to delete these records? 
                        <br />
                        This process cannot be undone.
                    </div>
                </div>
                <div className="px-5 pb-8 text-center">
                    <button onClick={onCancel} className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                    <button onClick={onConfirm} className="btn btn-danger w-24" >Delete</button>
                </div>
            </div>
        </div>
     </div>
    </Modal>
  );
};

export default ConfirmationModal;
