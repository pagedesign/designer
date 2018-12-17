

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class WidgetsItem extends React.Component {

    static propTypes = {
        item: PropTypes.object
    }

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
