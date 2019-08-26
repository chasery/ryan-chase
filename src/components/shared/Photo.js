import React from "react";
import styled from "styled-components";

const ResponsiveImg = styled.img`
    width: 100%;
`;

const Photo = props => {
    const small = `${props.path}${props.img}.png`;
    const medium = `${props.path}${props.img}@2x.png`;
    const large = `${props.path}${props.img}@3x.png`;

    return (
        <React.Fragment>
            <ResponsiveImg
                src={small}
                srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
            />
        </React.Fragment>
    );
};

export default Photo;
