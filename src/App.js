import { useState } from "react";
import {
	Bubbles,
	Header,
	Title,
	About,
	Portfolio,
	Resume,
	Socials,
	Divider,
	Contact,
} from "./components";

const App = () => {
	const [page, setPage] = useState("about");

	return (
		<>
			<Header setPage={setPage} />

			{page == "about" ? 
				<Bubbles>
						<About />
						<Divider />
						<Portfolio page={page} />
						<Title title="Contact" />
						<Contact />
				</Bubbles>
			 : 
				<Resume />
			}
			<Socials setPage={setPage}/>
		</>
	);
};
export default App;
