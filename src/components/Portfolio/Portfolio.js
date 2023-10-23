import './portfolio.css';
import apps from './apps';
import images from './images';

const Portfolio = () => {

  let scrollApp = (i) => {
		let el = document.querySelector(".apps");
		let height = el.offsetHeight + 5;
		el.scrollTo({ top: height * i, behavior: "smooth" });

		let el2 = document.querySelector(".infoContainer");
		let height2 = el2.offsetHeight;
		el2.scrollTo({ top: height2 * i, behavior: "smooth" });
	};

  return (
    <div className="portContainer">
      <h1 id="portfolio" className="portfolioTitle">
				Portfolio{" "}
			</h1>
      <div className="appNav">
				{apps.map(({ key, pic }, i) => (
					<button key={"btn_" + key} onClick={() => scrollApp(i)}>
						{" "}
						<img src={pic} />
					</button>
				))}
			</div>
      <div className='appDisplay'>
        <img src={apps[0].pic}></img>

        <a id="a1" href={apps[0].website} target='_blank'>
          <button>website</button>
        </a>
        <a id="a2" href={apps[0].github} target='_blank'>
          <button>gitHub</button>
        </a>
        <h1 id='appTitle'> {apps[0].name} </h1>
        <p id='appDesc'> 
        {apps[0].desc}
        <span id='techUsed'>
        {apps[0].tech.map(path => <img src={images[path]} />)}
        </span>
         </p>
      </div>
    </div>
  )
}

export default Portfolio
