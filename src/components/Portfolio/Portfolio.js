import './portfolio.css';
import apps from './apps';
import images from './images';

const Portfolio = () => {

  let scrollApp = (i) => {
    let div = document.querySelector('.appDisplay');
    div.style.opacity = 0;
    document.getElementById('mainImg').src = apps[i].pic;
    document.getElementById('appTitle').innerHTML = apps[i].name;
    document.getElementById('appDesc').innerHTML = apps[i].desc + '<span id="techUsed"></span>';
    document.getElementById('a1').href = apps[i].website;
    document.getElementById('a2').href = apps[i].github;
    
    let tech = document.getElementById('techUsed');
    apps[i].tech.map(path => {
      tech.innerHTML += `<img key=${path} src=${images[path]} />`
    })

    div.classList.toggle('animateApps');
    
    setTimeout(()=>{
      div.style.opacity = 1;
      div.classList.toggle('animateApps');
    },500);
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
        <img id='mainImg' src={apps[0].pic}></img>

        <a id="a1" href={apps[0].website} target='_blank'>
          <button>website</button>
        </a>
        <a id="a2" href={apps[0].github} target='_blank'>
          <button>gitHub <img src={images.github}/></button>
        </a>
        <h1 id='appTitle'> {apps[0].name} </h1>
        <p id='appDesc'> 
        {apps[0].desc}
        <span id='techUsed'>
        {apps[0].tech.map(path => <img key={path} src={images[path]} />)}
        </span>
         </p>
      </div>
    </div>
  )
}

export default Portfolio
