import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/docket_form.module.scss';

const DocketForm = () => {
    return (<>
        <div className={styles.docket_form_container}>
            <div className={styles.wrap_container}>
                <div className={styles.header_content}>
                    <div className={styles.wrap_title}>
                        <div className={`${styles.title} kanit-semi`}>Docket Form</div>
                        <div className={styles.nav_container}>
                            
                        </div>
                    </div>
                    <div className={styles.btn_action}></div>
                </div>
            </div>
        </div>
    </>);
} 

export default DocketForm;