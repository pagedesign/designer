/**
 * 页面布局设计器-拖放控件上下文
 * author: nobo.zhou
 * date: 2018.12.17
 */

import React from 'react';

export const getDefaultContext = () => ({
    scope: "widgets",
    helper: null,
    dragItem: null,//当前拖拽对象
    // drop项的元素
    dropItems: [],
    dropContainers: {},

    addDropItem(dom) {
        this.dropItems.push(dom);
    },
    removeDropItem(dom) {
        const idx = this.dropItems.indexOf(dom);

        if (idx > -1) {
            this.dropItems.splice(idx, 1);
        }
    },
    getDropItems() {
        return this.dropItems;
    },

    addDropContainer(scope, dom) {
        this.dropContainers[scope] = this.dropContainers[scope] || [];
        this.dropContainers[scope].push(dom);
    },
    removeDropContainer(scope, dom) {
        const cts = this.dropContainers[scope] || [];

        const idx = cts.indexOf(dom);

        if (idx > -1) {
            cts.splice(idx, 1);
        }

    },
    getDropContainers(scope = this.scope) {
        return this.dropContainers[scope] || [];
    }
});

export default React.createContext(getDefaultContext());