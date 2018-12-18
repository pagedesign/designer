/**
 * 页面布局设计器-拖拽组件
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import ReactDOM from 'react-dom';

const noop = () => { };

export default class Drag extends React.Component {

    static defaultProps = {
        scope: "default",
        onDragStart: noop,
        onDrag: noop,
        onDragStop: noop,
    };

    componentDidMount() {
        const {
            scope = "default",
            onDragStart,
            onDrag,
            onDragStop,
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        $(dom).draggable({
            helper: "clone",
            addClasses: false,
            start: function (event, ui) {
                onDragStart(event, ui)
            },
            drag: function (event, ui) {
                onDrag(event, ui)
            },
            stop(event, ui) {
                onDragStop(event, ui)
            }
        });

    }

    componentWillUnmount() {
        const dom = ReactDOM.findDOMNode(this);
        $(dom).draggable("destroy");
    }

    render() {
        return React.Children.only(this.props.children);
    }

}