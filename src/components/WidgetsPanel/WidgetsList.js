

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class WidgetsItem extends React.Component {

    static propTypes = {
        item: PropTypes.object
    }

    render() {
        const { item } = this.props;

        const iconClassName = classnames({
            "widgets-item-icon": true,
            [`${item.iconCls}`]: item.iconCls
        });

        const style = {
            backgroundImage: `url(${item.icon})`
        };

        return (
            <div className="widgets-item">
                <span className={iconClassName} style={style}></span>
                <span className="widgets-item-label">{item.label}</span>
            </div>
        );
    }
}

export default class WidgetsList extends React.Component {

    static propTypes = {
        items: PropTypes.array
    }

    static defaultProps = {
        items: []
    }

    _el = null

    saveDOM = (el) => {
        this._el = el;
    }

    componentDidMount() {
        //demo
        let coords = [];
        let dropPointer = null;
        $(".widgets-item", this._el).draggable({
            helper: "clone",
            start: function (event, ui) {
                $('#demo .widgets-item-preview').each((i, el) => {
                    const pos = $(el).offset();
                    coords.push({
                        x: pos.left,
                        y: pos.top,
                        width: el.offsetWidth,
                        height: el.offsetHeight,
                        dom: el
                    });
                });

                if (coords.length) {
                    dropPointer = $('<div class="dorp-pointer" />');
                    dropPointer.hide();
                    $(document.body).append(dropPointer);
                }

            },
            drag: function (event, ui) {
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
                            coord,
                            dom: coord.dom,
                            dir: (pageX >= (coord.x + coord.width / 2)) ? 'after' : 'before'
                        }
                    }
                });

                if (curr) {
                    dropPointer.show().css({
                        height: curr.coord.height,
                        left: curr.dir == 'before' ? curr.coord.x : curr.coord.x + curr.coord.width,
                        top: curr.coord.y
                    })
                }


                ui.dropinfo = curr

            },
            stop() {
                coords = [];
                if (dropPointer) dropPointer.remove();
            }
        });
    }

    render() {
        const { items } = this.props;

        return (
            <div className="widgets-list-wrapper" ref={this.saveDOM}>
                {
                    items.map((item, i) => <WidgetsItem key={i} item={item} />)
                }
            </div>
        );
    }

}