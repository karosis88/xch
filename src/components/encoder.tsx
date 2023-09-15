import { useState } from "react"
import translate from "../translate"
import "../styles/styles.css"
import TextArea from "./textArea"

export default function Encoder() {
    
    const [unicodeText, setUnicodeText] = useState("")
    const [armenianText, setArmenianText] = useState("")

    function onUnicodeChange(element: React.ChangeEvent<HTMLTextAreaElement>) {
        setUnicodeText(element.target.value)
        setArmenianText(translate(element.target.value, false))
    }

    function onArmenianChange(element: React.ChangeEvent<HTMLTextAreaElement>) {
        setArmenianText(element.target.value)
        setUnicodeText(translate(element.target.value, true))
    }

    return <div className="encoder">
        <TextArea title="Unicode" value={unicodeText} onChange={onUnicodeChange}/>
        <TextArea title="Times Armenia" value={armenianText} onChange={onArmenianChange}/>
    </div>
}