import React from "react"
import Tile from "./tile"
import Footer from "../footer"

// tiles icons
import desktop from "../../img/tiles ico/desktop-computer.png"
import gitlab from "../../img/tiles ico/gitlab.png"
import moodle from "../../img/tiles ico/moodle.png"
import timetable from "../../img/tiles ico/timetable.png"
import netcacad from "../../img/tiles ico/cisco.png"
import drive from "../../img/tiles ico/one-drive.png"
import journal from "../../img/tiles ico/journal.png"

import { useTranslation } from 'react-i18next';

const AllServices = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="container">
            <div className="container__header">
                <h2>{t('tile.head')}</h2>
                <p>{t('tile.parag')}</p>
            </div>

            <div className="services">
                
                {/* Classrooms tiles */}
                <div className="services__tile services__aud">
                    {/* 136 */}
                    <Tile
                        imgSrc={desktop}
                        altImg="classroom icon"
                        title={t('tile.classroom')}
                        bold="136"
                        description={t('tile.description')}
                        link="/136classroom"
                    />
                    
                    {/* 138 */}
                    <Tile
                        imgSrc={desktop}
                        altImg="classroom icon"
                        title={t('tile.classroom')}
                        bold="138"
                        description={t('tile.description')}
                        link="/138classroom"
                    />

                    {/* 144 */}
                    <Tile
                        imgSrc={desktop}
                        altImg="classroom icon"
                        title={t('tile.classroom')}
                        bold="144"
                        description={t('tile.description')}
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
                        description={t('tile.services.gitlab')}
                        link="https://gitlab.k21"
                    />

                    {/* Moodle */}
                    <Tile
                        imgSrc={moodle}
                        altImg="moodle icon"
                        title="Moodle"
                        description={t('tile.services.moodle')}
                        link="https://dls.viti.edu.ua/"
                    />

                    {/* Timetable */}
                    <Tile
                        imgSrc={timetable}
                        altImg="timetable icon"
                        title="Schedule"
                        description={t('tile.services.schedule')}
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
                        description={t('tile.services.netacad')}
                        link="https://www.netacad.com/"
                    />

                    {/* Drive */}
                    <Tile
                        imgSrc={drive}
                        altImg="drive icon"
                        title="Drive"
                        description={t('tile.services.drive')}
                        link="https://drive.k21"
                    />

                    {/* Journal */}
                    <Tile
                        imgSrc={journal}
                        altImg="journal icon"
                        title="Journal"
                        description={t('tile.services.journal')}
                        link="https://journal.viti.edu.ua/"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllServices