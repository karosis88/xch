type textAreaProps = {
    title: string,
    value: string,
    onChange: (element: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({title, value, onChange}: textAreaProps) {


    return (<div>
            <div className="title-container">
                <h3 className="title">{title}</h3>
                <a onClick={() => navigator.clipboard.writeText(value)}>
                    <img className="copy" src="/xch/copy.png" alt="copy"></img>
                </a>
            </div>
            <textarea placeholder="Enter text" value={value} onChange={onChange}></textarea>
        </div>)
}