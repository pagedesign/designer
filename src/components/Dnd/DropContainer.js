/**
 * 页面布局设计器-拖放组件容器
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
const noop = () => { };

export default class DropContainer extends React.Component {
    static defaultProps = {
        scope: null,
        dnd: {},
        onDropActivate: noop,
        onDrop: noop,
        onDropOver: noop,
        onDropOut: noop,
        onDropDeactivate: noop,
    };

    componentDidMount() {
        const {
            dnd,
            onDropActivate,
            onDrop,
            onDropOver,
            onDropOut,
            onDropDeactivate,
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        dnd.addDropContainer(dom);
        $(dom).droppable({
            accept: '.' + dnd.dndClassName,
            activate(event, ui) {
                onDropActivate(event, ui)
            },
            drop(event, ui) {
                onDrop(event, ui)
            },
            over(event, ui) {
                onDropOver(event, ui)
            },
            out(event, ui) {
                onDropOut(event, ui)
            },
            deactivate(event, ui) {
                onDropDeactivate(event, ui)
            },
        });

    }

    componentWillUnmount() {
        const { dnd } = this.props;
        const dom = ReactDOM.findDOMNode(this);
        $(dom).droppable("destroy");
        dnd.removeDropContainer(dom);
    }

    render() {
        const {
            className,
            dnd,
            onDropActivate,
            onDrop,
            onDropOver,
            onDropOut,
            onDropDeactivate,
            ...props
        } = this.props;

        const classString = classnames("widgets-drop-container", className);

        return (
            <div {...props} className={classString} />
        );
    }

}