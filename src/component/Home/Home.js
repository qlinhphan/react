import videoHomePage from '../../assest/video-homepage.mp4'
import './video.scss'
const Home = (props) => {
    return (
        <div className='video-home'>


            <video autoPlay muted loop >
                <source src={videoHomePage} type="video/mp4" />
            </video>

            <div className='write-on-home'>
                <h1>There is a better way to ask</h1>
                <p>You don’t want to make a boring form. And your audience won’t answer one. Create a typeform instead—and make everyone happy.</p>
                <button>Get's started. It's free</button>
            </div>

        </div>


    )
}

export default Home