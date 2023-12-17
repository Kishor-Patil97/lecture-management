import { useState } from 'react';
import styles from './Revertpopup.module.css';
import { Button } from '@mui/material';

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
                        <textarea rows='4' cols='76' className={styles.textarea} ></textarea>
                    </div>
                    <div className={styles.btns}>
                        <Button className={styles.buttonCancel} onClick={handlePopup}>Cancel</Button>
                        <Button className={styles.buttonRevert} onClick={handlePopup}>Revert</Button>
                    </div>
                </div>
            )}
        </>
    );
};