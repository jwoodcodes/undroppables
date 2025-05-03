import React, { useEffect, useRef, useState } from 'react';
import styles from './dataTable.module.css'
// import PlayerGradesChart from './PlayerGradesChart'; // Adjust the import path as necessary
import Image from 'next/image';

export default function PlayerDialog({ player, onClose, data, comparePlayer, setComparePlayer }) {
    const dialogRef = useRef(null); // Create a ref for the dialog
    const [isAvailable, setIsAvailable] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const [comparePlayerName, setComparePlayerName] = useState(null);
    const [comparePlayerData, setComparePlayerData] = useState(null);

    const [teamOnePlayers, setTeamOnePlayers] = React.useState([]);
    const [teamOneSearchValue, setTeamOneSearchValue] = React.useState('');
    
    const [spiderComparePlayersList, setSpiderComparePlayersList] = useState([]);
    const [spiderSearchValue, setSpiderSearchValue] = useState('');


    

    function teamOneSearchOnChange(event) {
        setTeamOneSearchValue(event.target.value);
    }
    //
    function onPlayerSelectFromList(searchTerm, player) {
        // console.log(searchTerm, player)
        event.preventDefault();
        setTeamOneSearchValue(searchTerm);
        setTeamOnePlayers([player, ...teamOnePlayers]);
        setTeamOneSearchValue('');
        setComparePlayer(player);
    }
    // function onSearch(searchTerm, player) {
    //     event.preventDefault();
    //     // console.log(player)
    //     data.map(player => {
    //         if (player.Player_Name.toLowerCase() === teamOneSearchValue) {
    //             setTeamOneSearchValue(searchTerm);
    //             setTeamOnePlayers([player, ...teamOnePlayers]);
    //             setTeamOneSearchValue('');
    //         }
    //     });
    // }

    function removePlayer(name) {
        const newPlayerArray = teamOnePlayers.filter(player => {
            return player.name !== name;
        });
        setComparePlayer(null)
        setTeamOnePlayers(newPlayerArray);
    }

    function spiderSearchOnChange(event) {
        setSpiderSearchValue(event.target.value);
    }

    function onSpiderPlayerSelectFromList(searchTerm, selectedPlayer) {
        event.preventDefault();
        if (spiderComparePlayersList.length < 4) { // Limit to 4 additional players (5 total including main player)
            setSpiderComparePlayersList([...spiderComparePlayersList, selectedPlayer]);
        }
        setSpiderSearchValue('');
    }

    function removeSpiderComparePlayer(playerName) {
        setSpiderComparePlayersList(spiderComparePlayersList.filter(p => p.Player_Name !== playerName));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                onClose(); // Close the dialog if clicked outside
                setComparePlayer(null)
            }
        };

        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup the event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    // Log the comparePlayer whenever it changes
    useEffect(() => {
        // console.log(comparePlayer);
    }, [comparePlayer]);

    // console.log(`/${playersTeam}.png`)
    //
    ///
    ////
    /////
    ////
    //
    return (
        
        <div className={styles.dialogOverlay}>
            
            <div className={styles.dialogContent} ref={dialogRef}>
            <button onClick={onClose} className={styles.closeBtn}>X</button>
            <div className={styles.teamLogoPlayerNameAndInfoboxWrapper}>
               
               <div className={styles.logoAndPlayerNameWrapper}>
                
                <h2 className={styles.playerName}>{player.name}</h2>
                </div>
               

                <div className={styles.infoBox}>
                {/* {playerBio.Position && (
                        <p><strong>{playerBio.Position}: </strong> {playerBio.NFL_Team}</p>
                    )}
                    {playerBio.Height && (
                        <p><strong>{playerBio.Height} {playerBio.Weight}</strong> </p>
                    )}
                    {playerAge && (
                        <p><strong>Age:</strong> {playerAge}</p>
                    )}
                    {playerBio.Draft_Year && (
                        <p><strong>Draft Class:</strong> {playerBio.Draft_Year}</p>
                    )}
                    {playerAge && (
                        <p><strong>Experience:</strong> {yearsSincePlayersDraft} years</p>
                    )}
                    {playerBio.Draft_Pick && (
                        <p><strong>Draft Pick:</strong> {playerBio.Draft_Pick}</p>
                    )}
                    
                    {playerBio.School && (
                        <p><strong>College:</strong> {playerBio.School}</p>
                    )} */}
                </div>
            </div>


                <form onSubmit={() => onPlayerSelectFromList(player.Player_Name, player)} className={styles.searchForm}>
                    <div className={styles.searchInputAndButtonWrapper}>
                        <input
                        type="text"
                        value={teamOneSearchValue}
                        onChange={teamOneSearchOnChange}
                        placeholder='Search player to compare'
                        className={styles.teamOneSearchInput}
                        />
                        {/* <button
                        onClick={() => onPlayerSelectFromList(player.Player_Name, player)}
                        className={styles.addPlayerButton}
                        >
                         Compare
                        </button> */}
                    </div>
                    
                    {data.filter(player => {
                    const searchTerm = teamOneSearchValue.toLowerCase();
                    const name = player.name.toLowerCase();
                    let tempLast = name.split(/\s/);
                    let lastName = tempLast[1];
                    const searchLength = searchTerm.length > 0;

                    if (searchLength && name !== searchTerm) {
                    return name.startsWith(searchTerm) || lastName.startsWith(searchTerm);
                    }
                    return false;
                    })
                    .slice(0, 15)
                    .map(function (player) {
                    return (
                     <div
                        onClick={() => onPlayerSelectFromList(player.Player_Name, player)}
                        key={player.Player_Name}
                        className={styles.selectMenuItem}
                        >
                        {player.Player_Name}
                     </div>
                    );
                    })}
                </form>
            
              
                
                
                {/* <PlayerGradesChart 
                    rookieGuideData={player.rookieGuideData} 
                    filmGrades={player.filmGrades} 
                    isSelectedPlayer={true} 
                    name={player.Player_Name}
                    comparePlayerData={comparePlayer ? {
                        rookieGuideData: comparePlayer.rookieGuideData,
                        filmGrades: comparePlayer.filmGrades,
                        name: comparePlayer.Player_Name
                    } : null}
                    spiderComparePlayers={spiderComparePlayersList}
                    spiderSearchValue={spiderSearchValue}
                    onSpiderSearchChange={spiderSearchOnChange}
                    onSpiderPlayerSelect={onSpiderPlayerSelectFromList}
                    onRemoveSpiderPlayer={removeSpiderComparePlayer}
                    allPlayers={data}
                    mainPlayerName={player.Player_Name}
                    spiderComparePlayersList={spiderComparePlayersList}
                /> */}

                
                

                <div className={styles.breakdownAndDataTablesWrapper}>

                <div>
                <h3 className={styles.BreakdownHeading}>Player Breakdown</h3>
                <p className={styles.breakdown} 
                dangerouslySetInnerHTML={{
                    __html: player.PlayerBio && player.PlayerBio.Breakdown
                        ? player.PlayerBio.Breakdown.replace(/<br\s*\/?>/gi, '<br />')
                        : ''
                }} />
                </div>

               
                </div>
                
               

              
                
                
            </div>

            
            
        </div>
    );
}