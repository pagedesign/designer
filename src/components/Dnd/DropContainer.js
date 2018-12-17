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
        dnd: {}
    };

    state = {
        dropItems: []
    }

    componentDidMount() {
        const self = this;
        const { dnd } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        dnd.addDropContainer(dom);

        $(dom).droppable({
            scope: dnd.scope,
            activate(event, ui) {
                self.onDropActivate(event, ui)
                console.log(...dnd.dropContainers)
                //onDropActivate(event, ui)
            },
            drop(event, ui) {
                //onDrop(event, ui)
            },
            over(event, ui) {
                //onDropOver(event, ui)
            },
            out(event, ui) {
                //onDropOut(event, ui)
            },
            deactivate(event, ui) {
                //onDropDeactivate(event, ui)
            },
        });

    }

    componentWillUnmount() {
        const { dnd } = this.props;
        const dom = ReactDOM.findDOMNode(this);
        $(dom).droppable("destroy");
        dnd.removeDropContainer(dom);
    }

    onDropActivate(event, ui) {
        const { dnd } = this.props;
        const dc = dnd.dropContainers;

        dc.forEach(dom => {
            $(dom).css({
                border: "1px dashed #ccc",
                background: "#f2f2f2"
            });
        });
    }

    onDrop(event, ui) { }

    onDropOver(event, ui) { }

    onDropOut(event, ui) { }

    onDropDeactivate(event, ui) {
        const { dnd } = this.props;
        const dc = dnd.dropContainers;

        dc.forEach(dom => {
            $(dom).css({
                background: "#f2f2f2",
            });
        });

    }

    render() {
        const { className, ...props } = this.props;

        const classString = classnames("widgets-drop-container", className);

        return (
            <div {...props} className={classString} />
        );
    }

}