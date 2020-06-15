import React from 'react';

import {
        AboutPageContainer,
        AboutPageTitleContainer,
        AboutPageBodyContainer
} from './about.styles';

const AboutPage = () => {

        return(
                <AboutPageContainer>
                        <AboutPageTitleContainer>
                                This is the about page.
                        </AboutPageTitleContainer>
                        <AboutPageBodyContainer>Some time gere</AboutPageBodyContainer>
                        
                </AboutPageContainer>
        )
}

export default AboutPage;