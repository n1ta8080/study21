import React from "react"
import { Link } from "react-router-dom"
import depLogo from "../../img/main/department21 logo.png"
import ciscoLogo from "../../img/main/cisco logo.png"
import "../../styles/Registration/registration.scss"

class Registration extends React.Component {
    render() {
        return (
            <div className="reg">
                {/* Left side - about site */}
                <div className="reg__greeting">
                    <div class="reg__greeting__logo">
                        <img src={depLogo} alt="department21 logo"/>
                    </div>
                    <h1>Welcome to <br/> <span>Department21</span></h1>
                    <p>the main application for maintaining <br /> network equipment - <a href="#">more details</a></p>
                    <div class="reg__greeting__partners">
                        <img src={ciscoLogo} alt="cisco logo"/>
                    </div>
                </div>
                {/* Right side - registration form */}
                <div className="reg__form">
                    <form action="" method="">
                        <h3>Sign In</h3>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button type="submit" class="send">Sign In</button>
                        <div class="devider">
                            <div></div>
                            <div>Or</div>
                            <div></div>
                        </div>
                        <button class="guest"><Link to="/">Continue as a guest</Link></button>
                    </form>
                </div>
                {/* Partners */}
                <div class="reg__partners">
                    <img src={ciscoLogo} alt="cisco logo"/>
                </div>
            </div>
        )
    }
}

export default Registration