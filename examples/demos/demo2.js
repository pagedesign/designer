import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DragWidgetsList from '../../src/components/WidgetsPanel/DragWidgetsList';
import icon from '../style/images/chart.png';
import DndContext, { getDefaultContext } from '../../src/components/Dnd/DndContext';
import DropContainer from '../../src/components/Dnd/DropContainer';

const List = [
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
];

export default class DEMO extends Component {

    state = {
        items: [
        ]
    }

    dnd = getDefaultContext();

    addItem(text) {
        const items = this.state.items;

        items.push({
            id: Date.now().toString(16),
            label: text
        })

        this.setState({
            items,
        });

    }
    removeItem(id) {
        const items = this.state.items;
        const idx = items.map(item => item.id).indexOf(id);

        items.splice(idx, 1);

        this.setState({
            items,
        });
    }

    // componentDidMount() {
    //     const self = this;
    //     const dom = ReactDOM.findDOMNode(this);
    //     $(".widgets-drop-container", dom).droppable({
    //         accept: '.widgets-item',
    //         scope: "widgets",
    //         greedy: true, 
    //         activate(event, ui) {
    //             console.log('activate')
    //             $(".widgets-drop-container", dom).css({
    //                 border: "1px dashed #ccc",
    //                 background: "#f2f2f2"
    //             });
    //         },
    //         create() {
    //             console.log(1234)
    //         },
    //         drop(event, ui) {
    //             console.log(event.pageX, event.pageY, ui)
    //             $(".widgets-drop-container", dom).css({
    //                 background: "#f2f2f2",
    //                 border: "1px dashed transparent",
    //             });

    //             self.addItem(ui.draggable.text());

    //         },
    //         over() {
    //             $(".widgets-drop-container", dom).css({
    //                 background: "red",
    //             });
    //         },
    //         out() {
    //             $(".widgets-drop-container", dom).css({
    //                 background: "#f2f2f2",
    //             });
    //         }
    //     });

    // }

    render() {
        const { items } = this.state;

        return (
            <DndContext.Provider value={this.dnd}>
                <div>
                    <DndContext.Consumer>
                        {dnd => <DragWidgetsList dnd={dnd} items={List} />}
                    </DndContext.Consumer>
                    <div>
                        <br />
                        <DndContext.Consumer>
                            {dnd => (
                                <DropContainer dnd={dnd} style={{
                                    minHeight: 200
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
                                </DropContainer>
                            )}
                        </DndContext.Consumer>

                    </div>
                </div>
            </DndContext.Provider>
        )
    }
}