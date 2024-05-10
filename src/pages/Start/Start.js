import React from "react"
import "../../styles/Start/start.scss"
import Nav from "../../components/nav/nav"
import HomePage from "../../components/start/homePage"

class Start extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <HomePage />
            </div>
        )
    }
}

export default Start