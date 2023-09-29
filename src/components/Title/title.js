import './title.css';

export default ({title}) => <div id={title.split(' ').join('_')} className="title"><h1>{title}</h1></div>;

