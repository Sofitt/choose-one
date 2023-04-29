import React, {useState} from "react";

import './dropzone.scss'

export default function () {
	const [dragOver, setDragOver] = useState(false)
	// @ts-ignore
	const log = (files) => {
		console.log(files)
		const reader = new FileReader()
		reader.addEventListener('load', () => {
			console.log('reader evt', reader.result)
		})
		reader.readAsText(files[0])
	}
	return (
		<div className={`dropzone ${dragOver ? 'highlight' : '' }`}>
			<input className={`dropzone_input`}
						 type="file"
						 accept="text/plain"
						 onInput={(evt:React.ChangeEvent<HTMLInputElement>) => log(evt.target.files)}
						 onDragOver={() => setDragOver(true)}
						 onDragLeave={() => setDragOver(false)} onDrop={() => setDragOver(false)}/>
		</div>
	)
}
