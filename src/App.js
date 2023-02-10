import { PublicRoutes } from './Routes/Routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import defaultLayout from './Layout/defaultlayout/defaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {PublicRoutes.map((cur, index) => {
                        const Page = cur.component;

                        //logic layout
                        let Layout = defaultLayout;
                        if (cur.layout) {
                            Layout = cur.layout;
                        } else if (cur.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={cur.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
