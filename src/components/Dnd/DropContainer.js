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

    state = {
        dropItems: []
    }

    componentDidMount() {
        const {
            scope,
            dnd,
            onDropActivate,
            onDrop,
            onDropOver,
            onDropOut,
            onDropDeactivate,
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        dnd.addDropContainer(scope || dnd.scope, dom);

        $(dom).droppable({
            scope: scope || dnd.scope,
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
        const { scope, dnd } = this.props;
        const dom = ReactDOM.findDOMNode(this);
        $(dom).droppable("destroy");
        dnd.removeDropContainer(scope || dnd.scope, dom);
    }

    render() {
        const {
            className,
            scope,
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