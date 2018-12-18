/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import DropContainer from './DropContainer';
import DropItem from './DropItem';

export default class DropRowContainer extends React.Component {

    static defaultProps = {
        dnd: {}
    }

    state = {
        dropItems: []
    }

    onDropActivate = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers();
        cts.forEach(dom => {
            $(dom).addClass("active");
        });

    }

    onDrop = (event, ui) => {
        const { dnd } = this.props;
        const current = dnd.dragItem;

        this.setState({
            dropItems: [...this.state.dropItems, {
                id: Date.now().toString(16),
                label: current.label
            }]
        });

        console.log(dnd.dragItem)
    }

    onDropOver = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers();

        cts.forEach(dom => {
            $(dom).addClass("enter");
        });
    }

    onDropOut = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers();

        cts.forEach(dom => {
            $(dom).removeClass("enter");
        });
    }

    onDropDeactivate = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers();

        cts.forEach(dom => {
            $(dom).removeClass("active");
        });
    }


    render() {
        const { dnd, ...props } = this.props;
        const { dropItems } = this.state;

        return (
            <DropContainer
                {...props}
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
                            <DropItem key={item.id}>
                                {item.label}
                            </DropItem>
                        );
                    })
                }
            </DropContainer>
        );
    }
}