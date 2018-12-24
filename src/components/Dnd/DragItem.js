/**
 * 页面布局设计器-拖拽组件
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const noop = () => { };

let coords = [];
let dropPointer = null;

export default class Drag extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    static defaultProps = {
        item: null,
        onDragStart: noop,
        onDrag: noop,
        onDragStop: noop,
    };

    componentDidMount() {
        const {
            onDragStart,
            onDrag,
            onDragStop,
        } = this.props;

        const dom = ReactDOM.findDOMNode(this);

        $(dom).draggable({
            helper: "clone",
            addClasses: false,
            start: this.onDragStart,
            drag: this.onDrag,
            stop: this.onDragStop
        });

    }

    onDragStart = (event, ui) => {
        const { dnd, item } = this.props;

        dnd.dragItem = item;

        dnd.currentDndScope = item.dndScope;

        const dropItems = dnd.getDropItems();

        if (dropItems.length) {
            dropItems.forEach(item => {
                const dom = document.getElementById(item.id);
                const pos = $(dom).offset();
                coords.push({
                    x: pos.left,
                    y: pos.top,
                    width: dom.offsetWidth,
                    height: dom.offsetHeight,
                    item
                });

                dropPointer = $('<div class="dorp-pointer" />');
                dropPointer.hide();
                $(dnd.helperAppendTo).append(dropPointer);
            });
        }
    }
    onDrag = (event, ui) => {
        const { dnd, item } = this.props;
        const pageX = event.pageX;
        const pageY = event.pageY;

        //在区域内
        let curr = null;
        coords.forEach(coord => {
            if (curr) return;

            if (
                (pageX >= coord.x && pageX <= (coord.x + coord.width)) &&
                (pageY >= coord.y && pageY <= (coord.y + coord.height))
            ) {
                curr = {
                    ...coord,
                    dir: (pageX >= (coord.x + coord.width / 2)) ? 'after' : 'before'
                }
            }
        });

        if (curr) {
            dropPointer.show().css({
                height: curr.height,
                left: curr.dir == 'before' ? curr.x : curr.x + curr.width,
                top: curr.y
            })
        }

        dnd.dropData = curr;
    }
    onDragStop = (event, ui) => {
        const { dnd } = this.props;
        dnd.dragItem = null;
        dnd.currentDndScope = null;

        coords = [];
        if (dropPointer) dropPointer.remove();
    }

    componentWillUnmount() {
        const dom = ReactDOM.findDOMNode(this);
        $(dom).draggable("destroy");
    }

    render() {
        return React.Children.only(this.props.children);
    }

}