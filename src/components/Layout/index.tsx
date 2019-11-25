import React from 'react';
import { Layout, Header, Main, Container, Footer }from 'theme-ui';

export default (props: any) => {
    return (
        <Layout>
            <Header />
            <Main>
                <Container>{props.children}</Container>
            </Main>
            <Footer />
        </Layout>
    );
};