import React from "react"
import Equip from "../../components/equip"
import Footer from "../../components/footer"
import Nav from "../../components/nav/nav"
import "../../styles/Equip/aud.scss"

// equipment pics
import router from "../../img/classroom equip/Router Cisco 2800 Series.png"
import switch1 from "../../img/classroom equip/Switch Catalyst 3550.png"
import switch2 from "../../img/classroom equip/Switch Catalyst2960 Series.png"

class Aud138 extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="aud">
                    <h2>Classroom 138</h2>
                    <p>Choose network devise which you want to get remote access</p>
                    <p>(just press chosen device to start maintaining work)</p>
                </div>
                {/* Router 1 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="1"
                />
                {/* Router 2 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="2"
                />
                {/* Router 3 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="3"
                />
                {/* Router 4 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="4"
                />
                {/* Router 5 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="5"
                />
                {/* Switch 1 */}
                <Equip
                    srcEquip={switch1}
                    altEquip="Switch"
                    link=""
                    number="1"
                />
                {/* Switch 2 */}
                <Equip
                    srcEquip={switch2}
                    altEquip="Switch"
                    link=""
                    number="2"
                />
                {/* Switch 3 */}
                <Equip
                    srcEquip={switch1}
                    altEquip="Switch"
                    link=""
                    number="3"
                />
                {/* Switch 4 */}
                <Equip
                    srcEquip={switch1}
                    altEquip="Switch"
                    link=""
                    number="4"
                />
                {/* Switch 5 */}
                <Equip
                    srcEquip={switch2}
                    altEquip="Switch"
                    link=""
                    number="5"
                />
                {/* Switch 6 */}
                <Equip
                    srcEquip={switch1}
                    altEquip="Switch"
                    link=""
                    number="6"
                />
                <Footer />
            </div>
        )
    }
}

export default Aud138;