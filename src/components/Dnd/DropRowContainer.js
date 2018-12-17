/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import DropContainer from './DropContainer';

export default class DropRowContainer extends React.Component {

    static defaultProps = {
        dnd: {}
    }

    onDropActivate = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers(dnd.scope);

        cts.forEach(dom => {
            $(dom).addClass("active");
        });

    }

    onDrop = (event, ui) => {

    }

    onDropOver = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers(dnd.scope);

        cts.forEach(dom => {
            $(dom).addClass("enter");
        });
    }

    onDropOut = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers(dnd.scope);

        cts.forEach(dom => {
            $(dom).removeClass("enter");
        });
    }

    onDropDeactivate = (event, ui) => {
        const { dnd } = this.props;
        const cts = dnd.getDropContainers(dnd.scope);

        cts.forEach(dom => {
            $(dom).removeClass("active");
        });
    }


    render() {
        const { dnd, ...props } = this.props;

        return (
            <DropContainer
                {...props}
                dnd={dnd}
                onDropActivate={this.onDropActivate}
                onDrop={this.onDrop}
                onDropOver={this.onDropOver}
                onDropOut={this.onDropOut}
                onDropDeactivate={this.onDropDeactivate}
            />
        );
    }
}