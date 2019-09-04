import React from "react";
import styled from "styled-components";
import { Picture } from "react-responsive-picture";

import Section from "./shared/Section";

import PhotoSm from "../assets/img/ryan-chase.png";
import PhotoMed from "../assets/img/ryan-chase@2x.png";
import PhotoLrg from "../assets/img/ryan-chase@3x.png";

const AboutContent = styled.div`
    display: flex;

    @media (max-width: ${props => props.theme.breakSm}) {
        flex-direction: column;
    }
`;
const AboutText = styled.div`
    @media (max-width: ${props => props.theme.breakSm}) {
        padding-bottom: ${props => props.theme.spacingMed};
    }
    @media (min-width: ${props => props.theme.breakSm}) {
        padding-right: ${props => props.theme.spacingLrg};
    }
`;
const AboutPhoto = styled.div`
    flex-grow: 0;
    min-width: 33%;
    overflow: hidden;

    img {
        border-radius: 50%;
        width: 100%;
    }

    @media (max-width: ${props => props.theme.breakSm}) {
        display: flex;
        justify-content: center;

        picture {
            align-self: center;
            width: 75%;
        }
    }
`;

const About = props => {
    return (
        <Section id={props.id}>
            <AboutContent>
                <AboutText>
                    <p>
                        Ryan currently works as a senior UX Designer, where he
                        leads a team that drives an empathic approach to
                        software. His background in design and development
                        fosters a collaborative environment between the two
                        groups, resulting in the creation of the best product
                        possible.
                    </p>
                    <p>
                        It’s that goal of finding the perfect solution for his
                        end users’, that motivates Ryan. Staying in tune with
                        the latest software trends, he actively searches for
                        ways to employ modern approaches to his user centric
                        solutions. Ryan is very passionate about usability and
                        you shouldn’t be surprised if you hear him exclaiming
                        “That’s a bad user experience!”
                    </p>
                    <p>
                        His ability to quickly brainstorm suggestions for
                        improvement has served him well in his fast-paced role
                        at CareMore Medical. Being able to talk shop and work
                        side-by-side with developers to rapid prototype, he has
                        created a bond between design and development. This has
                        fostered an environment amongst team members where
                        everyone is focused on UX. He believes whether you are
                        gathering requirements or you are writing backend
                        services, you have a direct impact on the users of your
                        software.
                    </p>
                    <p>
                        Ryan is currently looking for an opportunity to
                        strengthen his front-end development skills with a focus
                        on <strong>JavaScript</strong>, <strong>React</strong>,
                        and <strong>Redux</strong>. Feel free to contact him at{" "}
                        <a href="mailto:test@test.com">test@test.com</a> with
                        any opportunities that you feel he would be a good match
                        for.
                    </p>
                </AboutText>
                <AboutPhoto>
                    <Picture
                        sources={[
                            {
                                srcSet: `${PhotoSm}, ${PhotoMed} 2x`,
                                media: "(max-width: 768px)"
                            },
                            {
                                srcSet: `${PhotoMed} 1x, ${PhotoLrg} 2x`
                            }
                        ]}
                        alt="A photo of Ryan Chase in Astoria, Oregon"
                    />
                </AboutPhoto>
            </AboutContent>
        </Section>
    );
};

export default About;
