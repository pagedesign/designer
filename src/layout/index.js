import React from 'react';
import classnames from 'classnames';
import Layout from 'react-widget-layout';
import DragWidgetsPanel from '../components/DragWidgetsPanel';
import icon from '../../examples/style/images/chart.png';
import DndContext, { getDefaultContext } from '../components/Dnd/DndContext';
import DropRowContainer from '../components/Dnd/DropRowContainer';

const demos = [
    {
        icon,
        iconCls: "a",
        label: "折线图"
    },
    {
        icon,
        label: "柱状图"
    },
    {
        icon,
        label: "饼图"
    },
    {
        icon,
        label: "树图"
    },
    {
        icon,
        label: "雷达图"
    },
    {
        icon,
        label: "仪表盘"
    }
]

export default class DesignerLayout extends React.Component {

    dnd = getDefaultContext()

    state = {
        layout: {
            components: {},
            datasoure: {},
            items: [],
        }
    }

    render() {
        const items = [];

        return (
            <DndContext.Provider value={this.dnd}>
                <Layout>
                    <Layout.Header>
                        Tools
                    </Layout.Header>
                    <Layout>
                        <Layout.Sider
                            style={{
                                borderRight: "1px solid #ccc",
                                width: 100
                            }}
                        >
                            <DndContext.Consumer>
                                {dnd => <DragWidgetsPanel dnd={dnd} items={demos} />}
                            </DndContext.Consumer>
                        </Layout.Sider>
                        <Layout>
                            <Layout.Header>
                                <DndContext.Consumer>
                                    {dnd => (
                                        <DropRowContainer accept="widgets2" dnd={dnd} style={{
                                            minHeight: 100
                                        }}>
                                            {
                                                items.map((item, i) => {
                                                    return (<React.Fragment>
                                                        <div id={item.id} className="widgets-item-preview" onDoubleClick={() => this.removeItem(item.id)}>
                                                            {item.label}
                                                        </div>
                                                        {items.length - 1 !== i ? <div className="split-line"></div> : null}
                                                    </React.Fragment>
                                                    )
                                                })
                                            }
                                        </DropRowContainer>
                                    )}
                                </DndContext.Consumer>
                            </Layout.Header>
                            <Layout.Content>
                                Rows
                            </Layout.Content>
                        </Layout>
                        <Layout.Sider
                            style={{
                                width: 100,
                                borderLeft: "1px solid #ccc"
                            }}
                        >
                            <div>
                                <input size={10} />
                            </div>
                        </Layout.Sider>
                    </Layout>
                </Layout>
            </DndContext.Provider>
        );
    }

}