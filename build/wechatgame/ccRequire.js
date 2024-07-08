let moduleMap = {
'assets/resources/index.js' () { return require('assets/resources/index.js') },
'assets/internal/index.js' () { return require('assets/internal/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};