import "./resume.css";
import doc from "./Resume.pdf";

const Resume = () => (
	<div className="resume">
		<embed src={doc} />
	</div>
);

export default Resume;
