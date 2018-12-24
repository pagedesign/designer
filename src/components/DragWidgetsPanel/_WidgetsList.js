

import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DndContext from '../Dnd/DndContext';
import Drag from '../Dnd/Drag';

class WidgetsItem extends React.Component {

    static propTypes = {
        item: PropTypes.object
    }

    // componentDidMount() {
    //     const dom = ReactDOM.findDOMNode(this);
    //     let coords = [];
    //     let dropPointer = null;
    //     $(dom).draggable({
    //         helper: "clone",
    //         scope: "widgets",
    //         start: function (event, ui) {
    //             $('#demo .widgets-item-preview').each((i, el) => {
    //                 const pos = $(el).offset();
    //                 coords.push({
    //                     x: pos.left,
    //                     y: pos.top,
    //                     width: el.offsetWidth,
    //                     height: el.offsetHeight,
    //                     dom: el
    //                 });
    //             });

    //             if (coords.length) {
    //                 dropPointer = $('<div class="dorp-pointer" />');
    //                 dropPointer.hide();
    //                 $(document.body).append(dropPointer);
    //             }

    //         },
    //         drag: function (event, ui) {
    //             const pageX = event.pageX;
    //             const pageY = event.pageY;

    //             ui.test = true;

    //             //在区域内
    //             let curr = null;
    //             coords.forEach(coord => {
    //                 if (curr) return;

    //                 if (
    //                     (pageX >= coord.x && pageX <= (coord.x + coord.width)) &&
    //                     (pageY >= coord.y && pageY <= (coord.y + coord.height))
    //                 ) {
    //                     curr = {
    //                         coord,
    //                         dom: coord.dom,
    //                         dir: (pageX >= (coord.x + coord.width / 2)) ? 'after' : 'before'
    //                     }
    //                 }
    //             });

    //             if (curr) {
    //                 dropPointer.show().css({
    //                     height: curr.coord.height,
    //                     left: curr.dir == 'before' ? curr.coord.x : curr.coord.x + curr.coord.width,
    //                     top: curr.coord.y
    //                 })
    //             }


    //             ui.dropinfo = curr

    //         },
    //         stop() {
    //             coords = [];
    //             if (dropPointer) dropPointer.remove();
    //         }
    //     });

    // }

    render() {
        const { item, className, ...props } = this.props;

        const iconClassName = classnames({
            "widgets-item-icon": true,
            [`${item.iconCls}`]: item.iconCls
        });

        const style = {
            backgroundImage: `url(${item.icon})`
        };

        return (
            <div {...props} className={classnames("widgets-item", className)}>
                <span className={iconClassName} style={style}></span>
                <span className="widgets-item-label">{item.label}</span>
            </div>
        );
    }
}

export default class WidgetsList extends React.Component {

    static propTypes = {
        items: PropTypes.array,
        dnd: PropTypes.object,
    }

    static defaultProps = {
        dnd: {},
        items: [],
    }

    onWidgetsDragStart(item, event, ui) {
        console.log(1)
    }
    onWidgetsDrag(item, event, ui) {
        console.log(2)
    }
    onWidgetsDragStop(item, event, ui) {
        console.log(3)
    }

    render() {
        const { items } = this.props;

        return (
            <div className="widgets-list-wrapper">
                {
                    items.map((item, i) => {
                        return (
                            <Drag
                                key={i}
                                onDragStart={this.onWidgetsDragStart.bind(this, item)}
                                onDrag={this.onWidgetsDrag.bind(this, item)}
                                onDragStop={this.onWidgetsDragStop.bind(this, item)}
                            >
                                <WidgetsItem item={item} />
                            </Drag>
                        );
                    })
                }
            </div>
        );
    }

}