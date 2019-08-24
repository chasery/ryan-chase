import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
    background-color: ${props => props.theme.white};
    display: flex;
    justify-content: center;
    position: relative;
`;
const AboutTopper = styled.div`
    position: absolute;
    width: 100%;
`;
const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem;

    @media (max-width: ${props => props.theme.breakSm}) {
        padding: 0;
        width: ${props => props.theme.contentSm};
    }
    @media (min-width: ${props =>
            props.theme.breakSm}) and (max-width: ${props =>
            props.theme.breakLrg}) {
        width: ${props => props.theme.contentMed};
    }
    @media (min-width: ${props => props.theme.breakLrg}) {
        width: ${props => props.theme.contentLrg};
    }
`;

const About = props => {
    return (
        <AboutWrapper id={props.id}>
            <AboutTopper />
            <AboutContent>
                <h2>About</h2>
                <p>
                    Ryan currently works as a senior UX Designer, where he leads
                    a team that drives an empathic approach to software. His
                    background in design and development fosters a collaborative
                    environment between the two groups, resulting in the
                    creation of the best product possible.
                </p>
                <p>
                    It’s that goal of finding the perfect solution for his end
                    users’, that motivates Ryan. Staying in tune with the latest
                    software trends, he actively searches for ways to employ
                    modern approaches to his user centric solutions. Ryan is
                    very passionate about usability and you shouldn’t be
                    surprised if you hear him exclaiming “That’s a bad user
                    experience!”
                </p>
                <p>
                    His ability to quickly brainstorm suggestions for
                    improvement has served him well in his fast-paced role at
                    CareMore Medical. Being able to talk shop and work
                    side-by-side with developers to rapid prototype, he has
                    created a bond between design and development. This has
                    fostered an environment amongst team members where everyone
                    is focused on UX. He believes whether you are gathering
                    requirements or you are writing backend services, you have a
                    direct impact on the users of your software.
                </p>
                <p>
                    Ryan is currently looking for an opportunity to strengthen
                    his front-end development skills with a focus on{" "}
                    <strong>JavaScript</strong>,<strong>React</strong>, and{" "}
                    <strong>Redux</strong>. Feel free to contact him at{" "}
                    <a href="mailto:test@test.com">test@test.com</a> with any
                    opportunities that you feel he would be a good match for.
                </p>
            </AboutContent>
        </AboutWrapper>
    );
};

export default About;
