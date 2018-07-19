import React from 'react'
import { Grid, Cell } from 'react-md'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter-square'
import FaGithub from 'react-icons/lib/fa/github-square'
import logo from '../img/icon-512x512.png'
import logook from '../img/logook.png'
import SecondaryLayout from '../components/secondarylayout'

const Information = () => (
  <SecondaryLayout headerTitle="Informació sobre l'app">
    <Grid>
      <Cell>
        <img src="/img/og-image.jpg" className="infopage--coverimage" />
      </Cell>
      <Cell>
        <p className="infopage--text">
          Aquesta aplicació mòbil recull totes les activitats incloses dins el
          programa oficial de la Festa Major de Vilanova. Tot el contingut està
          agafat del programa oficial de la festa i no te cap vinculació amb els
          Pabordes 2018
        </p>
        <p>Accedint a l'aplicació podràs:</p>

        <ul>
          <li>Consultar sense connexió a Internet.</li>
          <li>Instalar l'applicació en dispositius seleccionats.*</li>
          <li>Filtrar les activitats per dies.</li>
          <li>Guardar activitats com a preferides per una millor consulta</li>
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
            <a
              href="http://www.okstudio.tech"
              target="_blank"
              className="infopage--links"
            >
              okstudio.tech
            </a>
          </p>
          <p>
            c/e:<span> </span>
            <a
              href="mailto:hola@okstudio.tech"
              className="infopage--links"
              target="_blank"
            >
              hola@okstudio.tech
            </a>
          </p>
          <p>
            Xarxes socials: <span> </span>
            <a href="https://www.instagram.com/_okstudio/" target="_blank">
              <FaInstagram
                color="#007FFF"
                size="1.5rem"
                className="infopage--xxss"
              />
            </a>
            <a href="https://twitter.com/_okstudio" target="_blank">
              <FaTwitter
                color="#007FFF"
                size="1.5rem"
                className="infopage--xxss"
              />
            </a>
            <a href="https://github.com/oriolcastro/fmvngapp" target="_blank">
              <FaGithub
                color="#007FFF"
                size="1.5rem"
                className="infopage--xxss"
              />
            </a>
          </p>
        </div>
      </Cell>
      <Cell>
        <div className="infopage--legal">
          *Dispositius mobils amb sistema operatiu Android i que utilitzin el
          navegador Chrome. Amb la resta de dispositius la funcionalitat
          d'instalar l'aplicació no apareixerà.
        </div>
        <div className="infopage--legal">
          Aquesta web recull dades anonimes fent ús de l'eina Google Analytics
        </div>
      </Cell>
    </Grid>
  </SecondaryLayout>
)

export default Information
