import React from 'react';

const Modal = (props) => {
	return (
		<div className={`modal ${props.isActive && 'is-active'}`}>
			<div className="modal-background" onClick={props.onClose} />
			<div className="modal-content">{props.children}</div>
			<button className="modal-close is-large" aria-label="close" onClick={props.onClose} />
			<style jsx>{`
				.modal-content {
					background-color: white;
					min-height: 80vh;
					min-width: 80vw;
					margin: 15px;
					display: flex;
					justify-content: center;
					height: auto;
					width: auto;
				}
			`}</style>
		</div>
	);
};

export default Modal;
