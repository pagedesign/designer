/**
 * 页面布局设计器-拖放组件
 * author: nobo.zhou
 * date: 2018.12.09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
const noop = () => { };

export default class Drop extends React.Component {
    static defaultProps = {
        id: 'drop_item_' + Date.now(),
        dnd: {},
        layout: 'row'
    };

    componentDidMount() {
        const {
            dnd,
            layout,
            id
        } = this.props;

        dnd.addDropItem({
            layout,
            id,
        });

    }

    componentWillUnmount() {
        const dom = ReactDOM.findDOMNode(this);

        dnd.removeDropItem(this.props.id);

        $(dom).droppable("destroy");
    }

    render() {
        const {
            dnd,
            layout,
            className,
            children,
            ...props
        } = this.props;

        const classString = classnames({
            'widgets-drop-item': true,
            [className]: className
        })

        return (
            <div {...props} className={classString}>
                {children}
            </div>
        );
    }

}