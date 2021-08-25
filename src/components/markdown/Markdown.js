import React, { useState, useEffect } from 'react';
import markdownData from "../../markdown/Intro.md"
import Markdown from 'markdown-to-jsx';
import HeroImage from "../images/Hero.jpg";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark as colorStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownComp = () => {

	const [error, setError] = useState("")
	const [markdownText, setMarkdownText] = useState("")
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(markdownData)
				const data = await res.text()
				setMarkdownText(data)
			} catch (error) {
				setError("An error occured. Sorry for the inconvenience")
			}
		})()
	}, [])

	if (error) return <div>{error}</div>
	if (!markdownText) return <div>Loading</div>;
	return (<>
		<div className="markdown-body">
			<img src={HeroImage} alt="markdown_hero_image" className="markdown-hero " />
			<Markdown
				options={{
					overrides: {
						img: { component: Image, props: { className: "markdown-image" } },
						pre: PreHighlighter
					}

				}
				}
			>{markdownText}</Markdown>

		</div>

	</>)
}

function Image(props) {
	return (<>
		<img alt="markdown image" {...props} />
	</>)
}

function PreHighlighter({ children, ...props }) {
	return (<>

		<SyntaxHighlighter language="c" style={colorStyle}>
			{children.props.children}
		</SyntaxHighlighter>

	</>);
}
export default MarkdownComp
