import React from "react"
import Tile from "../../components/tile"
import Footer from "../../components/footer"

// tiles icons
import desktop from "../../img/tiles ico/desktop-computer.png"
import gitlab from "../../img/tiles ico/gitlab.png"
import moodle from "../../img/tiles ico/moodle.png"
import timetable from "../../img/tiles ico/timetable.png"
import netcacad from "../../img/tiles ico/cisco.png"
import drive from "../../img/tiles ico/one-drive.png"
import journal from "../../img/tiles ico/journal.png"

class Services extends React.Component{
    render () {
        return (
            <div className="container">
                <div className="container__header">
                    <h2>Department21</h2>
                    <p>make study convenient and modern for you </p>
                </div>

                <div className="services">
                    
                    {/* Classrooms tiles */}
                    <div className="services__tile services__aud">
                        {/* 136 */}
                        <Tile
                            imgSrc={desktop}
                            altImg="classroom icon"
                            title="Classroom"
                            bold="136"
                            description="Remote access to network equipment in 136 classroom"
                            link="/136classroom"
                        />
                        
                        {/* 138 */}
                        <Tile
                            imgSrc={desktop}
                            altImg="classroom icon"
                            title="Classroom"
                            bold="138"
                            description="Remote access to network equipment in 138 classroom"
                            link="/138classroom"
                        />

                        {/* 144 */}
                        <Tile
                            imgSrc={desktop}
                            altImg="classroom icon"
                            title="Classroom"
                            bold="144"
                            description="Remote access to network equipment in 144 classroom"
                            link="/144classroom"
                        />
                    </div>

                    {/* Oranges items */}
                    <div className="services__tile services__orange">
                        {/* GitLab */}
                        <Tile
                            imgSrc={gitlab}
                            altImg="gitlab icon"
                            title="GitLab"
                            description="Version Control System"
                            link="https://gitlab.k21"
                        />

                        {/* Moodle */}
                        <Tile
                            imgSrc={moodle}
                            altImg="moodle icon"
                            title="Moodle"
                            description="Online learning platform with huge MITIT library"
                            link="https://dls.viti.edu.ua/"
                        />

                        {/* Timetable */}
                        <Tile
                            imgSrc={timetable}
                            altImg="timetable icon"
                            title="Schedule"
                            description="Timetable of your classes"
                            link="https://schedule.mitit/"
                        />
                    </div>

                    {/* Blue icons */}
                    <div className="services__tile services__blue">
                        {/* Netacad */}
                        <Tile
                            imgSrc={netcacad}
                            altImg="cisco icon"
                            title="Netacad"
                            description="Network Cisco Academy"
                            link="https://www.netacad.com/"
                        />

                        {/* Drive */}
                        <Tile
                            imgSrc={drive}
                            altImg="drive icon"
                            title="Drive"
                            description="The reliable place for saving your data"
                            link="https://drive.k21"
                        />

                        {/* Journal */}
                        <Tile
                            imgSrc={journal}
                            altImg="journal icon"
                            title="Journal"
                            description="Research papers collection"
                            link="https://journal.viti.edu.ua/"
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Services