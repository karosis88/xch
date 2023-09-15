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
        <TextArea title="Times Armenia" value={armenianText} onChange={onArmenianChange}/>
        {/* <svg className="module--translations-swap-svg" viewBox={"0 0 16 16"} xmlns={"http://www.w3.org/2000/svg"}><path d={"M4.806 2.194a.788.788 0 0 0-1.112 0l-2.75 2.75a.788.788 0 0 0 0 1.112.788.788 0 0 0 1.112 0l1.453-1.454v8.648a.74.74 0 1 0 1.482 0V4.602l1.453 1.454a.788.788 0 0 0 1.112 0 .788.788 0 0 0 0-1.112l-2.75-2.75zM8.444 11.056l2.75 2.75a.788.788 0 0 0 1.112 0l2.75-2.75a.786.786 0 0 0-1.111-1.112L12.5 11.39V2.75a.75.75 0 0 0-1.5 0v8.639L9.556 9.944a.788.788 0 0 0-1.112 0 .788.788 0 0 0 0 1.112z"}></path></svg> */}
        <TextArea title="Unicode" value={unicodeText} onChange={onUnicodeChange}/>
    </div>
}