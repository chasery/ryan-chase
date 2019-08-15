import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import Header from "./Header/Header";

/**
 * Normalizing and setting Global Styles of App
 */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,700,900&display=swap');
    ${styledNormalize}

    body {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.mineShaft};
        font-family: ${props => props.theme.font};
        font-weight: 300;
    }

    ::selection {
        color: ${props => props.theme.mineShaft}; 
        background: ${props => props.theme.turquoise};
    }
`;

const theme = {
    turquoise: "#50E3C2",
    mineShaft: "#333333",
    white: "#ffffff",
    font: "'Nunito Sans', sans-serif",
    spacingXs: ".5rem", // 8px
    spacingSm: ".75rem", // 12px
    spacingMed: "1.5rem", // 24px
    spacingLrg: "3rem", // 48px
    spacingXlrg: "4rem", // 64px

    // Responsive breakpoints and content size
    breakSm: "48rem",
    breakMed: "62rem",
    breakLrg: "75rem",
    contentSm: "100%",
    contentMed: "60rem",
    contentLrg: "71.25rem"
};

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Hero = styled.div`
    background-color: ${props => props.theme.turquoise};
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <GlobalStyle />
                <Header />
                <Hero>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce bibendum at tortor et accumsan. Integer dolor
                        velit, tincidunt sed bibendum ac, venenatis nec orci.
                        Maecenas aliquet convallis sollicitudin. Vivamus sed
                        felis nec metus convallis ullamcorper eget nec tellus.
                        Quisque ipsum massa, consectetur nec dignissim vel,
                        consequat eget mauris. Ut id erat quis augue aliquet
                        efficitur id id lectus. Aliquam interdum hendrerit dolor
                        eu sodales. Fusce eu convallis massa, nec cursus nisi.
                        Donec a magna odio. Donec eleifend eleifend mi, et
                        pulvinar est scelerisque sit amet. Cras sollicitudin,
                        sem fringilla ullamcorper finibus, sem felis tempor
                        turpis, quis sollicitudin turpis mauris at nunc. Mauris
                        sodales magna massa, eget porttitor mauris aliquet a.
                        Etiam in venenatis lectus. Aliquam pulvinar eros non
                        gravida eleifend.
                    </p>
                    <p>
                        Nulla vitae dui id dolor suscipit auctor id non est. In
                        imperdiet lobortis hendrerit. Aliquam eget nisl sapien.
                        Donec urna massa, facilisis sed metus id, posuere
                        ultrices ligula. Etiam consequat eleifend aliquet. In
                        molestie dapibus elit, ac accumsan turpis dignissim id.
                        Nulla consectetur dui eu nisl elementum, sit amet
                        tincidunt nunc dapibus. In a orci erat. Aenean elit
                        nunc, pulvinar nec tellus vitae, egestas ornare turpis.
                        Nullam sed ipsum fermentum, pulvinar dolor id, iaculis
                        metus. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Duis sodales
                        magna nisi, ultricies dictum sapien consectetur
                        hendrerit. Donec volutpat pretium augue euismod varius.
                    </p>
                    <p>
                        In auctor purus sit amet quam gravida iaculis. Nulla
                        nulla dolor, vehicula nec lacus sed, consectetur dapibus
                        arcu. Nam bibendum neque in fermentum elementum. Ut
                        pharetra nulla ut nunc sollicitudin ultricies. Ut id est
                        vel sapien consectetur malesuada. Sed ultrices dui
                        libero, vel ultricies nisl pharetra nec. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Sed efficitur lectus vel mi molestie
                        tincidunt. Etiam iaculis mauris sed ante congue, at
                        cursus nunc mattis. Phasellus enim arcu, maximus in
                        auctor et, varius lobortis metus. Nunc ultrices massa et
                        orci laoreet, sed porttitor odio ullamcorper. Donec
                        ullamcorper arcu ut pharetra gravida.
                    </p>
                    <p>
                        Maecenas rutrum vulputate placerat. Quisque at justo
                        nulla. Vivamus tortor mauris, ultrices in nunc id,
                        porttitor vehicula lectus. Proin consequat auctor ex ac
                        rutrum. Aliquam gravida lacus et arcu accumsan, tempus
                        tempus urna hendrerit. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Sed sit amet massa a
                        felis imperdiet eleifend. Praesent porttitor nec arcu id
                        dictum. Maecenas at semper libero. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec sodales fermentum arcu, ac
                        venenatis nisl vestibulum in.
                    </p>
                    <p>
                        Maecenas consequat facilisis dapibus. Ut egestas felis
                        nisl, a dictum lorem mollis at. Aenean placerat non leo
                        vel scelerisque. Proin non elit sed urna vulputate
                        pulvinar id ac tortor. Duis ultricies elit quis mi
                        mattis, a egestas tellus elementum. Fusce posuere mi
                        fringilla urna gravida lobortis. Integer nec quam enim.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Integer blandit nisl eget accumsan fermentum.
                        Ut luctus finibus auctor. Quisque pellentesque feugiat
                        lacus et gravida. Proin felis enim, mollis quis sapien
                        et, rutrum consectetur tortor. Integer mattis fermentum
                        lorem sed consectetur.
                    </p>
                    <p>
                        Nunc blandit blandit pulvinar. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Ut lectus neque, ullamcorper et luctus
                        quis, posuere interdum odio. Cras augue ex, pellentesque
                        ut neque vitae, ultrices convallis magna. Pellentesque
                        maximus et ligula id lobortis. Integer vel dignissim
                        tellus, eget maximus lectus. Proin pretium efficitur
                        fermentum. Ut pretium sem sed ligula volutpat, faucibus
                        consectetur magna congue. Ut commodo lacus faucibus
                        accumsan viverra. Proin viverra massa in nisl interdum,
                        eu placerat sapien pellentesque. Nunc tempor nec elit
                        vitae cursus. Duis ultricies quam libero, efficitur
                        aliquam libero ullamcorper placerat. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Nullam efficitur non erat quis
                        efficitur. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                    <p>
                        Phasellus id lacus a risus malesuada mattis a ac mauris.
                        Sed vitae iaculis arcu, ut lacinia dolor. Pellentesque
                        augue sapien, molestie id quam quis, tincidunt faucibus
                        lacus. Aenean lacus orci, fermentum ac facilisis id,
                        fermentum porta nulla. Aenean bibendum lectus vel sem
                        imperdiet, malesuada consequat justo ultricies. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus. Nam
                        tortor ligula, rutrum ut ligula ut, sagittis lacinia
                        ante. Sed suscipit justo sed consectetur laoreet. Sed
                        sit amet lacus venenatis, rhoncus metus eget, facilisis
                        elit.
                    </p>
                    <p>
                        Etiam auctor arcu vel massa vulputate vestibulum. Duis
                        orci elit, luctus ac erat ac, commodo porttitor sapien.
                        Etiam facilisis enim vitae augue porttitor, ut
                        consectetur ipsum mollis. Donec tortor enim, pulvinar
                        vel viverra sed, tempus eu nulla. Nulla in libero elit.
                        Vivamus risus tellus, mattis sit amet velit vel, congue
                        venenatis elit. Fusce ultricies erat ac magna egestas
                        sagittis. Quisque molestie euismod risus, quis tincidunt
                        leo cursus sed. Suspendisse ultricies finibus magna sed
                        bibendum. Vivamus mollis malesuada nisl, vitae iaculis
                        mi rhoncus et. Ut lobortis sem id metus aliquam maximus.
                        Fusce nec imperdiet nibh, id pharetra eros. Vivamus
                        interdum nunc luctus cursus porta. Maecenas venenatis
                        erat sit amet sapien convallis dictum. Morbi lacus nunc,
                        tempus sed bibendum non, vestibulum in ipsum.
                    </p>
                    <p>
                        Praesent tristique lacus urna, sed sodales nunc ornare
                        dignissim. Integer nec eros dui. Aliquam erat volutpat.
                        Pellentesque risus tortor, ultrices eu sapien et,
                        tincidunt lacinia magna. Maecenas lacinia ex nulla, sed
                        euismod orci condimentum quis. Fusce ac est nec neque
                        congue pellentesque sit amet lobortis nibh. Sed mauris
                        lacus, posuere non lacus eget, tempus hendrerit purus.
                        Phasellus elit ipsum, cursus at eros nec, tincidunt
                        semper ex. Donec nec eros vel dolor aliquam ornare nec
                        vitae massa. Donec eu metus ut nisi facilisis
                        consectetur. Donec bibendum quis dolor eget laoreet.
                        Suspendisse sodales venenatis massa sed pretium. Morbi
                        interdum quam turpis, id mattis velit finibus at.
                    </p>
                    <p>
                        Fusce placerat faucibus dapibus. Nam molestie nulla
                        purus, auctor malesuada mi blandit sit amet. Nullam sed
                        neque tortor. Pellentesque iaculis mi arcu, sit amet
                        viverra ligula ultrices at. Aliquam pretium gravida
                        felis, sit amet malesuada sem bibendum sed. Nam vel
                        ultrices massa. Pellentesque neque libero, accumsan eu
                        rutrum interdum, vehicula ac elit. Aenean tempus, arcu
                        non pulvinar placerat, lacus lacus laoreet arcu, eget
                        imperdiet urna mi eu urna. Sed porta quam ac eros
                        scelerisque, egestas pretium arcu venenatis. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae; Nulla volutpat ullamcorper
                        tellus, id laoreet nunc.
                    </p>
                </Hero>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
