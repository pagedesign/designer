

import React from 'react';
import PropTypes from 'prop-types';
import WidgetsContainer from './WidgetsContainer';
import WidgetsItem from './WidgetsItem';
import Drag from '../Dnd/Drag';

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
    }
    onWidgetsDrag(item, event, ui) {
        const { dnd } = this.props;
        // console.log(dnd)
    }
    onWidgetsDragStop(item, event, ui) {
        const { dnd } = this.props;
        dnd.dragItem = null;
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