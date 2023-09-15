type textAreaProps = {
    title: string,
    value: string,
    onChange: (element: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({title, value, onChange}: textAreaProps) {

    return (<div>
            <div className="title-container">
                <h3 className="title">{title}</h3>
                {/* <img src={"../static/copy.png"}></img> */}
            </div>
            <textarea placeholder="Enter text" value={value} onChange={onChange}></textarea>
        </div>)
}