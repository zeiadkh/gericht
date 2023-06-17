import images from '../../assets'
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from "react-icons/tb";
import "./video.css"
import {useState, useRef} from "react"
const Video = () => {
  const [clicked, setClicked] = useState(false)
  const vidref = useRef()

  function handleClick(){
    setClicked((prevClick) => !prevClick)
    clicked? vidref.current.pause(): vidref.current.play()
  }
  let overlay = {backgroundColor: 'rgba(0,0,0,0.3)'}
  return (
    <>
      <div className="video">
        <video
          src={images.video}
          ref={vidref}
          type="video/mp4"
          loop
          muted
        ></video>
        <div
          className="video-overlay container"
          style={!clicked ? overlay : {}}
        >
          <button
            type="button"
            id='playvideo'
            className="container"
            onClick={handleClick}
            style={!clicked ? { border: "1px solid var(--color-gold)" } : {}}
          >
            {!clicked ? (
              <TbPlayerPlayFilled size={30} />
            ) : (
              <TbPlayerPauseFilled size={30} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Video