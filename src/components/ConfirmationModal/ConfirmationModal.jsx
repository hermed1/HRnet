import React, { useEffect, useState } from 'react';
import { MdClose, MdCheckCircle, MdInfo, MdWarningAmber, MdErrorOutline } from 'react-icons/md';
import './ConfirmationModal.css';

export default function ConfirmationModal({
                                              isOpen,
                                              title,
                                              content,
                                              onClose,
                                              size = 'md',
                                              closeOnOverlay = false,
                                              closeOnEsc = true,
                                              scrollLock = true,
                                              tone = 'success',
                                              showIcon = true,
                                              textAlign = 'center',
                                          }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        if (isClosing) return;
        setIsClosing(true);
        setTimeout(() => {
            onClose?.();
            setIsClosing(false);
        }, 200);
    };

    useEffect(() => {
        if (!isOpen || !closeOnEsc) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen, closeOnEsc, onClose, isClosing]);

    useEffect(() => {
        if (!isOpen || !scrollLock) return;
        const body = document.body;
        const prevOverflow = body.style.overflow;
        const prevPaddingRight = body.style.paddingRight;
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarWidth > 0) {
            body.style.paddingRight = `${scrollBarWidth}px`;
        }
        body.style.overflow = 'hidden';
        return () => {
            body.style.overflow = prevOverflow;
            body.style.paddingRight = prevPaddingRight;
        };
    }, [isOpen, scrollLock]);

    if (!isOpen) return null;

    const handleOverlayMouseDown = (e) => {
        if (!closeOnOverlay) return;
        if (e.target === e.currentTarget) handleClose();
    };

    const toneIcons = {
        success: MdCheckCircle,
        info: MdInfo,
        warning: MdWarningAmber,
        danger: MdErrorOutline
    }
    const Icon = toneIcons[tone];

    return (
        <div
            className={`confirmationModal ${isClosing ? 'closing' : ''}`}
            role="dialog"
            aria-modal="true"
            onMouseDown={handleOverlayMouseDown}
        >
            <div className={`confirmationModal__card confirmationModal__card--${size} ${tone} confirmationModal__card--align-${textAlign}`}>
                <div
                    className="confirmationModal__header">
                    <button
                        type="button"
                        className="confirmationModal__close"
                        onClick={handleClose}
                        aria-label="Fermer"
                    >
                        <MdClose size={30} />
                    </button>

                    {(showIcon && Icon) && (
                        <div className={`confirmationModal__icon confirmationModal__icon--${tone} `}>

                            <Icon size={24} />
                        </div>
                    )}

                    {title && <div className="confirmationModal__title">{title}</div>}
                </div>
                {content && <div className="confirmationModal__content__container">
                    <div className="confirmationModal__content">
                        {content}
                    </div>
                </div>}
            </div>
        </div>
    );
}
