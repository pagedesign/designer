

import React from 'react';
import classnames from 'classnames';

export default class WidgetsContainer extends React.Component {
    render() {
        const { className, ...props } = this.props;

        const classString = classnames("widgets-list-wrapper", className);

        return (
            <div {...props} className={classString}>
                {this.props.children}
            </div>
        );
    }
}
