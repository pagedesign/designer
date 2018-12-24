/**
 * author: nobo.zhou
 * date: 2018.12.23
 */

import React from 'react';

export function initState(state = {}) {
    return {
        layout: {
            components: {},
            datasoure: {},
            items: [],
        },
        ...state
    }
}

export default React.createContext(initState());