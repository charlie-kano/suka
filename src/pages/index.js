import * as React from "react";

import wd from '../images/wd.png';

import Img from "gatsby-image";

import '../styles/index.scss';

import Plants from "./plants";
import { Layout } from "./layout";





const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}





// markup
const IndexPage = () => {
  return (
    <Layout>
      <div>

        <main>
          <div className="home">
            <div className="home__image">
              <img src={wd}></img>
            </div>
          </div>
        </main>


      </div>
    </Layout>
  )
}

export default IndexPage;
