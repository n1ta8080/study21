import React from "react"
import Equip from "../../components/equip"
import Footer from "../../components/footer"
import "../../styles/Equip/aud.scss"

// equipment pics
import router from "../../img/classroom equip/Router.png"
import switch1 from "../../img/classroom equip/Switch Catalyst2960 Series.png"
import switch2 from "../../img/classroom equip/Switch Catalyst2960 Series SI.png"


class Aud136 extends React.Component {
    render() {
        return (
            <div>
                <div className="aud">
                    <h2>Classroom 136</h2>
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
                {/* Router 6 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="6"
                />
                {/* Router 7 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="7"
                />
                {/* Router 8 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="8"
                />
                {/* Router 9 */}
                <Equip
                    srcEquip={router}
                    altEquip="Router"
                    link=""
                    number="9"
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
                    srcEquip={switch1}
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
                    srcEquip={switch2}
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
                <Footer />
            </div>
        )
    }
}

export default Aud136