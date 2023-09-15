import './bubbles.css';

const Bubbles = props =>
    <div className="background">
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <div className="bubble1">
            <div className="bubble2">#</div>
        </div>
        <main>
            {props.children}
        </main>
    </div>

export default Bubbles;