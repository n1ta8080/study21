import React from "react"
import AllServices from "../../components/services/allServices"
import Nav from "../../components/nav/nav"

class Services extends React.Component{
    render () {
        return (
            <div>
                <Nav />
                <AllServices />
            </div>
        )
    }
}

export default Services