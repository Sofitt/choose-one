import Scroll from "@/components/mo-face/scroll";
import './mo-face.scss'
import {useState} from "react";
export default () => {
	const [hover, setHover] = useState(false)
	const [active, setActive] = useState(false)
	const [text, setText] = useState('')


	const reader = new FileReader()
	reader.addEventListener('load', () => {
		setText(reader.result ?? '')
		console.log('reader evt', reader.result)
	})

	const prevent = (e) => {
		e.stopPropagation()
		e.preventDefault()
	}
	const handleHover = (e, hover:boolean) => {
		prevent(e)
		setHover(hover)
	}
	const getFiles = (e) => {
		const files = [];
		[...e.dataTransfer.items].forEach((item) => {
			if (item.kind === "file") {
				const file = item.getAsFile();
				files.push(file)
			}
		});
		return files
	}
	const handleDrop = (e, hover:boolean) => {
		const files = getFiles(e)
		reader.readAsText(files[0])
		setActive(hover)
	}

	const eye = (key:number) => <div key={key} className="eye"><div className={`pupil`} /></div>
	return (
		<div className={`mo-face ${hover ? '__hover' : ''} ${active ? '__active' : ''}`}
				 onDragEnter={(e) => handleHover(e, true)}
				 onDragLeave={(e) => handleHover(e, false)}
				 onDrop={(e) => handleDrop(e, true)}
				 onDragOver={prevent}>
			<Scroll content={[eye(1), eye(2)]}/>
			<div className="mouth">
				<p>
					{text}
				</p>
			</div>
		</div>
	)
}
