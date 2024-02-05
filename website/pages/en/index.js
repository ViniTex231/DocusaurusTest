/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Informações</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center', color: 'black'}}>
        <h2>Funcionalidades</h2>
        <MarkdownBlock>Aqui estão as funcionalidades do Metrix</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Desfrute de uma gestão de calibrações sem esforço com o Metrix, onde não apenas a realização de calibrações é simplificada, mas também a análise e avaliação dos resultados se tornam uma experiência intuitiva. Com nossa plataforma avançada, você tem a capacidade de extrair relatórios detalhados de calibrações passadas, possibilitando uma análise aprofundada e comparações significativas entre os resultados obtidos. Transforme a gestão de calibrações em uma vantagem estratégica, elevando o controle e a eficiência com o Metrix.',
            image: `${baseUrl}img/relatorioquasemenor.png`,
            imageAlign: 'left',
            title: 'Extraia Relatórios',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'O Metrix é a sua solução tudo-em-um para a gestão de calibrações. Aqui, em um único lugar, você tem acesso a uma gama de funcionalidades poderosas que simplificam todo o processo. Extraia relatórios detalhados de calibrações passadas, faça comparações entre os resultados de forma fácil e eficiente, tudo enquanto economiza preciosos minutos do seu dia. Com o Metrix, não apenas otimizamos suas operações, mas também proporcionamos a conveniência de ter várias ferramentas essenciais reunidas em um só lugar, permitindo que você alcance o máximo desempenho sem comprometer seu tempo valioso.',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Sua Solução!',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Com o Metrix, sua ferramenta completa de gerenciamento de calibrações de instrumentos, oferecemos a capacidade não apenas de visualizar os resultados detalhados das calibrações passadas, mas também de acompanhar de forma eficiente e proativa todas as futuras calibrações necessárias para garantir a precisão e conformidade dos seus instrumentos. Simplifique o controle, ganhe visibilidade e assegure a excelência em suas práticas de medição com a poderosa plataforma Metrix. ',
            image: `${baseUrl}img/painelcontrolemenor.png`,
            imageAlign: 'right',
            title: 'Acompanhe as Calibrações dos instrumentos',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Visualize o histórico de calibrações dos instrumentos',
            image: `${baseUrl}img/paquimetro.png`,
            imageAlign: 'top',
            title: 'Histórico de Calibrações',
          },
          {
            content: 'Visualize o status das calibrações',
            image: `${baseUrl}img/computador.png`,
            imageAlign: 'top',
            title: 'Acompanhamento das Calibrações',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
