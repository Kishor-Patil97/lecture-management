import { useState } from 'react';
import styles from './Revertpopup.module.css';

export const Revertpopup = () => {
    const [showPopup, setShowPopup] = useState(true);

    const handlePopup = () => {
        setShowPopup(false);
    }
    return (
        <>
            {showPopup && (
                <div class={styles.divrevert}>
                    <div className={styles.group}>
                        <div className={styles.text}>Reason to revert:</div>
                        <textarea rows='4' cols='70' className={styles.textarea} ></textarea>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.buttonCancel} onClick={handlePopup}>Cancel</button>
                        <button className={styles.buttonRevert} onClick={handlePopup}>Revert</button>
                    </div>
                </div>
            )}
        </>
    );
};