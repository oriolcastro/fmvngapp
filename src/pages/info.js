import React from 'react'
import { Grid, Cell } from 'react-md'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter-square'
import FaGithub from 'react-icons/lib/fa/github-square'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import SecondaryLayout from '../components/secondarylayout'

const Information = () => (
  <SecondaryLayout headerTitle="Informació sobre l'app">
    <Grid>
      <Cell>
        <img
          src="/img/og-image.jpg"
          alt="Cartell Festa Major 2018"
          className="infopage--coverimage"
        />
      </Cell>
      <Cell>
        <p className="infopage--text">
          Aquesta aplicació mòbil recull totes les activitats incloses dins el
          programa oficial de la Festa Major de Vilanova. Tot el contingut està
          extret del programa publicat i no te cap vinculació amb els Pabordes
          2018
        </p>
        <p>Amb l'aplicació podràs:</p>

        <ul>
          <li>Consultar el programa sense connexió.</li>
          <li>Instalar l'applicació al teu dispositius.*</li>
          <li>Filtrar les activitats per dies.</li>
          <li>Guardar activitats com a preferides.</li>
        </ul>
      </Cell>
      <Cell>
        <h3>Desenvolupada per Ok! Studio:</h3>
      </Cell>
      <Cell className="infopage--devinfo">
        <img
          src="./icons/logook.png"
          alt="Logo Ok studio"
          className="infopage--logo"
        />
        <div className="infopage--myinfo">
          <p>
            Web:<span> </span>
            <OutboundLink
              href="http://www.okstudio.tech"
              target="_blank"
              className="infopage--links"
            >
              okstudio.tech
            </OutboundLink>
          </p>
          <p>
            c/e:<span> </span>
            <OutboundLink
              href="mailto:hola@okstudio.tech?subject=[App Festa Major Vilanova]"
              className="infopage--links"
              target="_blank"
            >
              hola@okstudio.tech
            </OutboundLink>
          </p>
          <p>
            Xarxes socials: <span> </span>
            <OutboundLink
              href="https://www.instagram.com/_okstudio/"
              target="_blank"
            >
              <FaInstagram
                color="#007FFF"
                size="1.5rem"
                className="infopage--xxss"
              />
            </OutboundLink>
            <OutboundLink href="https://twitter.com/_okstudio" target="_blank">
              <FaTwitter
                color="#007FFF"
                size="1.5rem"
                className="infopage--xxss"
              />
            </OutboundLink>
            <OutboundLink
              href="https://github.com/oriolcastro/fmvngapp"
              target="_blank"
            >
              <FaGithub
                color="#007FFF"
                size="1.5rem"
                className="infopage--xxss"
              />
            </OutboundLink>
          </p>
        </div>
      </Cell>
      <Cell>
        <div className="infopage--legal">
          *Dispositius mobils amb sistema operatiu Android i que utilitzin el
          navegador Chrome. Funcionalitat no disponible a la resta de
          dispositius.
        </div>
        <div className="infopage--legal">
          Informació de privacitat: aquesta web recull dades anonimes del seu ús
          a través de Google Analytics
        </div>
      </Cell>
    </Grid>
  </SecondaryLayout>
)

export default Information
