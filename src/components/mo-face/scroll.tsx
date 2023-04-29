import './scroll.scss'

interface props {
	content: Array<Object>
}

export default (props:props) => {
	return (
		<div className={`scroll`}>
			{props.content.map((el:HTMLElement) => el)}
		</div>
	)
}
