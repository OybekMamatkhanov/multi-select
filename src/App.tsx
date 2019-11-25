import React from 'react';

import CountriesContextProvider from './utils/countries';

import Layout from './components/Layout';
import '../public/index.css';

class App extends React.PureComponent {
    render() {
        return (
            <CountriesContextProvider>
                <Layout>
                    <div>
                        <h1>Hello World!</h1>
                    </div>
                </Layout>
            </CountriesContextProvider>
        );
    }
}

export default App;