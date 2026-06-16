import { Link } from "react-router";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="intro-box">
        <div className="intro-text-and-image">
            <img src="/profilbillede.jpg" alt="Profile" className="profile-image" />
            <div className="contacts"> 
              <h1>David Wogelius</h1>
              <h2>Webudvikler & Multimediedesigner</h2>
              <a href="tel:+4552224102">
                <LuPhone />
                <span> +45 52 22 41 02</span>
              </a><br/>

              <a href="mailto:david.wogelius@gmail.com">
                <LuMail />
                <span> davidwogelius@gmail.com</span>
              </a><br/>

              <a
                href="https://github.com/nuksnuks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span> github.com/nuksnuks</span>
              </a>
            </div>
        </div>

      </div>
      <div className="text-box">
        
        
        <div className="text-and-image">
          <img src="/transparent_images/skills.png" alt="logos" />
          <p>
            Jeg er webudvikler og multimediedesigner med erfaring inden for både frontend og backend udvikling. Jeg brænder at skabe visuelt flotte og funktionelle websites og webapps, der giver brugerne en fantastisk oplevelse. <br/><br/>
            Min udviklerpasstion startede i 2021 da jeg skulle lære HTML, CSS og JavaScript under min Multimediedesigneruddannelse tilbage i 2021.<br/><br/>
            Jeg blev hurtigt bidt af processen af at fikse fejl og debugge kode og basal HTML, CSS og JavaScript blev hurtigt til mere avancerede teknologier som React, Vue, Node.js og Express.<br/><br/>
            Derfor besluttede jeg mig for at studere videre og startede på min professionsbachelor i Webudvikling i 2023<br/><br/>
          </p>
        </div>
      </div>
      <div className="text-box">
        <div className="text-and-image">
          <img src="/transparent_images/seo.png" alt="seo" />
          <div>
            <h2>SEO & SEM</h2>
            <p>
              SEO (Search Engine Optimization) og SEM (Search Engine Marketing) spiller en central rolle i at skabe synlighed og værdi på nettet. Selvom fokus ofte ligger på design, funktionalitet og brugeroplevelse, har jeg gennem min karriere erfaret, at selv de bedste digitale løsninger kun skaber værdi, hvis brugerne rent faktisk kan finde dem. <br/><br/>
              Tidligere betragtede jeg SEO/SEM som sekundære discipliner i forhold til selve udviklingsarbejdet. Jeg fandt dog hurtigt ud af, at søgemaskineoptimering er en af de mest efterspurgte og forretningskritiske kompetencer inden for webudvikling. Derfor har jeg gennem en række projekter opbygget erfaring med teknisk SEO, herunder optimering af metadata, semantisk HTML, søgeordsanalyse. <br/><br/>
              Derudover har jeg arbejdet med SEM, hvor fokus er at skabe målrettet trafik gennem betalte annonceringsplatforme som Google Ads. Her har jeg erfaring med opsætning af kampagner, analyse af brugeradfærd, konverteringssporing og løbende optimering af annonceperformance. <br/><br/>
              For mig handler SEO og SEM ikke blot om placeringer i søgeresultaterne, men om at sikre, at digitale løsninger når deres målgruppe, skaber relevant trafik og understøtter konkrete forretningsmål.
            </p>
          </div>
        </div>
      </div>
      <div className="text-box">
        <div className="text-and-image">
          <img src="/transparent_images/dev.png" alt="projects" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>Projekter jeg er stolt af</h2>
            <h3>Webudvikling 2023 - 2025</h3>
            <p>
              Under min webudviklerpraktik arbejdede jeg på en<a href="https://play.google.com/store/apps/details?id=com.anonymous.airPlateReactApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">drone detections app</a>i React Native, hvor jeg min medstuderende og jeg, udviklede og lanceret app'en i en periode på 12 uger.<br/><br/>
              Til mit bachelorprojekt udviklede jeg en<a href="https://wogelplanner.vercel.app/" target="_blank" rel="noopener noreferrer">projektstyringsapp</a>i React, hvor jeg implementerede funktioner som opgavestyring, tidsplanlægning og kortlægning af opgaver for at hjælpe teams med at organisere og spore deres projekter effektivt.<br/><br/>
            </p>
          </div>
        </div>
      </div>
      <div className="text-box">
        <div className="text-and-image">
          <img src="/transparent_images/gh.png" alt="gh" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>GitHub</h2>
            <p>
              Git og GitHub er centrale værktøjer i min udviklingsproces og understøtter versionsstyring, samarbejde og automatisering.<br/><br/>
              Jeg bruger typisk GitHub til CI/CD, hvor builds, tests og deployment automatiseres for at sikre hurtige og stabile releases.<br/><br/>
              Senest har jeg integreret GitHub Copilot i mit arbejde til kodeforslag, refaktorering, dokumentation og testgenerering, hvilket øger produktiviteten og effektiviserer udviklingsprocessen.<br /><br/>
              På min githubprofil kan du finde nogle af mine projekter og se kildekoderne til mine private projekter så som en projektstyringsapp, en hjemmestreamingstjeneste og kildekoden til denne portfolio hjemmeside.<br /><br/>
              Se min GitHub profil her: <Link href="https://github.com/nuksnuks" target="_blank" rel="noopener noreferrer">github.com/nuksnuks</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage