/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import DropContainer from './DropContainer';
import DropItem from './DropItem';
import Drag from './Drag';
import LayoutContext from '../LayoutContext';

export default class DropRowContainer extends React.Component {

    static defaultProps = {
        dnd: {},
        accept: '*'
    }

    state = {
        dropItems: []
    }

    onDropActivate = (event, ui) => {

    }

    onDrop = (event, ui) => {
        const { dnd } = this.props;
        const current = dnd.dragItem;

        this.setState({
            dropItems: [
                ...this.state.dropItems, {
                    id: 'drop_item_' + Date.now().toString(16),
                    label: current.label
                }
            ]
        });

    }

    onDropOver = (event, ui) => {
    }

    onDropOut = (event, ui) => {
    }

    onDropDeactivate = (event, ui) => {
    }


    render() {
        const { dnd, accept, ...props } = this.props;
        const { dropItems } = this.state;

        return (
            <LayoutContext.Consumer>
                {
                    (store) => (
                        <DropContainer
                            {...props}
                            accept={accept}
                            dnd={dnd}
                            onDropActivate={this.onDropActivate}
                            onDrop={this.onDrop}
                            onDropOver={this.onDropOver}
                            onDropOut={this.onDropOut}
                            onDropDeactivate={this.onDropDeactivate}
                        >
                            {
                                dropItems.map(item => {
                                    return (
                                        <Drag key={item.id}>
                                            <DropItem
                                                id={item.id}
                                                dnd={dnd}
                                                layout="row"
                                            >
                                                {item.label}
                                            </DropItem>
                                        </Drag>
                                    );
                                })
                            }
                        </DropContainer>
                    )
                }

            </LayoutContext.Consumer>
        );
    }
}