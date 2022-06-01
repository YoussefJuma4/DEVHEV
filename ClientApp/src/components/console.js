/*let consoleMessages = [];

let console = (function (oldConsole){
    return {
        log: function (text) {
            oldConsole.log(text);
            oldConsole.log(text);
            let argsArray = Array.from(arguments);
            oldConsole.log(argsArray);
        },
        info(text) {
            oldConsole.info(text);
        },
        warn(text) {
            oldConsole.warn(text);
        },
        error(err) {
            oldConsole.error(err);
            consoleMessages.push({
                message: `${err.name}: ${err.message}`,
                class: "log log--error"
            });
        }
    }
})(window.console);
*/