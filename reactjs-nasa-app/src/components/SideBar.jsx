export default function Sidebar(props) {
    const { setShowModal, showModal } = props;

    return (
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
            <h2>The Brutal Maryial Landscape</h2>
            <div>
                <p>Description</p>
                <p>djksndjsndjsdnjsndjsndjs djsndjsd sd
                    dsjndjsndsjdnksjdnsjdnsjkdsd
                    sdjknkjsndjsndjksndjsnjksd
                    jdsnjsnjdnsjksnjdsnk
                </p>
            </div>
            <button onClick={() => setShowModal(!showModal)}>
                <i className="fa-solid fa-right-long"></i>
            </button>
            </div>
        </div>
    )
}