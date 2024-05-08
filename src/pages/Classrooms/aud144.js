import React from "react"
import Equip from "../../components/equip"
import Footer from "../../components/footer"
import "../../styles/Equip/aud.scss"

// equipment pics
import router2911 from "../../img/classroom equip/2911.png"
import router4321 from "../../img/classroom equip/4321.png"
import asa from "../../img/classroom equip/asa-5550 1.png"
import switch3750 from "../../img/classroom equip/3750.png"
import switch1 from "../../img/classroom equip/Switch Catalyst 3560 Series PoE-48.png"
import switch2 from "../../img/classroom equip/Switch Catalyst2960 Series SI.png"

class Aud144 extends React.Component {
    render() {
        return (
            <div>
                <div className="aud">
                    <h2>Classroom 144</h2>
                    <p>Choose network devise which you want to get remote access</p>
                    <p>(just press chosen device to start maintaining work)</p>
                </div>
                {/* Router 1 */}
                <Equip
                    srcEquip={router2911}
                    altEquip="Router"
                    link=""
                    number="1"
                />
                {/* Router 2 */}
                <Equip
                    srcEquip={router2911}
                    altEquip="Router"
                    link=""
                    number="2"
                />
                {/* Router 3 */}
                <Equip
                    srcEquip={router4321}
                    altEquip="Router"
                    link=""
                    number="3"
                />
                {/* Router 4 */}
                <Equip
                    srcEquip={router4321}
                    altEquip="Router"
                    link=""
                    number="4"
                />
                {/* ASA */}
                <Equip
                    srcEquip={asa}
                    altEquip="ASA"
                    link=""
                    number="1"
                />
                {/* Switch 1 */}
                <Equip
                    srcEquip={switch3750}
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
                    srcEquip={switch2}
                    altEquip="Switch"
                    link=""
                    number="6"
                />
                {/* Switch 7 */}
                <Equip
                    srcEquip={switch2}
                    altEquip="Switch"
                    link=""
                    number="7"
                />
                {/* Switch 8 */}
                <Equip
                    srcEquip={switch2}
                    altEquip="Switch"
                    link=""
                    number="8"
                />
                <Footer />
            </div>
        )
    }
}

export default Aud144