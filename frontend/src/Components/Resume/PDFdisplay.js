import React from 'react';
import resume from "../../utils/global/resume.pdf"
import Styles from "./PDFdisplay.module.css"

const PDFViewer = () => {

    return (
        <>
        
        <div className={Styles.Main} > 
        <embed className={Styles.pdf} src={resume} />
        </div>

        </>

    )
}
export default PDFViewer
