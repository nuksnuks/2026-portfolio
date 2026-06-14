import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className="text-box">
        <div className="text">
          <div className="profile-container">
            <img src="/profilbillede.jpg" alt="Profile" />
            <div> 
              <h1>David Wogelius</h1>
              <h2>Webudvikler & Multimediedesigner</h2>
            </div>
          </div>
          <p>
            Jeg er webudvikler og multimediedesigner med erfaring inden for både frontend og backend udvikling. Jeg brænder at skabe visuelt flotte og funktionelle websites og webapps, der giver brugerne en fantastisk oplevelse. <br/><br/>
            Min udviklerpasstion startede i 2021 da jeg skulle lære HTML, CSS og JavaScript under min Multimediedesigneruddannelse tilbage i 2021.<br/><br/>
            Jeg blev hurtigt bidt af processen af at fikse fejl og debugge kode og basal HTML, CSS og JavaScript blev hurtigt til mere avancerede teknologier som React, Vue, Node.js og Express.<br/><br/>
            Derfor besluttede jeg mig for at studere videre og startede på min professionsbachelor i Webudvikling i 2023<br/><br/>
          </p>
        </div>
      </div>
      <div className="xp-text-box">
        <div className="text">
          <h2>Projekter jeg er stolt af</h2>
          <h3>Webudvikling 2023 - 2025</h3>
          <p>
            Under webudviklerpraktik arbejdede jeg på en <a href="https://play.google.com/store/apps/details?id=com.anonymous.airPlateReactApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">drone detections app</a> i React Native, hvor jeg min medstuderende og jeg, udviklede og lanceret app'en i en periode på 12 uger.<br/><br/>
            Til mit bachelorprojekt udviklede jeg en <a href="https://wogelplanner.vercel.app/" target="_blank" rel="noopener noreferrer">projektstyringsapp</a> i React, hvor jeg implementerede funktioner som opgavestyring, tidsplanlægning og kortlægning af opgaver for at hjælpe teams med at organisere og spore deres projekter effektivt.<br/><br/>
          </p>
        </div>
      </div>
      <div className="gh-text-box">
        <div className="text">
          <h2>GitHub</h2>
          <p>
            Git og GitHub er centrale værktøjer i min udviklingsproces og understøtter versionsstyring, samarbejde og automatisering.<br/><br/>
            Jeg bruger typisk GitHub til CI/CD, hvor builds, tests og deployment automatiseres for at sikre hurtige og stabile releases.<br/><br/>
            Senest har jeg integreret GitHub Copilot i mit arbejde til kodeforslag, refaktorering, dokumentation og testgenerering, hvilket øger produktiviteten og effektiviserer udviklingsprocessen.<br /><br/>
            På min githubprofil kan du finde nogle af mine projekter og se kildekoderne til mine private projekter så som en projektstyringsapp, en hjemmestreamingstjeneste og kildekoden til denne portfolio hjemmeside.<br /><br/>
            Se min GitHub profil her: <a href="https://github.com/nuksnuks" target="_blank" rel="noopener noreferrer">github.com/nuksnuks</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default HomePage