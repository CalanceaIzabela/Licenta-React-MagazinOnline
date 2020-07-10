import React from 'react';

import {
        AboutPageContainer,
        AboutPageTitleContainer,
        AboutPageBodyContainer
} from './about.styles';

const Page = () => {

        return(
                <AboutPageContainer>
                        <AboutPageTitleContainer>
                                About online shop application
                        </AboutPageTitleContainer>
                        <AboutPageBodyContainer>This application is a little website to demonstrate
                        the way that ReactJS can be used and the way that an application is working with this framework.
                        The simplicity is shown through this website.
                        </AboutPageBodyContainer>
                        
                </AboutPageContainer>
        )
}

export default Page;