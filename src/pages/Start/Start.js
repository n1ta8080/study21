import React from "react"
import { Link } from "react-router-dom"
import Slidee from "../../components/carousel"
import "../../styles/Start/start.scss"

class Start extends React.Component {
    render() {
        return (
            <div>
                <Link to="/login">Sign In</Link>
                <Link to="/services">Services</Link>

                <main>
                    <section className="part">
                        <div className="carousel">
                        <Slidee />
                        </div>
                        <div className="about">
                            <h2>Welcome to <br /> <span>Department21</span> </h2>
                            <p>We provide skills in maintain network equipment and this web-site was written for your convenient study. We dedicated to prepare you as future specialist for becoming System Administrator and DevOps engineer for Armed Forces of Ukraine</p>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Start