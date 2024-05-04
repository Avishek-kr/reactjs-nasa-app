import { useState } from "react";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Main setShowModal={setShowModal} showModal={showModal} />
      {showModal ? <Sidebar>dasnakjsnakjsna</Sidebar> : null}
      <Footer/>
    </>
  )
}

export default App
