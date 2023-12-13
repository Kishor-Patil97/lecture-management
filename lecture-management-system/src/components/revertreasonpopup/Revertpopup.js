import styles from './Revertpopup.module.css';
import { Button } from '@mui/material';

export const Revertpopup = () => {
    return (
        <div class={styles.divrevert}>
            <div className={styles.group}>
                <div className={styles.text}>Reason to revert:</div>
                <textarea rows='4' cols='76' className={styles.textarea} ></textarea>
            </div>
            <div className={styles.btns}>
                <Button className={styles.buttonCancel}>Cancel</Button>
                <Button className={styles.buttonRevert}>Revert</Button>
            </div>
        </div>
    );
};