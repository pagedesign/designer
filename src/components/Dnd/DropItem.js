/**
 * 页面布局设计器-拖放组件
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import ReactDOM from 'react-dom';
const noop = () => { };

export default class Drop extends React.Component {
    static defaultProps = {
        scope: "default",
        addDropItem: noop,
        removeDropItem: noop,
        onDropActivate: noop,
        onDrop: noop,
        onDropOver: noop,
        onDropOut: noop,
        onDropDeactivate: noop,
    };

    componentDidMount() {
        const {
            scope,
            onDropActivate,
            onDrop,
            onDropOver,
            onDropOut,
            onDropDeactivate
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        addDropItem(dom);

    }

    componentWillUnmount() {
        const dom = ReactDOM.findDOMNode(this);
        $(dom).droppable("destroy");

        removeDropItem(dom);
    }

    render() {
        return (
            <div className="widgets-drop-item">
                {this.props.children}
            </div>
        );
    }

}