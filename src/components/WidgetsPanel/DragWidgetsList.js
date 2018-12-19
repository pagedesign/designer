

import React from 'react';
import PropTypes from 'prop-types';
import WidgetsContainer from './WidgetsContainer';
import WidgetsItem from './WidgetsItem';
import Drag from '../Dnd/Drag';

let coords = [];
let dropPointer = null;

export default class DragWidgetsList extends React.Component {

    static propTypes = {
        items: PropTypes.array,
        dnd: PropTypes.object,
    }

    static defaultProps = {
        dnd: {},
        items: [],
    }

    onWidgetsDragStart(item, event, ui) {
        const { dnd } = this.props;
        dnd.dragItem = item;

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
    onWidgetsDrag(item, event, ui) {
        const { dnd } = this.props;
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
    onWidgetsDragStop(item, event, ui) {
        const { dnd } = this.props;
        dnd.dragItem = null;

        coords = [];
        if (dropPointer) dropPointer.remove();
    }

    render() {
        const { items, dnd } = this.props;

        return (
            <WidgetsContainer>
                {
                    items.map((item, i) => {
                        return (
                            <Drag
                                key={i}
                                onDragStart={this.onWidgetsDragStart.bind(this, item)}
                                onDrag={this.onWidgetsDrag.bind(this, item)}
                                onDragStop={this.onWidgetsDragStop.bind(this, item)}
                            >
                                <WidgetsItem className={dnd.dndClassName} item={item} />
                            </Drag>
                        );
                    })
                }
            </WidgetsContainer>
        );
    }

}