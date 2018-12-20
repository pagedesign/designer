import React from 'react';
import classnames from 'classnames';
import Layout from 'react-widget-layout';

export default class DesignerLayout extends React.Component {

    render() {

        return (
            <Layout>
                <Layout.Header>

                </Layout.Header>
                <Layout>
                    <Layout.Sider></Layout.Sider>
                    <Layout.Content></Layout.Content>
                </Layout>
            </Layout>
        );
    }

}